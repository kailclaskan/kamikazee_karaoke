import React, {useEffect, useState} from 'react';
import api from '../helpers/api';

let FilterGenre = () => {
    let [genres, setGenres] = useState([]);

    useEffect(() => {
        let gatherGenres = async () => {
            let res = await api.getGenres();
            setGenres(res.genres);
        }
        gatherGenres();
    }, []);
    return (
        <>
            <h1 className="h1GenreSelect">Select the Genre to filter by</h1>
            <div className="divGenre">
                {genres ? genres.map(genre => <a className="aGenre" href={`/filter/genre/${genre}`} key={genre}>{genre}</a>) : null}
            </div>
        </>
    )
}

export default FilterGenre;