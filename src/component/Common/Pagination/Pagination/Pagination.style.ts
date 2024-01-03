import styled from 'styled-components';

export const PageBtn = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;

  button {
    width: 23px;
    height: 23px;
    margin: 2px;
    border: none;
    background: #ffffff;
    color: #000000;
    cursor: pointer;
    font-size: 15px;

    &:hover {
      background: rgba(206, 206, 206, 0.78);
    }

    &[disabled] {
      color: #b2b2b2;
      cursor: revert;
      transform: revert;

      &:hover {
        background: none;
      }
    }

    &[aria-current] {
      background: #646464;
      color: rgb(255, 255, 255);
      cursor: revert;
      transform: revert;
    }
  }

  .pageBtn {
    border: 1px solid #000000;
  }
`;