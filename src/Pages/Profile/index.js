import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data2 from "./posts.json"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from "react-router-dom";
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineLike} from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Modal';


var arr2 = []
for (let i=0; i<data2.posts.length; i++) {
    arr2.push( {name: data2.posts[i].name, subject: data2.posts[i].subject, content: data2.posts[i].content, view: data2.posts[i].view, recommend: data2.posts[i].recommend, comment: data2.posts[i].comment, updated_at: data2.posts[i].updated_at});
  }


function Profile() {
    const [show, setShow] = useState(false);
    return (
        <Container>
            <br />
            <h4> 내 직책</h4>
            <Col>
                <br />
                {arr2.map((val, key) => {
                    return (
                        <div key={key}>
                        <Card>
                        <Card.Header>{val.name}</Card.Header>
                        <Card.Body>
                        <Card.Title>{val.subject}</Card.Title>
                        <Card.Text>
                            {val.content}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <Row className = "text-muted">
                                        <div style={{"width": "25px", "padding": "5px"}}><AiOutlineEye /></div>{val.view} 
                                        <div style={{"width": "25px", "padding": "5px"}}><AiOutlineLike /></div>{val.recommend}
                                        <div style={{"width": "25px", "padding": "5px"}}><FaRegComment /></div>{val.comment}
                                    </Row>
                                </Col>
                                <Col>
                                    <small className="text-muted" style={{"float": "right"}}>Last updated at {val.updated_at}</small>
                                </Col>                                       
                            </Row>
                        </Card.Footer>
                        </Card>
                        <br />
                        </div>
                        
                    )
                })}
            </Col>
            <br />
            <h4> 나의 고등학교</h4>
            <br />
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm="1">
                        고등학교
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="email" placeholder="Seoul High School" disabled/>
                    </Col>
                    <Col sm="2">
                        <Button variant="primary" type="submit">
                            Change
                        </Button>
                         

                    </Col>
                </Form.Group>
                
            </Form>
        </Container>
    );
}
export default Profile