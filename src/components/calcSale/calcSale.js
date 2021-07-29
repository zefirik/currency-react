import React from "react";

const CalcSale = (props) => {

    
    return (
        <div className = "CalcSale">
            <p> You can sale for: for a many money </p>
            <ul>
            {props.rates.map((item) => (
                <li key={item.ccy}>
                {item.ccy} : {item.buy}
                </li>
            ))}
            </ul>            
        </div>  
    );
}

export default CalcSale;