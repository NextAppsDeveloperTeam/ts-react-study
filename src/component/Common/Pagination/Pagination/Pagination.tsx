import React from 'react';
import { PaginationProps as Props } from './Pagination.types';
import {PageBtn} from "./Pagination.style";

function Pagination({ total, limit, page, setPage, block, setBlock }: Props) {
  const createArr = (n: number) => {
    const iArr: number[] = new Array(n);
    for (let i = 0; i < n; i++) iArr[i] = i + 1;
    return iArr;
  };

  const totalPage = Math.ceil(total / limit);
  const pageLimit = 10;
  const blockArea = Number(block * pageLimit);
  const nArr = createArr(Number(totalPage));
  const pArr = nArr?.slice(blockArea, Number(pageLimit) + blockArea);

  const firstPage = () => {
    setPage(1);
    setBlock(0);
  };

  const lastPage = () => {
    setPage(totalPage);
    setBlock(Math.ceil(totalPage / pageLimit) - 1);
  };

  const prevPage = () => {
    if (block === 0) {
      setPage(1);
    } else {
      setPage((n: number) => n - (page % pageLimit));
      setBlock((n: number) => n - 1);
    }
  };

  const nextPage = () => {
    if (block === Math.ceil(totalPage / pageLimit) - 1) {
      setPage(totalPage);
    } else {
      setPage(pageLimit * Number(block + 1) + 1);
      setBlock((n: number) => n + 1);
    }
  };

  return (
    <PageBtn>
      <button className='pageBtn' onClick={() => firstPage()} disabled={page === 1}>
        &lt;&lt;
      </button>
      <button className='pageBtn' onClick={() => prevPage()} disabled={page === 1}>
        &lt;
      </button>
      {pArr.map((n) => (
        <button key={n} onClick={() => setPage(n)} aria-current={page === n ? 'page' : undefined}>
          {n}
        </button>
      ))}
      <button className='pageBtn' onClick={() => nextPage()} disabled={page === totalPage}>
        &gt;
      </button>
      <button className='pageBtn' onClick={() => lastPage()} disabled={page === totalPage}>
        &gt;&gt;
      </button>
    </PageBtn>
  );
}

Pagination.displayName = 'BoardList';
export default Pagination;
