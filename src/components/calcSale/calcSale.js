import React, { useState } from "react";

const CalcSale = (props) => {
   
    const [selectedCurr,setSelectedCurr] = useState(0);
    const [amount, setAmount] = useState("");

    function handleSelectChange(event) {
        setSelectedCurr(event.target.value);
     };
    function handleSubmit(evt) {
        evt.preventDefault() 
     };
     console.log(selectedCurr);
   

    return (
        <div className = "CalcSale">
            <p> You can sale: (pls choose first currencies) </p>
            <form onSubmit = {handleSubmit} >
                <label>
                    Amount:
                    <input
                        type = "number"
                        value = {amount}
                        onChange = {e => setAmount(e.target.value)}
                    /> 
                </label>
             
            <select 
             value = {selectedCurr} 
             onChange = {handleSelectChange}
            >
            {props.rates.map((item) => (
                <option key = {item.ccy} value = {item.buy}> {item.ccy} </option>
                )
            )}   
            </select>
            </form>
            <p> You can get: {(amount* selectedCurr).toFixed(2)} UAH</p>  
        </div>  
    );
}

export default CalcSale;