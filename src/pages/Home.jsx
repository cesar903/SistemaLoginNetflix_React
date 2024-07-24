import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import back from '../assets/netflix_background.webp'

const HomeContainer = styled.div`
  height: 100vh;
  background-image: url('${back}');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
`;

const Logo = styled.div`
  color: red;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  a {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: red;
    color: white;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
      background-color: darkred;
    }
  }
`;

const MainContent = styled.div`
  text-align: center;
  color: white;
  margin-top: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 40px;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: darkred;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Header>
        <Logo>SUPERFLIX</Logo>
        <NavLinks>
          <Link to="/login">Entrar</Link>
          <Link to="/register">Criar conta</Link>
        </NavLinks>
      </Header>
      <MainContent>
        <h1>Filmes, séries e muito mais.</h1>
        <h2>Sem limites. Assista onde quiser. Cancele quando quiser.</h2>
        <button>Vamos lá &gt;</button>
      </MainContent>
    </HomeContainer>
  );
}

export default Home;
