import React, {useState} from "react";
import FormContext from "../FormContext";

const FormPhone: React.FC = () => {
    // const [phone, setPhone] = useState('');
    // useEffect(() => {
    //     if(phone) {
    //         setPhone(phone.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3'));
    //     }
    // }, [phone]);
  return (
    <>
        <FormContext
            label='전화번호'
            name='phone'
            rules={{
                required: '전화번호를 입력해주세요',
                pattern: {
                    value: /^[0-9]{9,11}$/,
                    message: '전화번호를 형식에 맞게 입력해주세요'
                },
                // validate: (value) =>
                //     value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3')
            }}
            type='text'
            placeholder='전화번호를 입력해주세요'
            helperText="'-' 없이 번호만 입력"
        />
    </>
  );
}

export default FormPhone;
