import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([{ title: 'data1', id: 1 }, { title: 'data2', id: 2 }, { title: 'data3', id: 3 }])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;