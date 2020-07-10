import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import relaxImg from '../assets/relax2.jpg';

const Styles =styled.div`
    .jumbo {
        background: url(${relaxImg}) no-repeat;
        color: white;
        width: 100%;
        height: 100%;
        background-size: cover;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

`;

export const Jum = () => (
    <Styles>
        <Jumbotron fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>HOME</h1>
            </Container>
        </Jumbotron>
    </Styles>
)