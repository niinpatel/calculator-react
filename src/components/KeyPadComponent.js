import React from 'react';


const buttons = [
    [
        {value:"(",className:"actions"},
        {value:"CE",className:"actions"},
        {value:")",className:"actions"},
        {value:"C",className:"actions"},
    ],
    [
        {value:"1",className:""},
        {value:"2",className:""},
        {value:"3",className:""},
        {value:"+",className:"actions"},
    ],
    [
        {value:"4",className:""},
        {value:"5",className:""},
        {value:"6",className:""},
        {value:"-",className:"actions"},
    ],
    [
        {value:"7",className:""},
        {value:"8",className:""},
        {value:"9",className:""},
        {value:"x",className:"actions"},
    ],
    [
        {value:".",className:""},
        {value:"0",className:""},
        {value:"=",className:"equal"},
        {value:"+",className:"actions"},
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
                                <button key={index} className={item.className} onClick={() => onClick(item.value)}>{item.value}</button>)
                        })}
                        <br/>
                    </>

                ))
            }
        </div>
    );
}


export default KeyPadComponent;
