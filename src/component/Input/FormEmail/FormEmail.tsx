import React, {useContext} from "react";
import FormContext from "../FormContext";
import {UserContext, UserContextValue} from "../../../context";

const FormEmail: React.FC = () => {
    const { userList } = useContext(UserContext) as UserContextValue;

    const chkEmail = useMemo(() => {
        return userList.map((user) => user.email);
    }, [userList]);

  return (
    <>
        <FormContext
            label='이메일'
            name='email'
            rules={{
                required: '이메일을 입력해주세요',
                pattern: {
                    value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                    message: '이메일을 형식에 맞게 입력해주세요'
                },
                validate: (value) =>
                    chkEmail.includes(value) ? '이미 존재하는 이메일입니다.' : true
            }}
            type='text'
            placeholder='이메일을 입력해주세요'
            helperText='ex) text00@email.com'
        />
    </>
  );
}

export default FormEmail;
