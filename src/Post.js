import React from 'react'
import './component/pos.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SMM from './images/SMM.jpg';
import advertisingmarketing from './images/advertisingmarketing.jpg';
import webdesign from './images/WebDesign.avif';
import Graphicdesigning from './images/Graphicdesigning.jpg';
import VideoEditing from './images/VideoEditing.jpg';
import SearchEO from './images/SearchEO.jpg';
import { Container } from 'react-bootstrap';
import DragHandleIcon from '@mui/icons-material/DragHandle';

function post() {

  const Wbdesign = [
    {
      title: "Website Design",
      text: "Our website design service delivers visually appealing, easy-to-navigate sites tailored to your brand. We focus on user experience, ensuring your audience stays engaged and your goals are met across all devices",
      img: webdesign
    },
    {
      title: "Digital Advertising",
      text: "We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.",
      img: advertisingmarketing
    },
    {
      title: "Social Media Management",
      text: "We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.",
      img: SMM
    },
    {
      title: "Graphic Designing",
      text: "We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.",
      img: Graphicdesigning
    },
    {
      title: "Video Editing",
      text: "We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.",
      img: VideoEditing
    },
    {
      title: "SEO",
      text: "We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.",
      img: SearchEO
    },
  ]



  return (
    <div className='main-post-page'>
      <Container fluid='lg' className=' post-page'>
        <Row>
          <Col>
            <Col style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              <DragHandleIcon style={{ fontSize: '50px', color: '#a4fd25' }} />
              <h5 className="icon-text">TESTIMONIAL</h5>
            </Col>
            <h2 className="post-heading-text mt-4">The Service We Provide For You</h2>
          </Col>
        </Row>
        <Row sm={2} xs={1} md={3} className="g-4">
          {Wbdesign.map((member, index) => (
            <Col key={index}>
              <Card style={{ width: '18rem', marginTop: '25px', marginBottom: '20px', background: '#2d2d2d', border:'1px solid #a4fd25', overflow:'hidden'}}>
                <Card.Img variant="top" src={member.img} />
                <Card.Body>
                  <Card.Title className='text-center' style={{ color: '#ffffff', fontWeight:'700' }}>{member.title}</Card.Title>
                  <Card.Text style={{ color: '#f0f0f0' }}>{member.text}</Card.Text>
                  <Button className='post-btn' style={{ backgroundColor: '#a4fd25', border: 'none', color:'#000' }}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container >
    </div>
  );
}


export default post
