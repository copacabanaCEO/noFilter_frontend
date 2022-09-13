import React from 'react';
import { Grid, Avatar, Link, TextField, FormControl, OutlinedInput } from '@mui/material';
import { Col, Row, Form, Button } from 'react-bootstrap';

function Settings() {
    return (
        <Grid container spacing={2} style = {{"padding": "3rem"}}>
            <Grid item container xs={3} direction="column" alignItems="center" justifyContent="center">
                <Avatar
                    alt="Remy Sharp"
                    src="../../public/logo.png"
                    sx={{ width: 200, height: 200 }}
                />
                <br />
                <Link href="#" underline="none">
                    {'Change Profile Photo'}
                </Link>
            </Grid>
            <Grid item xs={9}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" defaultValue="Yujin Kim"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" defaultValue="yujin123@gmail.com"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Previous Password" style = {{"marginBottom": "1rem"}}/>
                          
                            <Form.Control type="password" placeholder="New Password" style = {{"marginBottom": "1rem"}}/>
                          
                            <Form.Control type="password" placeholder="Enter again New Password" style = {{"marginBottom": "1rem"}}/>
                        </Col>
                    </Form.Group>
                </Form>
                <Button style = {{"float":"right"}} variant="primary" type="submit">
                    Save
                </Button>
            </Grid>
            <Grid item xs={6} md={4}>
                
            </Grid>
            <Grid item xs={6} md={8}>
                
            </Grid>
        </Grid>
       
);}
export default Settings