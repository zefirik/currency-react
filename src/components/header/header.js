import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";

const Header = () => {
  const apiUrl = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  const {rates} = useFetch( apiUrl );

    return (
        <Container>
          <Row className="my-3">
            <h1> Actual currency </h1>
          </Row>
          <Row >
            <ListGroup variant="horizontal" className = "d-flex justify-content-center" >
              {rates.map((item) => (
                <ListGroup.Item key = {item.ccy}>
                  {item.ccy} : <br/>
                  {item.buy} <br/> {item.sale}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Row>
        </Container>  
    );
}

export default Header;
