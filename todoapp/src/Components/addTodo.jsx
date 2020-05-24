import React, { Component } from 'react';
import './addTodo.css';
class AddToDo extends Component {
    state = { title: '' }
    updateTitle = (e) => {
        this.setState({ title: e.target.value });
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    render() {
        return (
            <form className="AddToDo" onSubmit={this.handleOnSubmit}>
                <input type="text" onChange={this.updateTitle} className="form-control" placeholder=" Add todo item" value={this.state.title} required />
                <button className="btn btn-primary-outline"><i className="fa fa-plus text-primary"></i></button>
            </form>);
    }
}

export default AddToDo;