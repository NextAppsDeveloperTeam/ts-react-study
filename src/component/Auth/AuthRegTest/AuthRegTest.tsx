import * as React from 'react';
import {UserStatus} from "../../../@types";
import styled from "styled-components";
import {Controller, useForm} from "react-hook-form";

type AuthRegType = {
    name: string;
    email: string;
    phone: string;
    password: string;
    status: UserStatus;
}

const Form = styled.form`
  > div:not(:first-child) {
    margin-top: 30px;
  }
  
  > div:not(:last-child) {
    position: relative;
  }
  
  > div > label {
  display: inline-block;
  padding-bottom: 8px;
}
`;

const AuthRegTest: React.FC = () => {
    const { handleSubmit, control } = useForm<AuthRegType>({
        // resolver: yupResolver(signUpValidation),
        mode: 'onBlur',
    });

    const onSubmin = handleSubmit((data: AuthRegType) => {
        console.log(data);
    });

  return (
    <Form>
        <div>
            <label htmlFor='name'>아이디</label>
            <Controller
                type='text'
                name='name'
                control={control}
                placeholder='아이디를 입력해주세요'
                defaultValue=''
            />
        </div>
    </Form>
  );
};
export default AuthRegTest;
