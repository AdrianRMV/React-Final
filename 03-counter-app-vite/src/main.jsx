import React from 'react';
import ReactDOM from 'react-dom/client';


import { App } from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        {/* Propiedades que se mandaran al componente hijo (este es el padre) */}
        {/* <FirstApp title="Hello soy goku"/>  */}
        <CounterApp value={0} />
    </React.StrictMode>

);