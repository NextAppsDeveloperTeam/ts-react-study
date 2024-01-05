import styled from "styled-components";

export const StyleUserItem = styled.div`
  margin: 20px;

  .userItem {
    display: flex;
    margin: 5px 0;

    div {
      width: 80px;
    }

    p {
      color: #051169;
    }
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 35px;
  margin: 10px 0;
  font-size: 14px;
  border: none;
  background: #282828;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
`;
