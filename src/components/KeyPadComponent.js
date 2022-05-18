import React from 'react';


const buttons = [
    [
        {text:"(",value:"(",className:"actions"},
        {text:"CE",value:"CE",className:"actions"},
        {text:")",value:")",className:"actions"},
        {text:"C",value:"C",className:"actions"},
    ],
    [
        {text:"1",value:"1",className:""},
        {text:"2",value:"2",className:""},
        {text:"3",value:"3",className:""},
        {text:"+",value:"+",className:"actions"},
    ],
    [
        {text:"4",value:"4",className:""},
        {text:"5",value:"5",className:""},
        {text:"6",value:"6",className:""},
        {text:"-",value:"-",className:"actions"},
    ],
    [
        {text:"7",value:"7",className:""},
        {text:"8",value:"8",className:""},
        {text:"9",value:"9",className:""},
        {text:"x",value:"*",className:"actions"},
    ],
    [
        {text:".",value:".",className:""},
        {text:"0",value:"0",className:""},
        {text:"=",value:"=",className:"equal"},
        {text:"÷",value:"/",className:"actions"},
    ],
]
const KeyPadComponent = ({onClick}) => {

    return (
        <div className="button">
            {
                buttons.map((rows) => (
                    <>
                        {rows.map((item, index) => {
                            return (
                                <button key={index} className={item.className} onClick={() => onClick(item.value)}>{item.text}</button>)
                        })}
                        <br/>
                    </>

                ))
            }
        </div>
    );
}


export default KeyPadComponent;
