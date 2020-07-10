import React from 'react';
import Card from 'react-bootstrap/Card';
import mass from '../assets/massage.jpg';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';



export const MyCard = () => (
    <div style={{paddingTop: "5px"}}>
        <Card className="bg-dark text-white">
        <Card.Img src={mass} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title style={{color:"#E1DEEE", fontSize:"50px", textAlign: "center" }}>60 Minute Massage</Card.Title>
            <Button style={{backgroundColor: "#443F5B", borderColor: "#443F5B", color: "#E1DEEE", fontWeight: "bold"}} size="lg" block href="https://square.site/book/NFB23H73GAVE4/goodrich-bodywork" target="_blank">
            BOOK NOW
            </Button>
        </Card.ImgOverlay>
        </Card>
        
    </div>
)