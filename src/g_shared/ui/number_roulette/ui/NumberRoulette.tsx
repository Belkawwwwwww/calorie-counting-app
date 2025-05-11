import React, { useState, useRef, useEffect } from 'react';
import { VerticalScroll } from '../component/VerticalScroll';

export const NumberRoulette = () => {
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

    const handleNumberSelected = (number: number) => {
        setSelectedNumber(number);
    };

    return (
        <div>
            {selectedNumber !== null ? (
                <p>Выбранное число: {selectedNumber}</p>
            ): null}
            <VerticalScroll onNumberSelected={handleNumberSelected} />
        </div>
    );
};

