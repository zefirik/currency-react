import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";

const Header = (props) => {

    return (
        <Container>
          <Row >
            <h1> Actual currency </h1>
          </Row>
          <Row >
            <ListGroup variant="horizontal" className = "d-flex justify-content-center" >
              {props.rates.map((item) => (
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
