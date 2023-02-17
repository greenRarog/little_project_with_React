
import React, {useState} from 'react';

import { nanoid } from 'nanoid'

function Doing({id, value, delDo, changeDo}) {

    const [checked, setChecked] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    let result;
    if (checked) {
        result = <span className='check'>{value}</span>;
    } else {
        result = value;
    }

    return <li key={id}>
        <input key={id + '_check'} type='checkbox' value={checked} onClick={() => setChecked(!checked)} />
            {isEdit
                ? <input
                    key={id + '_edit'}
                    value={value}
                    onBlur={() => setIsEdit(false)}
                    onChange={event => changeDo(id, event)}
                />
                : <span
                    onClick={() => setIsEdit(true)}>
                    {result}
            </span>
            }
        <button onClick={() => delDo(id)}>X</button>
    </li>;

}
export default Doing;
