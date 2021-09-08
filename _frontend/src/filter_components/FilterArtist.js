import React, {useEffect, useState} from 'react';
import api from '../helpers/api';

let FilterArtist = () => {
    let [artists, setArtists] = useState([]);

    useEffect(() => {
        let gatherArtists = async () => {
            let res = await api.getArtists();
            setArtists(res.artists);
        }
        gatherArtists();
    }, []);
    return (
        <>
            <div className="divArtists">
                {artists ? artists.map(artist => <a className="aArtists" href={`/filter/artists/${artist}`} key={artist}>{artist}</a>) : null}
            </div>
        </>
    )
}

export default FilterArtist;