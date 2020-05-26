import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';
import BookReducer from '../reducer/BookReducer';
import { useEffect } from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localBooks = localStorage.getItem('books');
        return localBooks ? JSON.parse(localBooks) : []
    });
    useEffect(() => { localStorage.setItem('books', JSON.stringify(books)); }, [books])
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;