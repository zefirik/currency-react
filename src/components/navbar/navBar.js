import React from "react";
import { Link } from 'react-router-dom';
import{ Col, Row, Container } from "react-bootstrap"

const NavBar = () => {
    return (
        <Container>
            <Row>
                {/* Использовал два пустых столбца 
                для постоянной центровки ссылок*/}
                <Col></Col>            
                <Col>
                    <Link to='/buy'> Buy </Link>
                </Col>
                <Col>
                    <Link to='/sale'> Sale </Link>                
                </Col>
                <Col></Col>  
            </Row>
        </Container>
    );
}

export default NavBar;