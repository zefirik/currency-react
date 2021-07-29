import React from "react";

const CalcBuy = (props) => {

    
    return (
        <div className = "CalcBuy">
            <p> You can buy for:</p>
            <ul>
            {props.rates.map(item => (
                <li key={item.ccy}>
                {item.ccy} : {item.sale}
                </li>
            ))}
            </ul>            
        </div>  
    );
}

export default CalcBuy;