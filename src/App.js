/*import logo from './logo.svg';
import './App.css';
*/

import React, {useState} from 'react';
import Doings from './Doings';

import { nanoid } from 'nanoid'

function id(){
    return nanoid(5);
}
function App() {

    return <div>
        <Doings />
    </div>;

}
export default App;
