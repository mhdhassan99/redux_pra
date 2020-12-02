import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

const AddTodo = ({dispatch}) => {
    let input;

    return (
        <div className="form-container">
            <form className="form" 
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        
                        if (!input.value.trim()){
                            return
                        }

                        dispatch(addTodo(input.value));
                        input.value='';
                    }
                }
            >

                <div className="input-container">
                    <input className="input-field" type='text' ref={el => (input = el)}/>
                </div>
                <div className="add-button-container">
                    <button className="add-button" type='submit'>Add Todo</button>
                </div>
            </form>
        </div>
    );
}

export default connect()(AddTodo);