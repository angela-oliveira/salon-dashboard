import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 5px;
  max-width: 100%;
  font-family: Arial;
  align-items: center;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside rightside";
  grid-template-columns: minmax(350, 12fr) minmax(350px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /*grid-template-row: auto;*/
  margin: 25px 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;