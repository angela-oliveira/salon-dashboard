/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, ArtCard, UserInfo, Photo, NameCard, LinkCard, TitleCardPro, Widget } from './styles';
import data from '../../assets/data.json'

const dados = data.filter((e) => e.id === 1)[0]


function CardProfile() {
  return (
    <> 
    
    <Container>
            <ArtCard>
                <UserInfo>
                    <h1>
                        <Photo />
                        <NameCard>{dados.name}</NameCard>
                    </h1>
                    <a>
                        <LinkCard>@{dados.user}</LinkCard>
                    </a>
                    <p>
                        <TitleCardPro>{dados.type}</TitleCardPro>
                    </p>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <img src="/images/adress-icon.png" alt="" />
                            <span>{dados.city}-{dados.us} | {dados.country}</span>
                        </div>
                    </a>
                </Widget>
            </ArtCard>
    </Container>
    </>
  )
}
export default CardProfile;