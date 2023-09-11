import React from "react";
import FormContext from "../FormContext";

const FormName: React.FC = () => {

  return (
    <>
      <FormContext
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
    </>
  );
}

export default FormName;
