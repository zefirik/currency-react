import React, { useState } from "react";

const CalcBuy = (props) => {
    
    const [amount, setAmount] = useState("");
  
      const handleSubmit = (evt) => {
      evt.preventDefault();  
      }
    return (
        <div className = "CalcBuy">
            <p> You can buy for:</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    /> UAH
                </label>
             </form>
            <ul>
            {props.rates.map((item) => (
                <p key={item.ccy}>
                {item.ccy} : {( amount / item.sale  ).toFixed(2)}
                </p>
            ))}
            </ul>     
             
        </div>  
        
    );
}

export default CalcBuy;