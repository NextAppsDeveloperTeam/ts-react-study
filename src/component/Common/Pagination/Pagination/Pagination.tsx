import React from 'react';
import { PaginationProps as Props } from './Pagination.types';
import styled from 'styled-components';

const PageBtn = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

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
      font-weight: bold;
      cursor: revert;
      transform: revert;
    }
  }
`;

function Pagination({ total, limit, page, setPage }: Props) {
  const numPages = Math.ceil(total / limit);

  return (
    <PageBtn>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </button>
      {Array(numPages)
        .fill('')
        .map((_, i) => (
          <button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : undefined}>
            {i + 1}
          </button>
        ))}
      <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </button>
    </PageBtn>
  );
}

Pagination.displayName = 'BoardList';
export default Pagination;