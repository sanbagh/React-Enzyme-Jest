import React from 'react';
import { useState } from 'react';
const AddSong = (props) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSong(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Song </label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <button style={{ border: "1px solid red", padding: "5px", background: "white" , marginLeft: "5px"}}>Add Song</button>
        </form>
    )
}
export default AddSong;