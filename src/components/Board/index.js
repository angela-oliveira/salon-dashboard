import React, { useState, useEffect } from "react";
import List from '../List';
import Card from '../Card';
import New from '../New'
import Api from '../../services/api';
import { Container } from './styles';

const { get, update, remove, add } = Api()
function Board() {

  const [data, setData] = useState([])

  useEffect(() => {

    (async function card() {
      const cards = await get()
      setData(cards)
    })()
  }, []);

const addNew = lista => async (titulo, conteudo, date) => {
  const newCard = { lista, titulo, conteudo, date };

  const save = await add(newCard);
  setData([save, ...data]);
}
const updateCard = id => async (titulo, conteudo) => {
  const card = data.find(e => e.id === id)
  const newCard = { ...card, titulo, conteudo };

  const save = await update(newCard);
  const reduceCards = data.reduce((res, e) => e.id === save.id ? [...res, save] : [...res, e], [])
  setData(reduceCards);
}
const removeCard = id => async () => {
  const removeCardId = await remove(id);
  setData(removeCardId);
}
const skip = (id, lista) => async () => {
  const card = data.find(e => e.id === id)
  const newCard = { ...card, lista };
  const save = await update(newCard);
  const reduceCards = data.reduce((res, e) => e.id === save.id ? [...res, save] : [...res, e], [])
  setData(reduceCards);
}

  return (
    <> 
      <Container>

        <List count={'new'} color="#F00" title={"Novo Agendamento"}>
          {<New addCard={addNew('Agendado')} />}
        
        </List>
      <List count={data.filter((e) => e.lista === 'Agendado').length} color="#FF0" title={"Aguardando"}>

        {data
          .filter(list => list.lista ==="Agendado")
          .map(list => 
          <Card 
          key={list.id} 
          title={list.titulo} 
          description={list.conteudo}
          date={list.date}
          update={updateCard(list.id)}
          remove={removeCard(list.id)}
          next={skip(list.id, 'Confirmados')} 
          />)}

      </List>
      <List count={data.filter((e) => e.lista === 'Confirmados').length} color="#00F" title={"Confirmados"}>

        {data
          .filter(list => list.lista ==="Confirmados")
          .map(list => 
          <Card 
            key={list.id} 
            title={list.titulo} 
            description={list.conteudo} 
            date={list.date}
            update={updateCard(list.id)}
            remove={removeCard(list.id)}
            next={skip(list.id, 'Finalizados')} 
            back={skip(list.id, 'Agendado')}
          />)}

      </List>
      <List count={data.filter((e) => e.lista === 'Finalizados').length} color="#0F0" title={"Finalizados"}>

        {data
          .filter(list => list.lista ==="Finalizados")
          .map(list => 
          <Card 
            key={list.id} 
            title={list.titulo} 
            description={list.conteudo} 
            date={list.date}
            update={updateCard(list.id)}
            remove={removeCard(list.id)}
            back={skip(list.id, 'Confirmados')}
          />)}

      </List>
      </Container>
    </>
  )
}
export default Board;