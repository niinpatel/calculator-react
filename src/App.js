
import React, {useState} from 'react'
import './App.css';

import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

const App = ()=>  {
    const initialValue = "0"
    const operationKeys = ['(', ')', 'C', '+', '-', '*', '=', '/']
    const [result, setResult] = useState(initialValue)

    const onClick = buttonValue => {
        switch(buttonValue) {
            case "=":
                calculate()
              break;
            case "C":
                reset()
              break;
            case "CE":
                result === 'error' ? reset() : backspace()
                break;
            default:
                if((result === initialValue) && !operationKeys.includes(buttonValue)){
                    setResult(buttonValue);
                }
                else {
                    setResult(result + buttonValue)
                }
          }
    }
    const calculate = () => {
        const checkResult = result.includes('--') ? result.replace('--','+') : result
        try {
            const evaluatedResult = eval(checkResult);
            setResult(evaluatedResult);
        } catch (e) {
            setResult("error")
        }
    };

    const reset = () => {
        setResult(initialValue)
    };

    const backspace = () => {
        setResult(result.slice(0, -1))
    };
    
    return (
        <div>
            <div className="calculator-body">
                <h1>Simple Calculator</h1>
                <ResultComponent result={result}/>
                <KeyPadComponent onClick={onClick}/>
            </div>
        </div>
    )
}

export default App;


