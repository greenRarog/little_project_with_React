
import React, {useState} from 'react';
import Doing from './Doing';
import { nanoid } from 'nanoid'

function id(){
    return nanoid(5);
}
const exampleArray = [
    {
        id: id(),
        value: 'buy milk',
    },
    {
        id: id(),
        value: 'send mail',
    },
    {
        id: id(),
        value: 'learn JavaScript'
    },
];
function Doings() {
    const [newDo, setNewDo] = useState(null);
    const [notes, setNotes] = useState(exampleArray);
    function addNewDo(){
        setNotes([...notes, {id: id(), value: newDo}]);
        setNewDo(null);
    }
    function delDo(id){
        setNotes(notes.filter(note => note.id !== id));
    }
    function changeDo(id, event){
        setNotes(notes.map(note =>{
            if (note.id === id) {
                note.value = event.target.value;
            }
            return note;
        }));
    }
    const result = notes.map(note => {
        return <Doing
            id={note.id}
            value={note.value}
            delDo={delDo}
            changeDo={changeDo}
        />
    });

    return <ul>
        <li><input value={newDo ? newDo : ''} onChange={event => setNewDo(event.target.value)}/><button onClick={() => addNewDo()}>add</button></li>
        {result}
    </ul>;

}
export default Doings;
