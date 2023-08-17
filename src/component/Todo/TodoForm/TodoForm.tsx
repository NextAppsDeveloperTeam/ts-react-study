import React from 'react';
import {TodoFormProps as Props} from './TodoForm.types';
import './TodoForm.scss';

const TodoForm: React.FC<Props> = ({onChange, onSubmit, inputText}) => {

    const inputRef = useRef<any>(null);

    const handelInputRef = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className='TodoForm'>
            <div>
                <input
                    onChange={(e) => onChange(e)}
                    type='text'
                    placeholder='할 일을 입력해주세요'
                    ref={inputRef}
                    value={inputText}
                />
            </div>
            <form onSubmit={(event) => onSubmit(event)}>
                <div>
                    <button type='submit' disabled={inputText === ''} onClick={handelInputRef}>
                        추가
                    </button>
                </div>
            </form>
        </div>
    );
};

TodoForm.displayName = 'TodoForm';

export default TodoForm;
