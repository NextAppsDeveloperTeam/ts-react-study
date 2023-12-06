import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 50px auto;
  text-align: left;

  .boardTitle {
    font-weight: bold;
    font-size: 28px;
  }

  .boardContent {
    font-size: 17px;
    margin: 50px 0;
  }

  .commentName,
  .commentContent {
    margin-bottom: 10px;
  }

  .commentForm {
    display: flex;
    width: 100%;
    max-width: 800px;
    margin-bottom: 15px;

    .commentText {
      flex: 1;
      padding-right: 10px;
      input {
        width: 100%;
      }
    }

    button {
      width: 100px;
      height: 40px;
      font-size: 14px;
      border: none;
      background: #000000;
      color: #ffffff;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  hr {
    width: 80%;
  }
`;
