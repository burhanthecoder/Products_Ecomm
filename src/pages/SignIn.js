import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={{ span: 4 }}>
                    <h2 className="text-center mb-4">Sign In</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Sign In
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <p className="text-center">
                        Don't have an account? <a href="/register">Sign Up</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default SignInPage;
