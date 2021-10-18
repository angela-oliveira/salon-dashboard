import React from 'react'
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import { Button, Container } from './styles';

function Home({ history }) {
  const agendar = () => { 
    history.push('/agenda')
  }
  return (
    <>
      <Header />
      <Container>

        <Button onClick={agendar}>Agendar</Button>
      </Container>

      <Profile />
    </>
  )
}
export default Home;