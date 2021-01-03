import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// const update = () => {
//     ReactDOM.render(<Counter
//         counter={store.getState()}
//         inc={inc}
//         dec={dec}
//         rnd={() => {
//             const value = Math.floor(Math.random() * 10);
//             rnd(value);
//         }}/>, document.getElementById('root'));
// }
// update();

// store.subscribe(update);

