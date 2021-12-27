import React, {FC} from "react";
import styles from "./operators-block.module.css";
import {Button} from "../button/button";

type TProps = {
    onChange: (val: string) => void
}

export const OperatorsBlock: FC<TProps> = ({onChange}): JSX.Element => {
    return (
        <div className={styles.operators}>
            <Button onClick={onChange} symbol={"+"}/>
            <Button onClick={onChange} symbol={"-"}/>
            <Button onClick={onChange} symbol={"*"}/>
            <Button onClick={onChange} symbol={"/"}/>
        </div>
    )
}