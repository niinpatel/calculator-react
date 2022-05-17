import React, {useState} from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

const App =()=> {
    const [result, setResult] = useState("")
    const calculate = () => {
        var checkResult = ''
        if (result.includes('--')) {
            checkResult = result.replace('--', '+')
        } else {
            checkResult = result
        }
        try {
            // let stringRes = (eval(checkResult) || "").toString()
            let stringRes = Function('"use strict";return ('+ (checkResult||"") +')')().toString()
            setResult(stringRes)
        } catch (e) {
            setResult("error")
        }
    }
    const reset = () => {
        setResult("")
    }
    const backspace = () => {
        console.log(result)
        setResult(prevState => prevState.slice(0, -1))
    }
    const onClick = (button) => {
        if (button === "=") {
            calculate()
        } else if (button === "C") {
            reset()
        } else if (button === "CE") {
            backspace()
        } else {
            setResult(prevState => prevState + button)
        }
    }

    return (
        <div className={`App`}>
            <div className="calculator-body">
                <ResultComponent result={result}/>
                <KeyPadComponent onClick={onClick}/>
            </div>
        </div>
    )
}

export default App

