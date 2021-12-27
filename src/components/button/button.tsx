import React, {FC} from "react";

type TProps = {
    onClick: (value: string) => void;
    symbol: string;
}

export const Button: FC<TProps> = ({onClick, symbol}): JSX.Element => (

    <div onClick={() => onClick(symbol)}>{symbol}</div>
)