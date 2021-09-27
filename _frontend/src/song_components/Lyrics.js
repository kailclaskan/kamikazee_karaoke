import React from 'react';

let Lyrics = ({lyrics}) => {
    let refreshSong = () => {
        window.location.reload();
    }
    return (
        <>
            <h3>Lyrics</h3>
            <div className="divLyrics">{lyrics}</div>
            <a className="aRefresh" href={window.location.href}>Pick Another Song</a>
        </>
    )
}

export default Lyrics;