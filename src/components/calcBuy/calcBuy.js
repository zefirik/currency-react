import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const CalcBuy = (props) => {
    
    const [amount, setAmount] = useState("");
  
      const handleSubmit = (evt) => {
      evt.preventDefault();  
      }
    return (
        <Container className = "CalcBuy">
            <p> You can buy for:</p>
            <Row md = "auto" className = "d-flex justify-content-center" >  
            <form onSubmit = {handleSubmit} >
            <Col md>  
                <Form.Control type="number"  
                              value = {amount}
                              onChange = {e => setAmount(e.target.value)}
                              placeholder="UAH" 
                /> 
                </Col>
            </form>
            <h3><span className="badge bg-secondary">UAH</span></h3>
            </Row> 
            <ul>
            {props.rates.map((item) => (
                <p key={item.ccy}>
                {item.ccy} : {( amount / item.sale  ).toFixed(2)}
                </p>
            ))}
            </ul>     
           
        </Container>
        
    );
}

export default CalcBuy;