import React, { useState } from "react";
import { Form, Container, Row, Col  } from "react-bootstrap"

const CalcSale = (props) => {
    /*selectedCurr по умолчанию поставил 0, 
    так как до смены валют не тянутся данные*/
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
        <Container>
                <p> You can sale: (pls choose first currencies) </p> 

             
            <form onSubmit = {handleSubmit} >
            <Row md = "auto" className = "d-flex justify-content-center"> 
            <Col md = {2}>  
                <Form.Control type="number"  
                              value = {amount}
                              onChange = {e => setAmount(e.target.value)} 
                />  
            </Col>
            <Col md= {1}>  
                <Form.Select value = {selectedCurr} 
                          onChange = {handleSelectChange} 
                          aria-label="Floating label select example">
                    {props.rates.map((item) => (
                        <option key = {item.ccy} 
                                value = {item.buy}> {item.ccy} 
                        </option>
                    ))}
                </Form.Select>
            </Col>
            </Row>  
            </form>
            <p> You can get: {(amount* selectedCurr).toFixed(2)} UAH</p>  
        </Container> 
    );
}

export default CalcSale;
