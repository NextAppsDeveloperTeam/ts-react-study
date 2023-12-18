import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  button {
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
  height: 440px;

  table {
    width: 100%;

    thead {
      th {
        padding: 10px 0;
      }

      th:nth-child(1) {
        width: 15%;
      }

      th:nth-child(2) {
        width: 45%;
      }

      th:nth-child(3) {
        width: 12%;
      }

      th:nth-child(4) {
        width: 18%;
      }

      th:nth-child(5) {
        width: 10%;
      }
    }

    tbody {
      tr {
        td {
          padding: 7px 0;
        }

        td:nth-child(2) {
          text-align: left;

          a {
            color: #000000;
            cursor: pointer;
          }
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

export const PageBtn = styled.div`
  text-align: center;
  margin: 10px 0;

  button {
    width: 20px;
    height: 20px;
    margin: 2px;
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
  }
`;

export const AddBtn = styled.div`
  text-align: center;

  button {
    padding: 10px 20px;
  }
`;