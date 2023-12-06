import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
  //text-align: left;

  .boardTitle {
    font-weight: bold;
    font-size: 28px;
  }
  
  .boardContent {
    font-size: 17px;
    margin: 50px 0;
  }
  
  .boardDiv {
    width: 100%;
    display: flex;
    text-align: right;
    font-size: 14px;
    
    .boardDate {
      flex: 1;
      margin: 0 15px;
    }
    
    .boardViews {
      
    }
  }

  .commentDiv {

    > div {
      margin: 4px 0;
    }

    .commentName {
      font-size: 16px;
      font-weight: 600;
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
      //padding-right: 10px;
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
    width: 80%;
  }
`;
