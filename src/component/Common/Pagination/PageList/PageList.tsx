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

PageList.displayName = 'BoardList';
export default PageList;
