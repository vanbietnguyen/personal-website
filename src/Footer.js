import React from 'react';
import './bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center- py-3">My Portfolio Website</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;