import React from 'react'
import './component/Marcho.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from './images/MarChose.avif';
// import image1 from './images/client1.jpg';
// import image2 from './images/client2.jpg'

function MarChos() {
  return (
    <div className="main-Mar">
      <Container fluid='lg'>
        <Col className="head mb-4 pt-5 text-center"><h2>Why Choose Marketing Booster For Your Digital Marketing Agency? </h2></Col>
        <Row className="left-Mar mt-5">
          <Col md={6} >
            <img src={image} alt="Descriptio"/>
          </Col>
          <Col md={6} style={{ fontSize: '20px', color: '#f0f0f0' }} className="Mar-Chos-para p-2"><p>We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence  Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives.</p></Col>
        </Row>
      </Container>
    </div>
  )
}



export default MarChos
