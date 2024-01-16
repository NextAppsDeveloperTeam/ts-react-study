import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  .searchBtn {
    background: #000000;
    color: #ffffff;
    border: none;
  }
`;

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 450px;

  table {
    width: 100%;

    thead {
      th {
        padding: 13px 0;
      }

      th:nth-child(1) {
        width: 12%;
      }

      th:nth-child(2) {
        width: 45%;
      }

      th:nth-child(3) {
        width: 15%;
      }

      th:nth-child(4) {
        width: 17%;
      }

      th:nth-child(5) {
        width: 11%;
      }
    }

    tbody {
      tr {

        td {
          padding: 8px 0;
        }

        td:nth-child(2) {
          text-align: left;
        }

        .notSearch {
          padding-top: 40px;
          font-size: 17px;
        }

        &:hover {
          background: rgba(210, 210, 210, 0.53);
          cursor: pointer;
        }
      }
    }
  }
`;

export const SearchBtn = styled.div`
  text-align: right;
  margin: 20px 0;

  select {
    padding: 7px 5px;
  }

  input {
    width: 200px;
    padding: 7px 5px;
  }

  button {
    padding: 9px 17px;
  }
`;

export const AddBtn = styled.div`
  text-align: center;
  margin: 25px 0;

  button {
    padding: 10px 25px;
    background: #000000;
    color: #ffffff;
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;