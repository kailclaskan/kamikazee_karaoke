import React, {useEffect, useState} from 'react';
import api from '../helpers/api';

let FilterArtist = () => {
    let [artists, setArtists] = useState([]);
    let [selectedArtist, setSelectedArtist] = useState("");

    const handleChange = (e) =>{
        e.preventDefault();
        setSelectedArtist(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        window.location.href = url;
    }
    useEffect(() => {
        let gatherArtists = async () => {
            let res = await api.getArtists();
            setArtists(res.artists);
        }
        gatherArtists();
    }, []);
    useEffect(() => {
        setSelectedArtist("10,000 Maniacs");
    }, [])
    let url = `/filter/artists/${selectedArtist}`;
    return (
        <>
            <h1 className="h1FilterArtist">Select your Artist</h1>
            <form className="formArtists" onSubmit={handleSubmit}>
                <div>
                    <select className="formArtistsSelect" value={selectedArtist} onChange={handleChange}>
                        {artists ? artists.map(artist => <option value={artist} key={artist}>{artist}</option>) : null}
                    </select>
                </div>
                <div>
                    <button className="formArtistsBtn">Dive In</button>
                </div>
            </form>
            {/* <div className="divArtists">
                {artists ? artists.map(artist => <a className="aArtists" href={`/filter/artists/${artist}`} key={artist}>{artist}</a>) : null}
            </div> */}
        </>
    )
}

export default FilterArtist;