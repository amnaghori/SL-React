import React, { useEffect } from 'react'

const Child = (props) => {
    useEffect(() => {
        console.warn('Child useEffect', props);
    })
    return (
        <div>
            <h2>Child Component, {props.data} </h2>
        </div>
    );
}

export default Child;
