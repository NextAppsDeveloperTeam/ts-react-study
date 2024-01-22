import React from 'react';
import { SearchContainer } from './Search.style';

export type SearchType = 'title' | 'content' | 'writer';

interface Props {
  type?: SearchType;
  keyword?: string;
  onSubmit(type: SearchType, keyword: string): void;
}

const Search = ({ type: initType, keyword: initKeyword, onSubmit }: Props) => {
  const [type, setType] = useState<SearchType>('title');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setType(initType || 'title');
  }, [initType]);

  useEffect(() => {
    setKeyword(initKeyword || '');
  }, [initKeyword]);

  const handleSubmitClick = useCallback(() => {
    onSubmit(type, keyword);
  }, [keyword, onSubmit, type]);

  return (
    <SearchContainer>
      <select value={type} onChange={(e) => setType(e.target.value as SearchType)}>
        <option value='title'>제목</option>
        <option value='content'>내용</option>
        <option value='writer'>작성자</option>
      </select>
      <input
        type='text'
        placeholder='검색'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmitClick();
          }
        }}
      />
      <button className='searchBtn' onClick={handleSubmitClick}>
        검색
      </button>
    </SearchContainer>
  );
};

export default Search;
