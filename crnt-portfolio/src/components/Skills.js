import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>Skills</h2>
                    <p>Welcome to the Skills section of my portfolio website! Here, you can explore the range of technologies and tools I've mastered as a MERN stack developer. My skills span both front-end and back-end development, enabling me to create comprehensive, efficient, and user-friendly web applications. Below, you'll find an overview of the key technologies I use and the expertise I bring to every project.</p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={meter1} alt='skill img'/>
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='skill img'/>
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='skill img'/>
                            <h5>BOOTSTRAP</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='skill img'/>
                            <h5>MATERIAL UI</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='skill img'/>
                            <h5>JAVA SCRIPT</h5>
                        </div>
                        <div className='item'>
                            <img src={meter3} alt='skill img'/>
                            <h5>REACT</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='skill img'/>
                            <h5>NODE JS</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='skill img'/>
                            <h5>EXPRESS JS</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='skill img'/>
                            <h5>MongoDB</h5>
                        </div>

                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt='background img' />
    </section>
  )
}

export default Skills;