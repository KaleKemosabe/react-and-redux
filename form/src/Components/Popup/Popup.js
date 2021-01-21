import React from 'react';
import './Popup.css';

const closeHandler = () => {
    window.location.reload();
};

const Popup = (props) => {
    return (
        <>
        <div className="overlay">
            <div className="popup">
                <h1>Did you make any mistakes?</h1>
                <div>
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
                    <button onClick={closeHandler}>X</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Popup;