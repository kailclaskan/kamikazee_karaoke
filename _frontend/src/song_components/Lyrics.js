import React from 'react';


const rp = require('request-promise');
let Lyrics = ({lyrics}) => {
    return (
        <>
            <h3>Lyrics</h3>
            <p>{lyrics}</p>
        </>
    )
}

export default Lyrics;