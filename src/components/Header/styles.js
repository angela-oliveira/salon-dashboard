import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 10px 40px;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Image = styled.img`
  margin: 1rem;
  height: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  align-items: center;
`;
export const Avatar = styled.img`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
  border-radius: 999px;
`;
export const AvatarText = styled.div`
  font-size: 13px;
  margin-left: -5px;
`;
