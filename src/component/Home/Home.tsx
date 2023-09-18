import React, { useEffect } from 'react';
import { Form, FormCommands, FormEmail, FormNumber, FormPhone, FormText } from '../Common';
import { Button } from '../style';
import FormContextProvider from '../Common/Form/FormContextProvider';
// import {UserContext, UserContextValue} from "../../context";

const Home = () => {
  // const { addUser } = useContext(UserContext) as UserContextValue;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState<number | undefined>(0);
  const [phone, setPhone] = useState('');

  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('name');
      }
    }, 1);
  }, []);

  useEffect(() => {
    if (phone) {
      setPhone(phone.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3'));
    }
  }, [phone]);

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
            placeholder='텍스트를 입력해주세요'
            helperText='텍스트를 입력해주세요'
            value={name}
            onChange={setName}
            required
          />
          <FormEmail
            label='Email'
            name='email'
            placeholder='이메일을 입력해주세요'
            helperText='이메일을 입력해주세요'
            value={email}
            onChange={setEmail}
            required
          />
          <FormNumber
            label='Number'
            name='number'
            placeholder='입력해주세요'
            helperText='입력해주세요'
            value={num}
            onChange={setNum}
            required
          />
          <FormPhone
            label='Phone'
            name='phone'
            placeholder='전화번호를 입력해주세요'
            helperText='전화번호를 입력해주세요'
            value={phone}
            onChange={setPhone}
            required
          />
          <Button>Submit</Button>
        </Form>
      </FormContextProvider>
    </div>
  );
};

export default Home;
