import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom"
import back from '../assets/netflix_background.webp'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('${back}');
  background-size: cover;
  background-position: center;
`;

const LoginForm = styled.form`
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

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const RegisterLink = styled.a`
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${email}`);
      const user = response.data.find(user => user.email === email);

      if (user) {
        if (user.password === password) {
          localStorage.setItem('token', 'fake-jwt-token');
          navigate('/dashboard');
        } else {
          alert('Senha incorreta');
        }
      } else {
        alert('Email não encontrado');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Ocorreu um erro ao tentar fazer login');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Sign In</Title>
        <Input type="email" placeholder="Email or phone number" value={email} onChange={(e) => setEmail(e.target.value)}required />
        <Input
          type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Sign In</Button>
        <CheckboxContainer>
          <CheckboxLabel>
            <Checkbox type="checkbox" />
            Remember me
          </CheckboxLabel>
          <RegisterLink ><Link to='/register'>Não possui cadastro?</Link> </RegisterLink>
        </CheckboxContainer>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
