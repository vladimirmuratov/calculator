import React, {FC} from "react";
import styles from "./buttons.module.css";

export const ButtonsPanel: FC = ({children}): JSX.Element => {
    return (
        <div className={styles.buttons}>
            {children}
        </div>
    )
}