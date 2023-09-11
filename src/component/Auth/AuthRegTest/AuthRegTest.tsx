import * as React from 'react';
import styled from "styled-components";
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {FormChkPwd, FormEmail, FormName, FormPhone, FormPwd, FormStatus} from "../../Input";

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

interface IFormData extends FieldValues {
    name: string;
    email: string;
    phone: string;
    password: string;
    chkPwd: string;
}

const AuthRegTest: React.FC = () => {
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
        console.log(data);
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
              <FormStatus />
              <Button type='submit'>가입하기</Button>
          </Form>
          </Container>
      </FormProvider>
  );
};
export default AuthRegTest;
