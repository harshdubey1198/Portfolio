import React,{useState, useRef} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
// import '../style.css';
import axios from "axios";
 import Particle from "../Particle"

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        if (e.target.name === "resume") {
            setFormData({...formData, [e.target.name] : e.target.files[0]});
        } else {
            setFormData({...formData, [e.target.name] : e.target.value});
        }
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setNotDone(true);
        } else {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append("name", formData.name);
                formDataToSend.append("email", formData.email);
                formDataToSend.append("mobile", formData.mobile);
                formDataToSend.append("message", formData.message);
                formDataToSend.append("resume", formData.resume);
                await axios.post("http://localhost:10000/submit-form", formDataToSend, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                setDone(true);
                setFormData({});
            } catch (error) {
                console.log(error);
            }
        }
    };

    return(
        <Container style={{paddingTop: '200px',paddingBottom:'100px'}} ><Particle />
            <Row>
                <Col md={6} className="c-left" style={{paddingBottom:'10px'}}>
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail} style={{paddingBottom:"90px"}}>
                        
                        <input type="text" name="name" className="user"  placeholder="Name" onChange={handleChange} value={formData.name || ""}/>
                        <input type="email" name="email" className="user" placeholder="Email" onChange={handleChange} value={formData.email || ""}/>
                        <input type="tel" name="mobile" className="user" placeholder="Mobile" onChange={handleChange} value={formData.mobile || ""}/> 
                        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} value={formData.message || ""}/>
                        <input type="file" name="resume" className="user" onChange={handleChange}/>
                        <span className='not-done'>{notDone && "Please, fill all the input field"}</span>



                        <Button  type="submit" className="btn-10" enabled={done} >Send</Button>


                        <span className='done' >{done && " Thanks for contacting me. "}</span>
                    </form>
                </Col>
            </Row>
        </Container>
       
    );
};

export default Contact;
