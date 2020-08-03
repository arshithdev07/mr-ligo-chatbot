import React from 'react';
import ReactDOM from 'react-dom';

import SpeechRecognition from './components/SpeechRecognition';

import sourcingReducer from './reducers';
import  {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(sourcingReducer);
console.log('store.getState()',store.getState());
//store.subscribe(() => console.log("store",store.getState()));

ReactDOM.render(
<Provider store = {store}>
    <SpeechRecognition />
</Provider>
,document.getElementById('root'));
