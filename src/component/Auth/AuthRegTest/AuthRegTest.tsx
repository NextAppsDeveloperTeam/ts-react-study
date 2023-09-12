import * as React from 'react';
import styled from "styled-components";
import {FormProvider, useForm} from "react-hook-form";
import {FormChkPwd, FormEmail, FormName, FormPhone, FormPwd, FormStatus} from "../../Input";
import {useContext} from "react";
import {UserContext, UserContextValue} from "../../../context";
import {IFormData} from "./AuthRegTest.types";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const Form = styled.form`
  width: 300px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
`;

const AuthRegTest: React.FC = () => {
    const navigate = useNavigate();

    const { addUser } = useContext(UserContext) as UserContextValue;

    const methods = useForm<IFormData>({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            chkPwd: '',
        },
        mode: 'onChange',
    });

    const {
        handleSubmit
    } = methods;

    const onSubmit = (data:IFormData) => {
        addUser(data);
        alert('회원가입이 완료되었습니다\n로그인해주세요');
        navigate('/login');
    };

  return (
      <FormProvider {...methods}>
          <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <FormName />
              <FormEmail />
              <FormPhone />
              <FormPwd />
              <FormChkPwd />
              <FormStatus /><br />
              <Button type='submit'>가입하기</Button>
          </Form>
          </Container>
      </FormProvider>
  );
};
export default AuthRegTest;
