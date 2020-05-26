import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext'
class ToggleTheme extends Component {
    static contextType = ThemeContext;
    render() {
        const { toggleTheme } = this.context;
        return (
            <button onClick={toggleTheme} style={{ border: "1px solid red", padding: "5px", background: "white" }}>Toggle Theme</button>
        );
    }
}

export default ToggleTheme;