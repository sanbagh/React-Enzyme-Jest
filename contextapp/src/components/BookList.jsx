import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLight, light, dark } = this.context;
        const theme = isLight ? light : dark;
        return (
            <div className="book-list" style={{ background: theme.bg, color: theme.text }}>
                <ul>
                    <li style={{ background: theme.ui }}>Data 1</li>
                    <li style={{ background: theme.ui }}>Data 2</li>
                    <li style={{ background: theme.ui }}>Data 3</li>
                </ul>
            </div>
        );
    }
}

export default BookList;