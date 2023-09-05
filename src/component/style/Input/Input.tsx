import styled from "styled-components";

export const Button = styled.button`
  margin: 20px;
  padding: 10px 100px;
  font-size: 16px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    background: #6c6c6c;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  padding-left: 5px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;
`;

export const Form = styled.div`
  text-align: center;
  width: 400px;
`;

export const InputBox = styled.div`
  display: flex;
  padding-bottom: 25px;
  align-items: center;
`;

export const Label = styled.label`
  flex: 1;
  text-align: left;
  font-size: 17px;
`;