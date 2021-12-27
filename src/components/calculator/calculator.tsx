import React, {FC} from "react";
import styles from "./calculator.module.css";

export const Calculator: FC = ({children}): JSX.Element => {
    return(
        <div className={styles.calculator}>
            {children}
        </div>
    )
}