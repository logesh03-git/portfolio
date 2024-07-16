import React from 'react';
import prjimg1 from '../assets/img/screenshot1.png';
import prjimg2 from '../assets/img/screenshot2.png';
import prjimg3 from '../assets/img/screenshot3.png';
import prjimg4 from '../assets/img/screenshot4.png';
import prjimg5 from '../assets/img/screenshot5.png';
import prjimg6 from '../assets/img/screenshot6.png';
import prjimg7 from '../assets/img/screenshot7.jpg';
import colorSharp2 from '../assets/img/color-sharp2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ProjectCard from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
   const projects1 = [
    {
        title:'Multi vendor management system',
        description:'MERN Stack + Tailwind CSS + cloudinary + Stripe for payment',
        imgUrl: prjimg4,
    }
    ,
    {
        title:'E-Commerce',
        description:'MERN Stack',
        imgUrl: prjimg1,
    }
    ,
    {
        title:'Video Sharing Application',
        description:'MERN Stack + cloudinary',
        imgUrl: prjimg6,
    }
    ,
    {
        title:'Hulu Clone',
        description:'React JS + TMDb API',
        imgUrl: prjimg2,
    }
    ,
    {
        title:'Portfolio',
        description:'React JS + Material UI',
        imgUrl: prjimg5,
    }
    ,
    {
        title:'User Management System',
        description:'MERN Stack',
        imgUrl: prjimg3,
    }
    ,
    {
        title:'Todo List',
        description:'HTML5 + CSS3 + Javascript',
        imgUrl: prjimg7,
    }
   ]

   const projects2 = [
    {
        title:'Hulu Clone',
        description:'React JS + TMDb API',
        imgUrl: prjimg2,
    }
    ,
    {
        title:'Todo List',
        description:'HTML5 + CSS3 + Javascript',
        imgUrl: prjimg7,
    }
    ,
    {
        title:'Portfolio',
        description:'React JS + Material UI',
        imgUrl: prjimg5,
    }
   ]

   const projects3 = [
    {
        title:'Multi vendor management system',
        description:'MERN Stack + Tailwind CSS + cloudinary + Stripe for payment',
        imgUrl: prjimg4,
    }
    ,
    {
        title:'User Management System',
        description:'MERN Stack',
        imgUrl: prjimg3,
    }
    ,
    {
        title:'Video Sharing Application',
        description:'MERN Stack + cloudinary',
        imgUrl: prjimg6,
    }
  ]

   const projects4 = [
    {
        title:'Video Sharing Application',
        description:'MERN Stack + cloudinary',
        imgUrl: prjimg6,
    }
    ,
    {
        title:'Multi vendor management system',
        description:'MERN Stack + Tailwind CSS + cloudinary + Stripe for payment',
        imgUrl: prjimg4,
    }
    ,
    {
        title:'E-Commerce',
        description:'MERN Stack',
        imgUrl: prjimg1,
    }
    ,
    {
      title:'User Management System',
      description:'MERN Stack',
      imgUrl: prjimg3,
    }
   ]


  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                  {({ isVisible }) => 
                  <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <h2>projects</h2>
                <p>Welcome to the Projects section of my portfolio website! Here, you'll find a curated selection of the diverse and innovative projects I've worked on as a MERN stack developer. Each project demonstrates my proficiency in full-stack development, showcasing my ability to build robust and user-friendly web applications</p>
                </div>}
                  </TrackVisibility>
                <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant="pills" className='nav-pills justify-content-center align-items-center' id='pills-tab'>
               <Nav.Item>
                 <Nav.Link eventKey="first">All Project</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="secound"> Front End </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="third"> Back End. </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link eventKey="fourth">Full Stack </Nav.Link>
               </Nav.Item>
                 </Nav>
                 <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects1.map((project , index)=>{
                                    return(
                                        <ProjectCard key={index} {...project} />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="secound">
                    <Row>
                            {
                                projects2.map((project , index)=>{
                                    return(
                                        <ProjectCard key={index} {...project} />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                            {
                                projects3.map((project , index)=>{
                                    return(
                                        <ProjectCard key={index} {...project} />
                                    )
                                })
                            }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <Row>
                            {
                                projects4.map((project , index)=>{
                                    return(
                                        <ProjectCard key={index} {...project} />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                 </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt='back ground img' />
    </section>
  )
}


export default Projects