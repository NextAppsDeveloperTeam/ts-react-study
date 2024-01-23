import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Form, FormText, FormContextProvider, Pagination } from '../../Common';
import { Board, BoardComment } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Container } from './BoardPage.style';
import { SearchType } from '../BoardList/controls/Search';
import { util } from '../../../@util';

const BoardPage: React.FC = () => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const { auth, getUserInfo } = useContext(UserContext) as UserContextValue;
  const { getBoardInfo, addComment, deleteBoard, deleteComment } = useContext(BoardContext) as BoardContextValue;

  // State -------------------------------------------------------------------------------------------------------------

  const [boardInfo, setBoardInfo] = useState<Board>();
  const [commentList, setCommentList] = useState<(BoardComment & { user_name: string | undefined })[]>();
  const [comment, setComment] = useState('');
  const [page, setPage] = useState(1);

  const limit = 10;

  // Memo --------------------------------------------------------------------------------------------------------------

  const boardId = useMemo(() => Number(params.id), [params]);

  const total = useMemo(() => commentList?.length, [commentList]);

  const list = useMemo(() => {
    const offset = (page - 1) * limit;
    return commentList?.slice(offset, offset + limit);
  }, [commentList, page]);

  // Function ----------------------------------------------------------------------------------------------------------

  const makeHash = useCallback(
    (data: { page?: number; searchType?: SearchType; keyword?: string }) => {
      const hashes: string[] = [];

      const finalPage = data.page ? data.page : page;

      if (finalPage > 1) {
        hashes.push(`p=${finalPage}`);
      }

      return hashes;
    },
    [page]
  );

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const info = getBoardInfo(boardId, true);
    if (info) {
      setBoardInfo(info);
      setComment('');
      const hash = util.deHash(location.hash);
      const page = hash.p ? Number(hash.p) : 1;
      setPage(page);
    } else {
      navigate('/boardList');
    }
  }, [boardId, getBoardInfo, location.hash, navigate]);

  useEffect(() => {
    if (boardInfo) {
      setCommentList(
        boardInfo.comment.map((comment) => ({
          ...comment,
          user_name: getUserInfo(comment.user_id)?.name,
        }))
      );
    }
  }, [boardInfo, getUserInfo]);

  // Event Handler -----------------------------------------------------------------------------------------------------

  const handleSubmit = useCallback(
    (values: { comment: string }) => {
      addComment(boardId, values.comment);
      const hashes = makeHash({ page: 1 });
      navigate(`#${hashes.join('&')}`);
    },
    [addComment, boardId, makeHash, navigate]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      const hashes = makeHash({ page });
      navigate(`#${hashes.join('&')}`);
    },
    [makeHash, navigate]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  return boardInfo ? (
    <Container className='Board'>
      <div key={boardInfo.id}>
        <div className='boardTitle'>{boardInfo.title}</div>
        <div className='boardDiv'>
          <div className='boardName'>{getUserInfo(boardInfo.user_id)?.name}</div>
          <div className='boardDate'>{boardInfo.create_date}</div>
          <div className='boardViews'>조회수: {boardInfo.views}</div>
        </div>
        {auth?.id === boardInfo.user_id && (
          <div className='boardBtn'>
            <button onClick={() => navigate(`/boardPost/${boardInfo.id}`)}>수정</button>
            <button
              onClick={() => {
                if (confirm('삭제하시겠습니까?')) {
                  deleteBoard(boardInfo.id);
                }
              }}
            >
              삭제
            </button>
          </div>
        )}
        <div className='boardContent'>
          {boardInfo.content.split('\n').map((text, num) => {
            return (
              <span key={num}>
                {text}
                <br />
              </span>
            );
          })}
        </div>
        <FormContextProvider>
          <Form onSubmit={handleSubmit}>
            <div className='commentForm'>
              <div className='commentText'>
                <FormText
                  value={comment}
                  name='comment'
                  placeholder='댓글을 입력해주세요'
                  onChange={setComment}
                  required
                />
              </div>
              <button>등록하기</button>
            </div>
          </Form>
        </FormContextProvider>
        <div>
          {commentList && (
            <>
              {commentList.length === 0 ? (
                <></>
              ) : (
                list &&
                list.map((comment) => (
                  <div key={comment.id} className='commentStyled'>
                    <div className='commentDiv'>
                      <div className='commentName'>{comment.user_name}</div>
                      {auth?.id === comment.user_id && (
                        <div className='commentBtn'>
                          <button
                            onClick={() => {
                              deleteComment(boardId, comment.id);
                            }}
                          >
                            삭제
                          </button>
                        </div>
                      )}
                    </div>
                    <div className='commentContent'>{comment.content}</div>
                    <div className='commentDate'>{comment.create_date}</div>
                    <hr />
                  </div>
                ))
              )}
            </>
          )}
        </div>
        {total && commentList?.length !== 0 ? (
          <Pagination total={total} onPage={handlePageChange} page={page} />
        ) : (
          <></>
        )}
      </div>
    </Container>
  ) : null;
};

BoardPage.displayName = 'BoardPage';
export default BoardPage;
