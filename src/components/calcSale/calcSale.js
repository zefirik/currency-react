import React, { useState } from "react";
import { Form, 
         Container, 
         Row, 
         Col } from "react-bootstrap"

const CalcSale = (props) => {
    
   let [{buy}] = props.rates;

    
    const [selectedCurr,setSelectedCurr] = useState(buy);
    const [amount, setAmount] = useState(1);
   

    function handleSelectChange(event) {
        setSelectedCurr(event.target.value);
     };
   
     console.log(selectedCurr);
   

    return (
        <Container>
            <p> You can sale: (pls choose first currencies) </p>
            <form>
            <Row className = "d-flex justify-content-center"> 
            <Col sm="5" lg="3">   
                <Form.Control type="number"  
                              value = {amount}
                              onChange = {e => setAmount(e.target.value)}
                              className="text-center" />  
            </Col>
            <Col  sm="3" lg="2">  
                <Form.Select value = {selectedCurr} 
                             onChange = {handleSelectChange} 
                          >
                    {props.rates.map((item) => (
                        <option key = {item.ccy} 
                                value = {item.buy}> {item.ccy} 
                        </option>
                    ))}
                </Form.Select>
            </Col>
            </Row>  
            </form>
            <p className="mt-3"> You can get: {(amount* selectedCurr).toFixed(2)} UAH</p>  
        </Container> 
    );
}

export default CalcSale;
