import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
  //text-align: left;

  .boardTitle {
    font-weight: bold;
    font-size: 27px;
  }

  .boardContent {
    font-size: 17px;
    margin: 35px 0 50px 0;
  }

  .boardDiv {
    width: 100%;
    display: flex;
    color: #707070;
    margin: 5px 0;

    .boardName {
      font-size: 16px;
      font-weight: 500;
    }

    .boardDate {
      flex: 1;
      margin: 0 15px;
    }

    .boardDate,
    .boardViews {
      text-align: right;
      font-size: 14px;
    }
  }

  .boardBtn {
    width: 100%;
    text-align: right;

    button {
      background-color: #707070;
      color: #ffffff;
      border: none;
      padding: 3px 7px;
      margin-left: 5px;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .commentStyled {

    > div {
      margin: 4px 0;
    }
    
    .commentDiv {
      display: flex;
      
      .commentName {
        flex: 1;
        font-size: 16px;
        font-weight: 600;
      }

      .commentBtn {
        text-align: right;

        button {
          background-color: #707070;
          color: #ffffff;
          border: none;
          padding: 2px 4px;
          margin: 0 2px;
          font-size: 13px;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    
    .commentContent {
      font-size: 15px;
    }

    .commentDate {
      font-size: 12px;
      color: #5e5e5e;
    }
  }

  .commentForm {
    display: flex;
    width: 100%;
    max-width: 800px;
    margin-bottom: 15px;

    .commentText {
      flex: 1;

      input {
        width: 100%;
      }
    }

    button {
      width: 85px;
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
    width: 100%;
  }
`;
