import React, { useCallback, useContext, useState } from 'react';
import { Pagination, Title } from '../../Common';
import { Board } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddBtn, Container, TableStyled } from './BoardList.style';
import { util } from '../../../@util';
import { Search } from './controls';
import { SearchType } from './controls/Search';

const BoardList: React.FC = () => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const navigate = useNavigate();
  const location = useLocation();
  const { getUserInfo } = useContext(UserContext) as UserContextValue;
  const { boardList } = useContext(BoardContext) as BoardContextValue;

  // State -------------------------------------------------------------------------------------------------------------

  const [page, setPage] = useState(1);
  const [searchType, setSearchType] = useState<SearchType>();
  const [keyword, setKeyword] = useState('');

  const limit = 10;

  // Memo --------------------------------------------------------------------------------------------------------------

  const total = useMemo(() => boardList.length, [boardList]);

  const list = useMemo(() => {
    const offset = (page - 1) * limit;
    return boardList.slice(offset, offset + limit);
  }, [boardList, page]);

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const hash = util.deHash(location.hash);
    const page = hash.p ? Number(hash.p) : 1;
    const searchType = hash.t !== undefined ? (hash.t as SearchType) : undefined;
    const keyword = hash.k !== undefined ? hash.k : '';
    setPage(page);
    setSearchType(searchType);
    setKeyword(keyword);
  }, [location.hash]);

  // Function ----------------------------------------------------------------------------------------------------------

  const makeHash = useCallback(
    (data: { page?: number; searchType?: SearchType; keyword?: string }) => {
      const hashes: string[] = [];

      const finalPage = data.page ? data.page : page;
      const finalKeyword = data.keyword !== undefined ? data.keyword : keyword;
      const finalSearchType = empty(finalKeyword) ? '' : data.searchType ? data.searchType : searchType;

      if (finalPage > 1) {
        hashes.push(`p=${finalPage}`);
      }
      if (notEmpty(finalSearchType)) {
        hashes.push(`t=${finalSearchType}`);
      }
      if (notEmpty(finalKeyword)) {
        hashes.push(`k=${encodeURIComponent(finalKeyword)}`);
      }

      return hashes;
    },
    [keyword, page, searchType]
  );

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handlePageChange = useCallback(
    (page: number) => {
      const hashes = makeHash({ page });
      navigate(notEmpty(hashes) ? `#${hashes.join('&')}` : '');
    },
    [makeHash, navigate]
  );

  const handleSearchSubmit = useCallback(
    (type: SearchType, keyword: string) => {
      const hashes = makeHash({ searchType: type, keyword });
      navigate(notEmpty(hashes) ? `#${hashes.join('&')}` : '');
    },
    [makeHash, navigate]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <Container className='Board'>
      <Title text='자유게시판' />
      <Search type={searchType} keyword={keyword} onSubmit={handleSearchSubmit} />
      <hr />
      <TableStyled>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {list.map((boards: Board) => {
              return (
                <tr
                  key={boards.id}
                  onClick={() => {
                    navigate(`/boardPage/${boards.id}`);
                  }}
                >
                  <td>{boards.id}</td>
                  <td>{boards.title}</td>
                  <td>{getUserInfo(boards.user_id)?.name}</td>
                  <td>{boards.create_date.substring(0, 10).replace(/-/g, '.')}</td>
                  <td>{boards.views}</td>
                </tr>
              );
            })}

            {/*{searchList.length === 0 ? (*/}
            {/*  <>*/}
            {/*    {!btnClick ? (*/}
            {/*      <>*/}
            {/*        {boardList.slice(offset, offset + limit).map((board: Board) => {*/}
            {/*          return (*/}
            {/*            <tr*/}
            {/*              key={board.id}*/}
            {/*              onClick={() => {*/}
            {/*                navigate(`/boardPage/${board.id}`);*/}
            {/*              }}*/}
            {/*            >*/}
            {/*              <td>{board.id}</td>*/}
            {/*              <td>{board.title}</td>*/}
            {/*              <td>{getUserInfo(board.user_id)?.name}</td>*/}
            {/*              <td>{board.create_date.substring(0, 10).replace(/-/g, '.')}</td>*/}
            {/*              <td>{board.views}</td>*/}
            {/*            </tr>*/}
            {/*          );*/}
            {/*        })}*/}
            {/*      </>*/}
            {/*    ) : (*/}
            {/*      <>*/}
            {/*        <tr>*/}
            {/*          <td className='notSearch' colSpan={5}>*/}
            {/*            검색 결과가 없습니다.*/}
            {/*          </td>*/}
            {/*        </tr>*/}
            {/*      </>*/}
            {/*    )}*/}
            {/*  </>*/}
            {/*) : (*/}
            {/*  <>*/}
            {/*    {searchList.slice(offset, offset + limit).map((boards: Board) => {*/}
            {/*      total = searchList.length;*/}
            {/*      return (*/}
            {/*        <tr*/}
            {/*          key={boards.id}*/}
            {/*          onClick={() => {*/}
            {/*            navigate(`/boardPage/${boards.id}`);*/}
            {/*          }}*/}
            {/*        >*/}
            {/*          <td>{boards.id}</td>*/}
            {/*          <td>{boards.title}</td>*/}
            {/*          <td>{getUserInfo(boards.user_id)?.name}</td>*/}
            {/*          <td>{boards.create_date.substring(0, 10).replace(/-/g, '.')}</td>*/}
            {/*          <td>{boards.views}</td>*/}
            {/*        </tr>*/}
            {/*      );*/}
            {/*    })}*/}
            {/*  </>*/}
            {/*)}*/}
          </tbody>
        </table>
      </TableStyled>
      {/*{btnClick && list && list.length > 0 && (*/}
      <Pagination total={total} page={page} onPage={handlePageChange} />
      {/*)}*/}
      <AddBtn>
        <button onClick={() => navigate('/boardPost')}>글쓰기</button>
      </AddBtn>
    </Container>
  );
};

BoardList.displayName = 'BoardList';
export default BoardList;
