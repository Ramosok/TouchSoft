//libraries
import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className={props.className} type='button' onClick={props.сlickAction}>{props.title}</button>
        </div>
    );
};

export default Button;