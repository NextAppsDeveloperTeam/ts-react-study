import React, { useContext, useEffect, useState } from 'react';
import { Form, FormCommands, FormText, Title, FormContextProvider, FormTextArea } from '../../Common';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { BoardContext, BoardContextValue } from '../../../context';
import { Board } from '../../../@types';

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

const Button = styled.div`
  text-align: center;
  margin: 15px 0;
  display: flex;

  button {
    flex: 1;
    height: 40px;
    font-size: 16px;
    border: none;
    background: #000000;
    color: #ffffff;

    &:hover {
      opacity: 0.7;
    }
`;

const BoardPost: React.FC = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getBoardInfo, addBoard, updateBoard } = useContext(BoardContext) as BoardContextValue;

  const formCommandsRef = useRef<FormCommands>(null);

  const boardId = useMemo(() => Number(params.id), [params]);

  const [boardInfo, setBoardInfo] = useState<Board>();

  useEffect(() => {
    const info = getBoardInfo(boardId, false);
    if (info) {
      setBoardInfo(info);
    }
  }, [boardId, getBoardInfo]);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('title');
      }
    }, 1);
  }, []);

  const handleSubmit = useCallback(
    (values: { title: string; content: string }) => {
      addBoard(values.title, values.content);
      if (boardInfo) {
        updateBoard(boardInfo.id, values.title, values.content);
        navigate(`/boardPage/${boardInfo.id}`);
      } else {
        navigate('/boardList');
      }
    },
    [addBoard, boardInfo, navigate, updateBoard]
  );

  return (
    <Container className='Board'>
      <Title text='게시글 작성' />
      <FormContextProvider>
        <Form ref={formCommandsRef} onSubmit={handleSubmit}>
          <>
            <FormText label='제목' name='title' placeholder='제목을 입력해주세요' required value={boardInfo?.title} />
            <FormTextArea
              label='내용'
              name='content'
              placeholder='내용을 입력해주세요'
              required
              value={boardInfo?.content}
            />
            <Button>
              <button>{boardId ? '수정하기' : '등록하기'}</button>
            </Button>
          </>
          {/*)}*/}
        </Form>
      </FormContextProvider>
    </Container>
  );
};

BoardPost.displayName = 'BoardPost';
export default BoardPost;
