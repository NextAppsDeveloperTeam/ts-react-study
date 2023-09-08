import * as React from 'react';
import styled from "styled-components";
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import FormName from "../../Input/FormName";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;
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
}

const AuthRegTest: React.FC = () => {
    const methods = useForm<IFormData>({
        defaultValues: {
            name: '',
            email: '',
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
              <FormName
                  label='이름'
                  name='name'
                  rules={{
                      required: '이름을 입력해주세요',
                      pattern: {
                          value: /^[^ ]*[^ ]$/,
                          message: '앞뒤 공백을 지워주세요',
                      },
                      minLength: {
                          value: 2,
                          message: '2글자 이상 입력해주세요'
                      },
                  }}
                  type='text'
                  placeholder='이름을 입력해주세요'
                  helperText='2글자 이상'
               />
              <FormName
                  label='이메일'
                  name='email'
                  rules={{
                      required: '이메일을 입력해주세요',
                      pattern: {
                          value: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                          message: '이메일을 형식에 맞게 입력해주세요,'
                      }
                  }}
                  type='text'
                  placeholder='이메일을 입력해주세요'
                  helperText='ex) text00@email.com'
              />
              <Button type='submit'>가입하기</Button>
          </Form>
          </Container>
      </FormProvider>
  );
};
export default AuthRegTest;
