import React, { useState } from 'react';
import uuid from 'uuid/dist/v1';
import AddSong from './AddSong';
import { useEffect } from 'react';
const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'data1', id: 1 },
        { title: 'data2', id: 2 },
        { title: 'data3', id: 3 }
    ])
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }
    useEffect(() => {
        console.log('this is for song data', songs);
    }, [songs]);

    useEffect(() => {
        console.log('this is for anoter state data');
    }, []);
    return (
        <div style={{ margin: "10px" }}>
            <ul>
                {songs.map(song => <li key={song.id}>{song.title}</li>)}
            </ul>
            <AddSong addSong={addSong} />
        </div>
    );
}

export default SongList;