import React, { useState } from 'react';

const PageList: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [counts, setCounts] = useState(1);
  const [blockNum, setBlockNum] = useState(0);

  return (
    <div>
      <div></div>
    </div>
  );
};

// const PageList = () => {
//   const [curPage, setCurPage] = useState(1);
//   //생략
//
//   return (
//     <>
//       {boardList.length !== 0 && (
//         <PageListPagination
//           curPage={curPage}
//           setCurPage={setCurPage}
//           totalPage={page.totalPages}
//           totalCount={page.totalElements}
//           size={page.size}
//           pageCount={10}
//         />
//       )}
//     </>
//   );
// };

PageList.displayName = 'BoardList';
export default PageList;
