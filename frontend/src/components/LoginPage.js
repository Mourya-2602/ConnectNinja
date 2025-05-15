import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ mail: '', password: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state && location.state.email) {
      setForm(f => ({ ...f, mail: location.state.email }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Login successful!');
        navigate('/home', { state: { username: data.name } });
      } else {
        alert(data.error || 'Login failed');
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
                <h4 style={{ fontWeight: 700, color: '#222' }}>Log in</h4>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="mail" name="mail" value={form.mail} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" name="password" value={form.password} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                  {loading ? 'Logging In...' : 'Log In'}
                </Button>
                <div className="d-flex justify-content-between">
                  <Link to="/register" style={{ color: '#0984e3', textDecoration: 'none', fontWeight: 500 }}>Create an account</Link>
                  <a href="#" style={{ color: '#0984e3', textDecoration: 'none', fontWeight: 500 }}>Forgot your password?</a>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
