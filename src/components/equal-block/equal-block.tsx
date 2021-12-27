import React, {FC} from "react";
import styles from "./equal-block.module.css";

type TProps = {
    getResult: () => void;
}

export const EqualBlock: FC<TProps> = ({getResult}): JSX.Element => {
    return (
        <div className={styles.equal} onClick={getResult}>=</div>
    )
}