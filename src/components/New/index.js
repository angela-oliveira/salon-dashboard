import React, { useState } from 'react';

import { MdAdd } from 'react-icons/md';
import { Container, DivButton, ErrorMessage } from './styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function New({ addCard }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('');

  const [displayTitle, setDisplayTitle] = useState('none')
  const [displayDescription, setDisplayDescription] = useState('none')
  const [displayDate, setDisplayDate] = useState('none')

  const submitValue = () => {
    if (!title && !description && !startDate ){

      setDisplayTitle('block')
      setDisplayDescription('block')
      setDisplayDate('block')

    } else if (!title) {
      setDisplayTitle('block')

    } else if (!description){
      setDisplayDescription('block')

    } else if (!startDate){
      setDisplayDate('block')
      
    } else {
      addCard(title, description, startDate);
      setTitle('')
      setDescription('')
      setStartDate('')
      setDisplayTitle('none')
      setDisplayDescription('none')
      setDisplayDate('none')
    }
}

  return (
    <>
    <Container>
    <header>
      <input value={title} type="text" placeholder="Titulo*" onChange={e => setTitle(e.target.value)} />
    </header>
    <ErrorMessage style={{display: displayTitle}}>Campo não pode ficar vazio</ErrorMessage>

    <div>
      <input value={description} type="text" placeholder="Descrição*" onChange={e => setDescription(e.target.value)} />
      
      <ErrorMessage style={{display: displayDescription}}>Campo não pode ficar vazio</ErrorMessage>

    </div>
    <div>

      <DatePicker 
        dateFormat="dd/MM/yyyy" 
        value={startDate} 
        selected={startDate} 
        placeholderText={"Data*"} 
        onChange={(date) => setStartDate(date)}></DatePicker>
     
      <ErrorMessage style={{display: displayDate}}>Campo não pode ficar vazio</ErrorMessage>
    </div>

  </Container>
  <DivButton onClick={submitValue}>
    Agendar
      <MdAdd size={20} color="#a6a6a6" />
  </DivButton>
  </>
  );
}

export default New;