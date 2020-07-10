import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo512.png';

const Styles = styled.div`
    .navbar {
        background-color: #443F5B;
        height: 100px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #E1DEEE;
        font-size: 35px;
        

        &:hover {
            color: white;
        }
    }
`;

export const BottomHeader = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Goodrich Bodywork</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Item style={{color:"#E1DEEE"}}> <h4>&#169; 2020</h4></Nav.Item>
                    
                </Nav>
        </Navbar>
    </Styles>
)