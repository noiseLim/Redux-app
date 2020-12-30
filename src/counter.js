import React from 'react';

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

export default Counter;