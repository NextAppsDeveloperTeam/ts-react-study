import React from 'react';
import { PaginationProps as Props } from './Pagination.types';
import { PageBtn } from './Pagination.style';

function Pagination({ total, limit: initLimit, page, onPage }: Props) {
  const limit = useMemo(() => initLimit || 10, [initLimit]);

  const totalPage = useMemo(() => Math.ceil(total / limit), [limit, total]);

  const pArr = useMemo(() => {
    const createArr = (n: number) => {
      const iArr: number[] = new Array(n);
      for (let i = 0; i < n; i++) iArr[i] = i + 1;
      return iArr;
    };

    const blockArea = Math.floor((page - 1) / limit) * limit;
    const nArr = createArr(Number(totalPage));
    return nArr?.slice(blockArea, Number(limit) + blockArea);
  }, [limit, page, totalPage]);

  const handleFirstPageClick = useCallback(() => {
    onPage(1);
  }, [onPage]);

  const handlePrevPageClick = useCallback(() => {
    onPage(page > 1 ? page - 1 : 1);
  }, [onPage, page]);

  const handleNextPageClick = useCallback(() => {
    onPage(page < totalPage ? page + 1 : totalPage);
  }, [onPage, page, totalPage]);

  const handleLastPageClick = useCallback(() => {
    onPage(totalPage);
  }, [onPage, totalPage]);

  return (
    <PageBtn>
      <button className='pageBtn' onClick={handleFirstPageClick} disabled={page === 1}>
        &lt;&lt;
      </button>
      <button className='pageBtn' onClick={handlePrevPageClick} disabled={page === 1}>
        &lt;
      </button>
      {pArr.map((n) => (
        <button key={n} onClick={() => onPage(n)} aria-current={page === n ? 'page' : undefined}>
          {n}
        </button>
      ))}
      <button className='pageBtn' onClick={handleNextPageClick} disabled={page === totalPage}>
        &gt;
      </button>
      <button className='pageBtn' onClick={handleLastPageClick} disabled={page === totalPage}>
        &gt;&gt;
      </button>
    </PageBtn>
  );
}

Pagination.displayName = 'BoardList';
export default Pagination;
