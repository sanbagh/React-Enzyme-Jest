import React from 'react';
import './todo.css';
const ToDo = ({ title, deleteTodo }) => {

    return (<div className="ToDo">
        <li>{title} <button onClick={deleteTodo} className="btn btn-primary-outline"><i className="fa fa-trash text-danger"></i></button></li>
    </div>)
}

export default ToDo;