import { FC } from 'react';
import { Btn, Messages, ResponsiveButton, Text } from './style';
import { Props } from '../type';

export const MessageNoResponse: FC<Props> = (props) => {
    return (
        <>
            <Messages>
                <Text>Пока что тут ничего нет, но мы можем это исправить</Text>
                <Btn href={props.href}>
                    <ResponsiveButton
                        $variant='primary'
                        $btnWidth='l'
                        $btnSquareSize='button--square--size-l'
                        type='submit'
                    >
                        СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
                    </ResponsiveButton>
                </Btn>
            </Messages>
        </>
    );
};
