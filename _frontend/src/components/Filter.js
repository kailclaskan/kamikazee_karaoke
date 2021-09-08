import React from 'react';

const Filter = () => {
    return(
        <>
            <h3><a className="aFilter" href="/filter/artists">Filter By Artist</a></h3>
            <h3><a className="aFilter" href="/filter/genre">Filter By Genre</a></h3>
            <h3><a className="aFilter" href="/filter/date">Filter By Date</a></h3>
            <h3><a className="aFilter" href="/filter/user/:user">Filter By User Liked Tracks</a></h3>
        </>
    )
}

export default Filter;