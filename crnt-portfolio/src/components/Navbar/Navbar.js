import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState ,useEffect } from 'react';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';



const Navbarcom = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);
      
    useEffect(()=>{
       const onScroll = ()=>{
        if(window.scrollY > 50){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
       }

       window.addEventListener('scroll' , onScroll);
       return () => window.removeEventListener('scroll' , onScroll);
    },[])

    const onUpadeteActiveLink =(value) =>{
        setActiveLink(value);
    }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
    <Container>
       
      <Navbar.Brand href="#home">
         <span>
         <h3 className='brandname'>Logesh</h3>
         </span> 
      </Navbar.Brand>
        
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"
           className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
           onClick={()=> onUpadeteActiveLink('home')}>
            Home
          </Nav.Link>
          <Nav.Link href="#skills"
          className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
          onClick={()=> onUpadeteActiveLink('skills')}>
            Skills
          </Nav.Link>
          <Nav.Link href="#projects"
          className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
          onClick={()=> onUpadeteActiveLink('projects')}>
            Projects
          </Nav.Link>
          <span className='navbar-text'>
           <div className='social-icons'>
             <a href='https://www.linkedin.com/in/logeshbabu03/'><img src={navIcon1} alt='icon'/></a>
             <a href=''><img src={navIcon2} alt='icon'/></a>
             <a href=''><img src={navIcon3} alt='icon'/></a>
           </div>
           <Nav.Link href="#contact" id='contactnbtn'
          className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
          onClick={()=> onUpadeteActiveLink('contact')}>
             <button className='vvd' onClick={()=>console.log('vvd')}><span>To Contact</span></button>
          </Nav.Link>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarcom