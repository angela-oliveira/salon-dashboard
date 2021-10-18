import React, { useState, useEffect } from "react";
import Api from '../../services/api';
import { Container, DashboardCard, DashboardData, Waiting, Confirmed, Finished, BirthdayCard, PendencesCard, PendencesInfo, DateLine } from './styles';
import { format, parseISO } from 'date-fns';

import { MdCake } from 'react-icons/md'
import data from '../../assets/data.json'

const dados = data.filter((e) => e.id === 1)[0]

const dateBirthday = parseISO(dados.date)
const currentDate = format(new Date(), 'MMMM');
const monthDate = format(dateBirthday, 'MMMM');

const date = new Date();
const options = { month: 'long' };
const month = date.toLocaleDateString('pt-BR',options)

const { get } = Api()

function DataProfile() {

  const [data, setData] = useState([])

  useEffect(() => {

    (async function card() {
      setData(await get())
    })()
  }, []);
  const aguardando = data.filter((e) => e.lista === 'Agendado').length
  const confirmados = data.filter((e) => e.lista === 'Confirmados').length
  const finalizados = data.filter((e) => e.lista === 'Finalizados').length

  return (
    <> 
    
    <Container>
      <DashboardCard>
        <div className='divCards'>
          <Waiting>
              <h3>
                Aguardando: 
                {' ' +aguardando}
              </h3>
          </Waiting>
          <Confirmed>
            <h3>
              Confirmados:
              {' ' +confirmados}
            </h3>
          </Confirmed>
        </div>
        <Finished>
          <h3>
            Finalizados:
            {' ' + finalizados}
          </h3>
        </Finished>
      </DashboardCard>

    <DashboardData>
      {(monthDate === currentDate)?
      <BirthdayCard>
        <div>
          
          <MdCake color={'#D64545'} />
          <span>{month.toUpperCase()} é o mês do seu aniversário | Venha resgatar seu vale brinde</span>
        </div>
      </BirthdayCard>
      
       : ''
       }
      <DateLine>
        <p>{format(new Date(), 'dd/MM/yyyy')}</p>
      </DateLine>
      <PendencesCard>
        <div>
          <span>Pendencias:</span>
        </div>
      </PendencesCard>
      <PendencesInfo>
        <p>Você não tem pendências</p>
      </PendencesInfo>
    </DashboardData>
    </Container>
    </>
  )
}
export default DataProfile;