import React from 'react';
import './Result.css';

const Result = (props) => {
    return (
        <div className="result">
            <h1>Here's your input:</h1>
            <div className="result-area">
                <p>
                    First name: <span>{props.firstname}</span>
                </p>
                <p>
                    Last name: <span>{props.lastname}</span>
                </p>
                <p>
                    Phone number: <span>{props.phonenumber}</span>
                </p>
                <p>
                    Role: <span>{props.role}</span>
                </p>
                <p>
                    Message: <span>{props.message}</span>
                </p>
            </div>
        </div>
    );
};

export default Result;