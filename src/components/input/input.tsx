import React, {FC} from "react";
import styles from "./input.module.css";

type TProps = {
    values: Array<string>;
    result: number | string;
}

export const Input: FC<TProps> = ({values, result}): JSX.Element => {
    let joinStr = values.length ? values.join() : "0"
    const display = joinStr ? joinStr.replace(/,/g, '') : result

    return (
        <div className={styles.input}>{display}</div>
    )
}