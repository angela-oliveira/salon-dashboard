import styled from 'styled-components';

export const Container = styled.div`
  grid-area: auto;
  font-family: Arial;  
`;

export const DashboardCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;

  & > div {
    display: flex;
    justify-content: space-between;
  }
  .divCards{
    @media (max-width: 425px) {
      flex-direction: column;
    }
  }
`;
export const DashboardData = styled.div`
  margin-top: 2rem;
`;

export const Waiting = styled.div`
  display: flex;
  width: 50%;
  height: 4rem;
  background-color: #FF7E4D;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: #fff;
  border-radius: 6px;
  padding: 20px;
  margin-right: 4px;
  margin-bottom: 4px;
  align-items: center;
  @media (max-width: 425px) {
    width: 100%;
  }

  & p {
    display: flex;
    font-size: 18px;
    margin-left: 20px;
    align-items: center;
  }
`;

export const Confirmed = styled.div`
  display: flex;
  width: 50%;
  height: 4rem;
  display: flex;
  background-color: #ED3F6F;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: #fff;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 4px;
  align-items: center;
  @media (max-width: 425px) {
    width: 100%;
  }
  & p {
    display: flex;
    font-size: 18px;
    margin-left: 20px;
    align-items: center;
  }
`;

export const Finished = styled.div`
  display: flex;
  height: 4rem;
  background-color: #D64545;
  text-decoration: none;
  text-align: left;
  font-size: 14px;
  color: #fff;
  border-radius: 6px;
  padding: 20px;
  align-items: center;

  & p {
    display: flex;
    font-size: 18px;
    margin-left: 30px;
    align-items: center;
  }
`;

export const BirthdayCard = styled.div`
  display: flex;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 15px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.15);
  justify-content: center;

  & div {
    display: flex;
    align-items: center;
  }

  & span {
    margin-left: 5px;
  }
`;

export const PendencesCard = styled.div`
  display: flex;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 15px;
  margin-bottom: 1px;
  justify-content: center;

  & div {
    display: flex;
    align-items: center;
  }

  & span {
    margin-left: 5px;
  }
`;

export const PendencesInfo = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 0px 0px 5px 5px;
  border-top: none;
  position: relative;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 20px;
`;

export const DateLine = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 30px;
  overflow: hidden;
  position: relative;
  border: 3px rgba rgba(0, 0, 0, 0.09);
  align-items: center;
  background-color: rgba(0, 0, 0, 0.09);

  & p {
    margin-left: 5px;
  }
`;