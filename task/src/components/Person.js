import React from 'react';

const Person = ({ submitForm, name, show }) => {
    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label> Enter your name:  </label>
                    <input type="text" id="name" ref={name} />
                </div>
                <br />
                <button> Submit </button>
            </form>
            <p>{show ? `Your name is ${name.current.value}` : ""}</p>
        </div>
    );
}

export default Person