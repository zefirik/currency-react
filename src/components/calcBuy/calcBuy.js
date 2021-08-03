import React, { useState } from "react";
import { Container,
         Row,
         Col,
         Form } from "react-bootstrap";
import { useFetch } from "../../components/hooks/useFetch";

const CalcBuy = () => {
    
    const [amount, setAmount] = useState("");
    const apiUrl = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    const {rates} = useFetch( apiUrl );

    return (
        <Container>
            <p> You can buy for:</p>
            <Row md = "auto" xs = "auto" className = "d-flex justify-content-center" >  
                <Col>  
                <form>
                    <Form.Control type="number"  
                                  value = {amount}
                                  onChange = {e => setAmount(e.target.value)}
                                  placeholder="UAH"
                                  className="text-center" /> 
                </form>
                </Col>
            </Row>
            <Row>  
            <ul  className="mt-3" >
            {rates.map((item) => (
                <p key={item.ccy}>
                {item.ccy} : {( amount / item.sale  ).toFixed(2)}
                </p>
            ))}
            </ul>     
            </Row> 
        </Container>
        
    );
}

export default CalcBuy;