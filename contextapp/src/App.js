import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ToggleTheme from './components/ToggleTheme';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
