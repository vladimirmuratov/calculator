import React, {FC, useCallback, useState} from 'react';
import {Calculator} from "../calculator/calculator";
import {Input} from "../input/input";
import {ButtonsPanel} from "../buttons-panel/buttons-panel";
import {OperatorsBlock} from "../operators-block/operators-block";
import {LeftBlock} from "../left-block/left-block";
import {EqualBlock} from "../equal-block/equal-block";

const App: FC = (): JSX.Element => {
    const [values, setValues] = useState<string[]>([])
    const [result, setResult] = useState<string>('')

    const handleResult = useCallback(() => {
        let joinStr = values.join()
        const removeChars = joinStr.replace(/,/g, '')
        const tempVal = eval(removeChars)
        setResult(tempVal)
        setValues([tempVal])
    }, [values])

    const handleChange = useCallback((val) => {
        if (values.length === 0) {
            if (!isNaN(val) && val !== "0") {
                setValues([val])
            }
        } else {
            setValues(prevState => [
                ...prevState,
                val
            ])
        }

    }, [values.length])

    const handleClear = useCallback(() => {
        setValues([])
        setResult('')
    }, [])

    return (
        <Calculator>
            <Input values={values} result={result}/>
            <ButtonsPanel>
                <OperatorsBlock onChange={handleChange}/>
                <LeftBlock onChange={handleChange} onClear={handleClear}/>
                <EqualBlock getResult={handleResult}/>
            </ButtonsPanel>
        </Calculator>
    );
}

export default App;
