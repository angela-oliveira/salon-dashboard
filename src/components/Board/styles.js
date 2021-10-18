import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px;
  height: calc(100% - 80px);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
