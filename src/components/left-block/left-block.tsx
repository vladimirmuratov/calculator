import React, {FC} from "react";
import styles from "./left-block.module.css";
import {Button} from "../button/button";

type TProps = {
    onChange: (val: string) => void;
    onClear: () => void;
}

export const LeftBlock: FC<TProps> = ({onChange, onClear}): JSX.Element => {
    return (
        <div className={styles.leftPanel}>
            <div className={styles.numbers}>
                <Button onClick={onChange} symbol={"7"}/>
                <Button onClick={onChange} symbol={"8"}/>
                <Button onClick={onChange} symbol={"9"}/>
            </div>
            <div className={styles.numbers}>
                <Button onClick={onChange} symbol={"4"}/>
                <Button onClick={onChange} symbol={"5"}/>
                <Button onClick={onChange} symbol={"6"}/>
            </div>
            <div className={styles.numbers}>
                <Button onClick={onChange} symbol={"1"}/>
                <Button onClick={onChange} symbol={"2"}/>
                <Button onClick={onChange} symbol={"3"}/>
            </div>
            <div className={styles.numbers}>
                <Button onClick={onChange} symbol={"0"}/>
                <Button onClick={onChange} symbol={"."}/>
                <Button onClick={onClear} symbol={"AC"}/>
            </div>
        </div>
    )
}