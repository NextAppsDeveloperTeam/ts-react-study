import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 280px;
  height: 40px;
  margin: 15px 0;
  font-size: 16px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
`;

export const StyledLoginText = styled.p`
  font-size: 13px;
  text-align: center;
  margin: 10px 0;

  a {
    text-decoration: none;

    &:hover {
      opacity: 0.5;
    }
  }
`;
