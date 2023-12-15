import React, { useContext, useEffect, useState } from 'react';
import { Form, FormText, FormContextProvider } from '../../Common';
import { Board, BoardComment } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from './BoardPage.style';

const BoardPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const boardId = useMemo(() => Number(params.id), [params]);

  const { auth, getUserInfo } = useContext(UserContext) as UserContextValue;
  const { getBoardInfo, addComment, deleteBoard, deleteComment } = useContext(BoardContext) as BoardContextValue;

  const [boardInfo, setBoardInfo] = useState<Board>();
  const [commentList, setCommentList] = useState<(BoardComment & { user_name: string | undefined })[]>();
  const [comment, setComment] = useState('');

  useEffect(() => {
    const info = getBoardInfo(boardId, true);
    if (info) {
      setBoardInfo(info);
      setComment('');
    } else {
      navigate('/boardList');
    }
  }, [boardId, getBoardInfo, navigate]);

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

  const handleSubmit = useCallback(
    (values: { comment: string }) => {
      addComment(boardId, values.comment);
    },
    [addComment, boardId]
  );

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
              <br/>
            </span>
            )})}
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
          {commentList &&
            commentList.map((comment) => (
              <div key={comment.id} className='commentStyled'>
                <div className='commentDiv'>
                  <div className='commentName'>{comment.user_name}</div>
                  {auth?.id === comment.user_id && (
                    <div className='commentBtn'>
                      <button>수정</button>
                      <button onClick={() => deleteComment(boardId)}>삭제</button>
                    </div>
                  )}
                </div>
                <div className='commentContent'>{comment.content}</div>
                <div className='commentDate'>{comment.create_date}</div>
                <hr />
              </div>
            ))}
        </div>
      </div>
    </Container>
  ) : null;
};

BoardPage.displayName = 'BoardPage';
export default BoardPage;
