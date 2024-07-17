import React from 'react'
import { useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import contactimg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    const formInitialInfo = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
        }
        const [formDetail , setFormDetail] = useState(formInitialInfo);
        const [buttonText , setButtonText] = useState('send');
        const [status , setStatus] = useState({});

        const onFormUpdate = (category, value) =>{
            setFormDetail({
                ...formDetail,
                [category] : value ,
            })
        }
        const handleSummit = async (e) => {
            e.preventDefault();
            setButtonText('sending');
        
            try {
                let response = await fetch("https://portfolio-backend-vert-gamma.vercel.app/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify(formDetail),
                });
        
                setButtonText('send');
        
                // Await the result of response.json() to get the actual result
                let result = await response.json();
                
                setFormDetail(formInitialInfo);
        
                if (result.code === 200) {
                    setStatus({ success: true, message: 'Message sent successfully' });
                } else {
                    setStatus({ success: false, message: 'Something went wrong, try again later.' });
                }
            } catch (error) {
                console.error('Error:', error);
                setStatus({ success: false, message: 'An error occurred, please try again later.' });
            }
        };
        

  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                <TrackVisibility>
                  {({ isVisible }) => 
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> 

                    <img src={contactimg} alt='contact us' />
                    </div>}
                  </TrackVisibility>
                </Col>
                <Col md={6}>
                    <h2> Get In Touch</h2>
                    <form onSubmit={handleSummit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetail.firstName} placeholder='First Name' onChange={(e)=> onFormUpdate('firstName',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetail.lastName} placeholder='Last Name' onChange={(e)=> onFormUpdate('lastName',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='email' value={formDetail.email} placeholder='Email' onChange={(e)=> onFormUpdate('email',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='tel' value={formDetail.phone} placeholder='Contact Number' onChange={(e)=> onFormUpdate('phone',e.target.value)} />
                            </Col>
                            <Col>
                            <textarea rows={6} value={formDetail.message} placeholder='Leave Your Message Here' onChange={(e)=>onFormUpdate('message',e.target.value)} />
                            <button type='submit'><span>{buttonText}</span></button>
                            {
                                status.message &&
                                <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                            </Col>
                            
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact