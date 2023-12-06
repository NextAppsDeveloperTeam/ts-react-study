import React, { useContext } from 'react';
import { Form, FormText, FormContextProvider } from '../../Common';
import { Board, BoardComment } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from './BoardPage.style';

const BoardPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const boardId = useMemo(() => Number(params.id), [params]);

  const { getUserInfo } = useContext(UserContext) as UserContextValue;
  const { boardList, getBoardInfo, addComment } = useContext(BoardContext) as BoardContextValue;

  const [boardInfo, setBoardInfo] = useState<Board>();
  const [commentList, setCommentList] = useState<(BoardComment & { user_name: string | undefined })[]>();

  useEffect(() => {
    const info = getBoardInfo(boardId, true);
    if (info) {
      setBoardInfo(info);
    } else {
      navigate('/boardList');
    }
  }, [boardId, boardList, getBoardInfo, navigate, params.id]);

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
        <div>{boardInfo.views}</div>
        <div>{boardInfo.create_date}</div>
        <div className='boardContent'>{boardInfo.content}</div>
        <div>
          {commentList &&
            commentList.map((comment) => (
              <div key={comment.id}>
                <div>{comment.content}</div>
                <div>{comment.user_name}</div>
                <div>{comment.create_date}</div>
              </div>
            ))}
        </div>
        <FormContextProvider>
          <Form onSubmit={handleSubmit}>
            <div className='commentForm'>
              <div className='commentText'>
                <FormText name='comment' placeholder='댓글을 입력해주세요' required />
              </div>
              <button>등록하기</button>
            </div>
          </Form>
        </FormContextProvider>
      </div>
    </Container>
  ) : null;
};

BoardPage.displayName = 'BoardPage';
export default BoardPage;
