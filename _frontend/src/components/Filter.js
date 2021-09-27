import React from 'react';

const Filter = ({user}) => {
    return(
        <div className="divFilter">
            <a className="aFilter" href="/filter/artists">Filter By Artist</a>
            <a className="aFilter" href="/filter/genre">Filter By Genre</a>
            <a className="aFilter" href="/filter/date">Filter By Date</a>
            {user ? <a className="aFilter" href="/filter/user">Filter By User Liked Tracks</a> : null }
        </div>
    )
}

export default Filter;