import React from "react";
import FormContext from "../FormContext";
import styled from "styled-components";

const RadioLabel = styled.label`
  display: inline-block;
  text-align: center;
`;

const FormStatus: React.FC = () => {

  return (
    <>
        <RadioLabel>
        <FormContext
            label='회원유형'
            name='status'
            rules={{
                required: '회원유형을 선택해주세요',
            }}
            type='radio'
        /> 회원 </RadioLabel>
        <RadioLabel>
        <FormContext
            name='status'
            type='radio'
        /> 관리자 </RadioLabel>
    </>
  );
}

export default FormStatus;
