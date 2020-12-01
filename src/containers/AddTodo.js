import React from 'react';
import { connect } from 'react-redux';

const AddTodo = () => {
    let input;

    return (
        <div className="form-container">
            <form className="form">
                <div className="input-container">
                    <input className="input" type='text' ref={el => (input = el)}/>
                </div>
                <div className="button-container">
                    <button className="button" type='submit'>Add Todo</button>
                </div>
            </form>
        </div>
    );
}

export default connect()(AddTodo);