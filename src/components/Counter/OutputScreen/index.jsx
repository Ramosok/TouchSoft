//libraries
import React from 'react';

const OutputScreen = (props) => {
    return (
        <div className={props.className} style={props.style}>
            <p>{props.action}</p>
        </div>
    );
};

export default OutputScreen;