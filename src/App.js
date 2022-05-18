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
        setResult(prevState => prevState.slice(0, -1))
    }

    const onClick = (button) => {
        switch (button){
            case "=" : return calculate()
            case "C" : return  reset()
            case "CE" : return backspace()
            default : setResult(prevState => prevState+button)
        }
    }

    return (
        <div className={`App`}>
            <div className="calculator-body">
                <ResultComponent result={result}/>
                <KeyPadComponent onClick={onClick}/>
            </div>

            <div style={{backgroundColor:"white"}}>
            </div>

        </div>
    )
}

export default App

