import uuid from 'uuid/dist/v1';
const BookReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, { title: action.book.title, author: action.book.author, id: uuid() }]
        case "DELETE_BOOK":
            return state.filter(x => x.id !== action.id);
        default:
            return state;
    }
}
export default BookReducer;