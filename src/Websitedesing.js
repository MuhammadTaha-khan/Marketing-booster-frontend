import React from 'react'
import './component/Websitedesi.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WebDesign01 from './images/WebDesign01.avif';
import WebDesign02 from './images/WebDesign02.avif';
import 'animate.css';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import client04 from './images/client04.jpg';
import client05 from './images/client05.jpg';
import client06 from './images/client06.jpg';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import client5 from './images/client5.jpg';

function Websitedesing() {
    const Wbdesign = [
        {
            name: "Yaser Irshad",
            title: "With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized.With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized."
        },
        {
            name: "Yaser Irshad",
            title: "With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized.With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized."
        },
        {
            name: "Yaser Irshad",
            title: "With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized.With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized."
        },
        {
            name: "Yaser Irshad",
            title: "With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized.With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized."
        },
        {
            name: "Yaser Irshad",
            title: "With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized.With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized."
        },
        {
            name: "Yaser Irshad",
            title: "With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized.With our eCommerce web design solutions and services, leave good and lasting impression on your consuners’ minds. We bring quality to your website with our results-driven and consumer-oriented expertise that keep your eCommerce website fully optimized."
        },
    ]
     const portfolio= [
        { img:client5 },
        { img:client5 },
        { img:client5 },
     ]

     const clientsay =[
        {
            img:client04,
            name:"Maryam",
            desc:"Marketing Booster is amazing! Their user-friendly software significantly improves our marketing efforts. The service is exceptional, and we’ve seen fantastic results. "
        },
        {
            img:client05,
            name:"Ayesha",
            desc:"I'm very pleased with Marketing Booster. Their tools are highly effective, and the team provides exceptional support. I highly recommend them to any business seeking growth!"
        },
        {
            img:client06,
            name:"Zain",
            desc:"Marketing Booster has excellent software that made our marketing much easier and more effective. The experience has been fantastic, and I highly recommend their services to others!"
        }
     ]

    return (
        <div className='Websitedesign'>
            <Container fluid="md " >
                <Row>
                    <Col sm={8} className='left mt-5'>
                        {/* <Col sm={11} className="well mt-5 mb-4 p-2 animate__animated animate__fadeInUp"><h4>Supercharge Your Digital Destiny</h4></Col> */}
                        <Col sm={12} className="head-h p-1 mb-4 animate__animated animate__fadeInLeft"><h1>WEBSITE DESIGN</h1></Col>
                        <Col sm={11} style={{ fontSize: '20px', color:'#74777b' }} className="para p-2 mb-4 animate__animated animate__fadeInDown"><p>We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.</p></Col>
                        <Col sm={6} className="info p-2 mb-5"><a href="#action">Get A Free Proposal</a></Col>
                    </Col>
                    <Col sm={4} className="right para p-2 mb-4 animate__animated animate__fadeInRight">
                        <img src={WebDesign01} alt="Descriptio " />
                    </Col>
                </Row>
            </Container>
            {/* -------------------------------------------panel2----------------------------------- */}
            <h1 className='text-center Websitedesing-panel2-heading'>What's Include In Our Website Design Services</h1>
            <div className="container team-section">
                <div className="row">
                    {Wbdesign.map((member, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="team-member-web card p-3 text-center mb-4">
                                <h3 className="card-title">{member.name}</h3>
                                <p className="card-text">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* --------------------------------------panel 3------------------------------------ */}
            <Container fluid="md mt-5" >
                <Row>
                    <Col sm={8} className='left'>
                        <Col sm={12} className="head-h p-1 mb-4 animate__animated animate__fadeInLeft"><h1>WEBSITE DESIGN</h1></Col>
                        <Col sm={11} style={{ fontSize: '20px', }} className="para p-2 mb-2 animate__animated animate__fadeInDown"><p>We're Your Strategic Partner In The Digital World. Our Mission Is To Help Your Brand Navigate The Dynamic Landscape Of Social Media, Creating A Powerful Online Presence That Captivates Your Audience And Drives Results.</p></Col>
                        <Col className='points' >
                        <CheckRoundedIcon/>
                        <p>Boost Search Rankings</p>
                        </Col>
                        <Col className='points' >
                        <CheckRoundedIcon/>
                        <p>Boost Search Rankings</p>
                        </Col>
                        <Col className='points' >
                        <CheckRoundedIcon/>
                        <p>Boost Search Rankings</p>
                        </Col>
                    </Col>
                    <Col sm={4} className="right para p-2 mb-4 animate__animated animate__fadeInRight">
                        <img src={WebDesign02} alt="Descriptio "/>
                    </Col>
                </Row>
            </Container>
            {/* --------------------------------------PORFOLIO-------------------------------------- */}
            <div className="team-pag mt-5">
            <Container fluid='lg'>
                <Row className="text-center mb-5">
                    <Col>
                        <Col style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center',gap:'4px'}}>
                        <DragHandleIcon style={{fontSize:'50px', color:'#a4fd25'}}/>
                        <h5 className="icon-text">PORTFOLIO</h5>
                        </Col>
                        <h1 className="websitedesign-port-heading mt-5">OUR WORK</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                {portfolio.map((member, index) => (
                    <Col md={4} key={index} className="text-center">
                        <div className="WBdes-img">
                            <img src={member.img} alt="Shahrukh Nazar Malik" className="img-fluid" />
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
        {/* -----------------------------------What client Say------------------------------------------------ */}
        <div className="websitedesign-section">
            <Container>
                <Row className="text-center mb-5">
                    {/* <Col> */}
                    <Col style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center',gap:'4px'}}>
                        <DragHandleIcon style={{fontSize:'50px' , color:'#a4fd25'}}/>
                        <h4 className="icon-text">CLIENT</h4>
                    </Col>
                        <h2 className="websitedesign-client-heading mt-5">WHAT CLIENT SAYS</h2>
                    {/* </Col> */}
                </Row>
                <Row className="justify-content-center mb-4">
                {clientsay.map((member, index) => (
                    <Col xs={10} sm={5} md={4} lg={3} key={index} className="websitedesign-card">
                        <Col className='testimonial-card-head mb-3'>
                        <img src={member.img} alt="Suncrop Group" className="testimonial-logo" />
                        <h3>{member.name}</h3>
                        </Col>
                        <p>{member.desc}</p>
                        <div className="testimonial-rating">★★★★★</div>
                    </Col>
                      ))}
                </Row>
            </Container>
        </div>
    </div>
    )
}
export default Websitedesing
