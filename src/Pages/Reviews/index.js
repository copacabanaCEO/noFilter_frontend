import React from "react"
import { FormControl, InputLabel, Select, MenuItem, FormGroup, Box, FormControlLabel, Grid, Radio, Typography, Rating } from '@mui/material';
import data2 from "./posts.json"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineLike} from 'react-icons/ai';

var arr2 = []
for (let i=0; i<data2.posts.length; i++) {
    arr2.push( {name: data2.posts[i].name, subject: data2.posts[i].subject, content: data2.posts[i].content, view: data2.posts[i].view, recommend: data2.posts[i].recommend, comment: data2.posts[i].comment, updated_at: data2.posts[i].updated_at});
  }

function Reviews() {
    const [age, setAge] = React.useState('');

    const handleChange = function (event) {
        setAge(event.target.value);
    };
    return (
        <Container>
            <br /><br />
            <h3 className="info"> 리뷰 인기글 </h3>
            <br /><br />
            <Row>
                <h5> Sort by: </h5>
                <Box sx={{ maxWidth: 150 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Categoty</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={"모두"}>모두</MenuItem>
                            <MenuItem value={"최신"}>최신</MenuItem>
                            <MenuItem value={"인기"}>인기</MenuItem>
                            <MenuItem value={"급식"}>급식</MenuItem>
                            <MenuItem value={"선생님"}>선생님</MenuItem>
                            <MenuItem value={"문화"}>문화</MenuItem>
                            <MenuItem value={"수업"}>수업</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Row>
                <Row>
                    <Col>
                        <br />
                        {arr2.map((val, key) => {
                            return (
                                <div key={key}>
                                <Card>
                                <Card.Header>
                                    {val.name} 
                                    <Rating name="read-only" value={3} readOnly style={{"float": "right"}}/>
                                </Card.Header>
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
                </Row>
        </Container>

);}
export default Reviews