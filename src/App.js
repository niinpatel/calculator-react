
import React, {useState} from 'react'
import './App.css';

import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import useKeyPressed from './hooks/useKeyPressed';

const App = ()=>  {
    const initialValue = "0"
    const numberKeys= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    const operationKeys = ['(', ')', 'C', '+', '-', '*', '=', '/']
    const [result, setResult] = useState(initialValue)
    
    useKeyPressed([...numberKeys,...operationKeys], (key) => onClick(key));  

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


