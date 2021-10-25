import React from 'react';

//Return the child component within the Scroll element
//overflowY is a built in react feature that allows the element to be 'Scrollable'
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '800px'}}>
            {props.children};
        </div>
    );
};

export default Scroll;