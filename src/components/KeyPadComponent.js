import React from 'react'

export const KeyPadComponent = ({onClick}) => {
    const click = (e) => onClick(e.target.name);
    const keys = ['(', 'CE', ')', 'C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/'];

    return (
        <div className="button"> 
            { keys.map((key) =>  
                <button 
                    key={key} 
                    name = {key} 
                    onClick= {click}
                > 
                {key} 
                </button>)}
        </div>
    )
}

export default KeyPadComponent;
