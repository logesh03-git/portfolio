import React from 'react';
import { useEffect , useState } from 'react';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  const [loopNum , setLoopNum] = useState(0);
  const [isDeleting , setIsDeleting] = useState(false);
  const toRotate = ["Web Developer" , "Web Designer" , "MERN Stack Developer"];
  const [text ,setText] =useState('');
  const [delta ,setDelta] =useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(()=>{
    let ticker =setInterval(()=>{
      tick();
    },delta)

    return ()=>{ clearInterval(ticker)};
  }, [ text ])

  const tick = ()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0 , text.length - 1) : fullText.substring(0,text.length + 1);

    setText(updatedText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta /2);
    }
    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }
    else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500)
    }
  }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center' >
                <Col xs={12} md={6} xl={7} className='banner__textcon'>
                  <TrackVisibility>
                  {({ isVisible }) => 
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 

                  <span className='tagline'>Welcome to my portfolio</span>
                  <h1>{" Hi I'M Logesh "}</h1>
                  <span className='wrap'>{text}</span>
                  <p> I am a passionate and motivated Junior MERN Stack Developer with a strong foundation in developing web applications using MongoDB, Express.js, React.js, and Node.js. As a recent graduate, I have honed my skills through various projects and hands-on experience, which have equipped me with the ability to build and maintain efficient, responsive, and user-friendly web applications.</p>
                  <button><a href="https://www.linkedin.com/in/logeshbabu03/">Let's Connect <ArrowRightCircle size={25} /> </a></button>
                    
                    </div>}
                  </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt='header img'className='Header img' />

                </Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default Banner