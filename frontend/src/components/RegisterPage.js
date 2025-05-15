import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', mail: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Registration successful!');
        setForm({ name: '', mail: '', password: '' });
        navigate('/home');
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      alert('Network error');
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', paddingTop: '7rem' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card style={{ padding: '2rem', borderRadius: '18px', boxShadow: '0 4px 32px rgba(0,0,0,0.08)' }}>
              <div className="text-center mb-4">
                <span role="img" aria-label="ninja" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🥷</span>
                <h2 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>ConnectNinja</h2>
                <h4 style={{ fontWeight: 700, color: '#222' }}>Register</h4>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="name" name="name" value={form.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="mail" name="mail" value={form.mail} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" name="password" value={form.password} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </Button>
                <div className="text-center">
                  <span>Already have an account? </span>
                  <Link to="/login" style={{ color: '#0984e3', textDecoration: 'none', fontWeight: 500 }}>Log in instead</Link>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage; 