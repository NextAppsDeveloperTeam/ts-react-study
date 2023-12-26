import React from 'react';
import { PageListPaginationProps as Props } from './PageListPagination.types';

const PageListPagination = ({ limit, page, blockNum, counts }: Props) => {
  const arr = (n: number) => {
    const iArr: number[] = new Array(n);
    for (let i = 0; i < n; i++) iArr[i] = i + 1;
    return iArr;
  };

  const pageLimit = 10;

  const totalPage: number = Math.ceil(counts / limit);

  const blockArea: number = Number(blockNum * pageLimit);
  const nArr = arr(Number(totalPage));
  const pArr = nArr?.slice(blockArea, Number(pageLimit) * blockArea);

  return (
    <div>
      <button></button>
    </div>
  );
};

PageListPagination.displayName = 'BoardList';
export default PageListPagination;
