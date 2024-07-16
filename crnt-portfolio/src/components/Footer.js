import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/img/logo.svg';
import navIcon11 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
  return (
    <footer className='footer'>
       <Container>
        <Row className='align-item-center'>
            <Col sm={6} className='text-center '>
            <h3 className='brandname'>Logesh</h3>
            </Col>
            <Col  sm={6} className=' copyrightcon text-sm-end'>
              <div className='social-icons'>
                <a href='https://www.linkedin.com/in/logeshbabu03/'><img src={navIcon11} alt='icon' /></a>
                <a href=''><img src={navIcon2} alt='icon' /></a>
                <a href=''><img src={navIcon3} alt='icon' /></a>
              </div>
              <p> copy right 2024. All right reserved</p>
            </Col>
        </Row>
       </Container>
    </footer>
  )
}

export default Footer