import React from "react";

const UserProfile = ({songs}) => {
    return (
        <>
            <div>
                {songs ? songs.map(song => <p key={`${song.songName}|${song.songArtist}`}>{song.songName} by {song.songArtist}</p>) : null}
            </div>
        </>
    )
}

export default UserProfile;