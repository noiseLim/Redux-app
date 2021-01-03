import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../action';
// import {bindActionCreators} from 'redux';


const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="content">
            <div className="counter-wrap">
                <h1 id="counter">{counter}</h1>
            </div>
            <div id="btn-block">
                <button onClick={inc} className="btn btn-primary">INC</button>
                <button onClick={dec} className="btn btn-success">DEC</button>
                <button onClick={rnd} className="btn btn-warning">RND</button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
// const mapDispatchToProps = (dispatch) => {
//     const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
//     return {
//         inc,
//         dec,
//         rnd: () => {
//             const value = Math.floor(Math.random() * 10);
//             rnd(value)
//         }
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
//     
// }

export default connect(mapStateToProps, actions)(Counter);