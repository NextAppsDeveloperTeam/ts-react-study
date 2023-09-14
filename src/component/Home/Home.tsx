import React from 'react';
import { Form, FormCommands, FormEmail, FormNumber, FormText } from '../Common';
import { Button } from '../style';
import FormContextProvider from '../Common/Form/FormContextProvider';
// import {UserContext, UserContextValue} from "../../context";

const Home = () => {
  // const { addUser } = useContext(UserContext) as UserContextValue;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState<number | undefined>(0);

  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('name');
      }
    }, 1);
  }, []);

  const handleSubmit = useCallback((value: Dict) => {
    ll(value);
    // addUser(value);
  }, []);

  return (
    <div>
      <FormContextProvider>
        <Form ref={formCommandsRef} onSubmit={handleSubmit}>
          <FormText
            label='Name'
            name='name'
            placeholder='텍스트를 입력해주세요.'
            helperText={name}
            value={name}
            onChange={setName}
            required
          />
          <FormEmail
            label='Email'
            name='email'
            placeholder='이메일을 입력해주세요'
            helperText={email}
            value={email}
            onChange={setEmail}
            required
          />
          <FormNumber
            label='Number'
            name='number'
            placeholder='전화번호를 입력해주세요'
            helperText={num}
            value={num}
            onChange={setNum}
            required
          />
          <Button>Submit</Button>
        </Form>
      </FormContextProvider>
    </div>
  );
};

export default Home;
