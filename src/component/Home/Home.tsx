import React from 'react';
import { Form, FormCommands, FormEmail, FormNumber, FormText } from '../Common';
import { Button } from '../style';
import FormContextProvider from '../Common/Form/FormContextProvider';

const Home = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState<number | undefined>(0);

  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('email');
      }
    }, 1);
  }, []);

  const handleSubmit = useCallback((value: Dict) => {
    ll(value);
  }, []);

  return (
    <div>
      <FormContextProvider>
        <Form ref={formCommandsRef} onSubmit={handleSubmit}>
          <FormText
            label='Text'
            name='text'
            placeholder='텍스트를 입력해주세요.'
            helperText={text}
            value={text}
            onChange={setText}
            required
          />
          <FormEmail label='Email' name='email' helperText={email} value={email} onChange={setEmail} />
          <FormNumber label='Number' name='number' helperText={num} value={num} onChange={setNum} />
          <Button>Submit</Button>
        </Form>
      </FormContextProvider>
    </div>
  );
};

export default Home;
