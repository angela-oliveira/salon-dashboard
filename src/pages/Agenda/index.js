import React from 'react'
import Header from '../../components/Header'
import Board from '../../components/Board'
import { Button, Container } from './styles';

function Agenda({ history }) {  
  const data = () => { 
  history.push('/home')
}
  return (
    <>
      <Header />
      <Container>

        <Button onClick={data}>Dados Pessoais</Button>
      </Container>
      <Board />
    </>
  )
}
export default Agenda;