import React from "react"
import Table from 'react-bootstrap/Table';
import "./index.css"
import data from "./nofilter_highschool_ratings.json"
import data2 from "./posts.json"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineLike} from 'react-icons/ai';



var arr = []
for (let i=0; i<data.nofilter_highschool_ratings.length; i++) {
  arr.push( {id: data.nofilter_highschool_ratings[i].nofilter_highschool_id, name: data.nofilter_highschool_ratings[i].name, score: data.nofilter_highschool_ratings[i].average_score});
}
var arr2 = []
for (let i=0; i<data2.posts.length; i++) {
    arr2.push( {name: data2.posts[i].name, subject: data2.posts[i].subject, content: data2.posts[i].content, view: data2.posts[i].view, recommend: data2.posts[i].recommend, comment: data2.posts[i].comment, updated_at: data2.posts[i].updated_at});
  }

console.log(arr)
arr = arr.sort((a, b) => {
    return b.score - a.score;
});

let number = 1;
 
function Home() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/home/posts"; 
    navigate(path);
  }
    return (
        <Container style = {{"margin-right": "0", "max-width": "100%", "padding-right": "0", "height": "100vh"}}>
            <Row>
                <Col xs={9}>
                    <div className = "board">
                        <Row>
                            <Col className = "border-right" style = {{"padding-right": "2rem"}}>
                                <h5> 리뷰 인기글</h5>
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
                            <Col style = {{"padding-left": "2rem"}}>
                                <h5> 인기 게시글</h5>
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
                        </Row>
                    </div>
                </Col>
                <Col xs={3} style = {{"padding-left": "3rem"}}>
                    <div className="table_school">
                <table>
                    <thead>
                    <tr>
                    <th>#</th>
                    <th>High School Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {arr.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{number++}</td>
                        <td>{val.name}</td>
                        </tr>
                    )
                    })}
                    </tbody>
                </table>
                </div>
            </Col>
        </Row>
    </Container>
    );
  }
export default Home