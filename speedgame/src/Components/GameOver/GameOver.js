import React from 'react';
import './GameOver.css';

const closeHandler = () => {
    window.location.reload();
}

const GameOver = (props) => {
    return (
        <div className="overlay">
            <div className="game-over-box">
                <h2 className="endMessage">Oh, that's it?<br /> Your not very good at this.</h2>
                <p>Your score: {props.score}</p>
                <button onClick={closeHandler}>X</button>
            </div>
        </div>
    );
};

export default GameOver;