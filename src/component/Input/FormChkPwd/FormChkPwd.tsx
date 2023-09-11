import React from "react";
import FormContext from "../FormContext";

const FormChkPwd: React.FC = () => {

  return (
    <>
        <FormContext
            label='비밀번호 확인'
            name='chkPwd'
            rules={{
                required: '비밀번호를 한 번 더 입력해주세요',
                pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,16}$/,
                    message: '비밀번호가 일치하지 않습니다'
                }
            }}
            type='password'
            placeholder='비밀번호를 입력해주세요'
            helperText='영문, 숫자, 특수문자 포함 8~16자'
        />
    </>
  );
}

export default FormChkPwd;
