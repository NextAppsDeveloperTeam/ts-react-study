import React from "react";
import FormContext from "../FormContext";

const FormEmail: React.FC = () => {

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
                }
            }}
            type='text'
            placeholder='이메일을 입력해주세요'
            helperText='ex) text00@email.com'
        />
    </>
  );
}

export default FormEmail;
