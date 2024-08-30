import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function NavLogo() {

return (
  <>
    {/* <Navbar style={{ backgroundColor: '#a4fd25', height:'50px'}}> */}
    <Navbar style={{ backgroundColor: '#a4fd25', height:'50px', overflow:'hidden'}}>
      <Container>
        <div className="icon-container" style={{ marginLeft: 'auto' }}>
          <a href="http://www.facebook.com/marketingbooster.tech" target="_blank" rel="noopener noreferrer">
          <FacebookIcon style={{ marginRight: '20px' ,fontSize: '1.8rem',color:'white'  }} />
          </a>
          <a href="https://www.linkedin.com/company/90827404/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ marginRight: '20px' ,fontSize: '1.8rem' ,color:'white' }} />
          </a>
          <a href="https://gist.github.com/Developer752" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}} />
          </a>
          {/* <GitHubIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}}/> */}
          <a href="https://www.instagram.com/marketingbooster.tech/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}} />
          </a>
          <a href="https://wa.me/92186064657" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}} />
          </a>
          <a href="https://maps.app.goo.gl/v2xMyuc34Q7H456M9" target="_blank" rel="noopener noreferrer">
          <LocationOnIcon style={{ marginRight: '20px',fontSize: '1.8rem' ,color:'white'}} />
          </a>
          
          {/* <WhatsAppIcon style={{ marginRight: '10px' ,fontSize: '1.8rem' ,color:'white' }} /> */}
          {/* <LocationOnIcon style={{ marginRight: '10px' ,fontSize: '1.8rem' ,color:'white' }} /> */}
        </div>
      </Container>
    </Navbar>
    </>
  )
}

export default NavLogo
