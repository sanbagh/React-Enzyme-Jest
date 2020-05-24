import React, { Component } from 'react';
import ToDo from './todo';
import './todos.css'
import AddToDo from './addTodo';
class ToDos extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [{ id: 1, title: "milk purchase" }, { id: 2, title: "veg purchase" }] };
    }
    handleAdd = (title) => {
        const todos = [...this.state.todos, { id: Math.random(), title }]
        this.setState({ todos });
    }
    handleDelete = (todoId) => {
        const todos = this.state.todos.filter(x => x.id !== todoId);
        this.setState({ todos });
    }
    render() {
        const list = this.state.todos.map(todo => <ToDo key={todo.id} deleteTodo={() => { this.handleDelete(todo.id) }} title={todo.title} />);
        const ele = list.length > 0 ? <ul className="Todos">{list}</ul> : <p>No todos...Please start adding them.</p>
        return (<div>{ele}<AddToDo addTodo={this.handleAdd} /></div>);
    }
}

export default ToDos;