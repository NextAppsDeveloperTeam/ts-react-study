import React, {ChangeEvent} from 'react';
import {TodoFormProps as Props} from './TodoForm.types';
import './TodoForm.scss';

const TodoForm: React.FC<Props> = ({onSubmit}) => {

    const textRef = useRef<HTMLInputElement>(null);

    const [text, setText] = useState<string>('');

    const handelTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }, []);


    const handelAddBtnClick = useCallback(() => {
        onSubmit(text);
        setText('');
        textRef.current?.focus();
    }, [onSubmit, text]);

    return (
        <div className='TodoForm'>
            <div>
                <input
                    ref={textRef}
                    type='text'
                    placeholder='할 일을 입력해주세요'
                    value={text}
                    onChange={handelTextChange}
                />
            </div>
            <div>
                <button disabled={empty(text)} onClick={handelAddBtnClick}>
                    추가
                </button>
            </div>
        </div>
    );
};

TodoForm.displayName = 'TodoForm';

export default TodoForm;
