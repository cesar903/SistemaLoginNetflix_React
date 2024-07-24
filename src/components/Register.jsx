import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import back from '../assets/netflix_background.webp'
import { Link } from "react-router-dom"

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('${back}');
  background-size: cover;
  background-position: center;
`;

const RegisterForm = styled.form`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;

  &:hover {
    background-color: darkred;
  }
`;

const LoginLink = styled.a`
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', { email, password });
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Ocorreu um erro ao tentar registrar');
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleRegister}>
        <Title>Register</Title>
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Register</Button>
        <LoginLink ><Link to='/login'>Realizar Login?</Link> </LoginLink>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
