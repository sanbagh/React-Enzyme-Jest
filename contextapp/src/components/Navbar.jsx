import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
class Navbar extends Component {
    //static contextType = ThemeContext;
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => {
                const { isAuthenticated, toggleAuth } = authContext;
                return (
                    <ThemeContext.Consumer>
                        {(context) => {
                            const { isLight, light, dark } = context;
                            const theme = isLight ? { background: light.ui, color: light.text } : { background: dark.ui, color: dark.text }
                            return (
                                <nav style={theme}>
                                    <h1>Context App</h1>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                        <li onClick={toggleAuth}>{isAuthenticated ? 'Login' : 'Logout'}</li>
                                    </ul>
                                </nav>
                            );
                        }
                        }
                    </ThemeContext.Consumer>);
            }}</AuthContext.Consumer>)

    }
}

export default Navbar;