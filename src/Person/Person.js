import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>
                Hey , I'm {props.name} and am {props.age} years old!
            </h1>
            <p>
                {props.children}
            </p>
        </div>
    );
}

export default person;