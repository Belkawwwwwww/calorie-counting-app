import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

export type VerticalScrollProps = {
    onNumberSelected: (number: number) => void;
    initialValue?: number;
    minValue?: number;
    maxValue?: number;
};

export type NumberItemProps = {
    numberHeight: number;
    isSelected: boolean;
};

const ScrollContainer = styled.div`
  overflow: hidden;
  height: 250px;
  cursor: grab;
  width: 50px;
  user-select: none;
  touch-action: pan-y;
  position: relative;
`;

export type ScrollableContentProps = {
    scrollPosition: number;
};

const ScrollableContent = styled.div<ScrollableContentProps>`
  width: 100%;
  transition: transform 0.10s ease-out;
  transform: translateY(-${(props) => props.scrollPosition}px);
`;

const NumberItem = styled.div<NumberItemProps>`
  height: ${(props) => props.numberHeight}px;
  text-align: center;
  font-size: 14px;
  padding: 0 5px;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
`;

const SelectionIndicator = styled.div`
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  height: 15px;
  background-color: var(--color-text4);;
  pointer-events: none;
  opacity: 60%;
`;

export const VerticalScroll = ({
    onNumberSelected,
    initialValue = 100,
    minValue = 1,
    maxValue = 500,
}: VerticalScrollProps) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const numberHeight = 20; // Высота каждого числа
    const numbers = Array.from({ length: maxValue - minValue + 1 }, (_, i) => i + minValue);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const startY = useRef<number>(0);

    const initialIndex = numbers.indexOf(initialValue);

    useEffect(() => {
        // Устанавливаем начальное положение скролла при монтировании компонента
        if (initialIndex !== -1) {
            setScrollPosition(initialIndex * numberHeight);
        }
    }, [initialIndex, numberHeight]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startY.current = e.clientY;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const deltaY = startY.current - e.clientY;
        setScrollPosition((prevPosition) => prevPosition + deltaY); startY.current = e.clientY;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        snapToNearestNumber();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const deltaY = startY.current - e.touches[0].clientY;
        setScrollPosition((prevPosition) => prevPosition + deltaY);
        startY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        snapToNearestNumber();
    };

    const snapToNearestNumber = () => {
        const nearestIndex = Math.round(scrollPosition / numberHeight);
        const snapPosition = nearestIndex * numberHeight;
        animateScroll(snapPosition);
    };

    const animateScroll = (targetPosition: number) => {
        const duration = 200;
        const start = scrollPosition;
        const change = targetPosition - start;
        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            startTime = startTime || currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setScrollPosition(start + change * progress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (scrollContainerRef.current) {
            const maxScroll = numbers.length * numberHeight - scrollContainerRef.current.clientHeight;
            const clampedScroll = Math.max(0, Math.min(scrollPosition, maxScroll));
            if (clampedScroll !== scrollPosition) {
                setScrollPosition(clampedScroll);
            }

            // Вычисляем индекс выбранного элемента, который находится посередине контейнера
            const containerHeight = scrollContainerRef.current?.clientHeight || 150;
            const middleIndex = Math.floor((scrollPosition + containerHeight / 2) / numberHeight); // Точный индекс

            // Провер что индекс находится в пределах допустимого диапазона
            if (middleIndex >= 0 && middleIndex < numbers.length) {
                onNumberSelected(numbers[middleIndex]);
            }
        }
    }, [scrollPosition, numberHeight, numbers, onNumberSelected]);

    return (
        <ScrollContainer
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={isDragging ? handleMouseMove : undefined}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={isDragging ? handleTouchMove : undefined}
            onTouchEnd={handleTouchEnd}
        >
            <ScrollableContent scrollPosition={scrollPosition}>
                {numbers.map((number, index) => {
                    const containerHeight = scrollContainerRef.current?.clientHeight || 150;
                    const middleIndex = Math.floor((scrollPosition + containerHeight / 2) / numberHeight);  // Точный индекс

                    const isSelected = index === middleIndex;

                    return (
                        <NumberItem key={number} numberHeight={numberHeight} isSelected={isSelected}>
                            {number}
                        </NumberItem>
                    );
                })}
            </ScrollableContent>
            <SelectionIndicator />
        </ScrollContainer>
    );
};