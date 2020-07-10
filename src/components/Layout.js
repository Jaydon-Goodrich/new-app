import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container style={{backgroundColor: "#E1DEEE"}} fluid>
        {props.children}
    </Container>
)