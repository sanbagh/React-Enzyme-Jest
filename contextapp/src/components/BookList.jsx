import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLight, light, dark } = this.context;
//         const theme = isLight ? light : dark;
//         return (
//             <div className="book-list" style={{ background: theme.bg, color: theme.text }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>Data 1</li>
//                     <li style={{ background: theme.ui }}>Data 2</li>
//                     <li style={{ background: theme.ui }}>Data 3</li>
//                 </ul>
//             </div>
//         );
//     }
// }
const BookList = (props) => {
    const { isLight, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLight ? light : dark;
    return (<div className="book-list" style={{ background: theme.bg, color: theme.text }}>
        <ul>
            {books.map(book => <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>)}
        </ul>
    </div>
    );
}

export default BookList;