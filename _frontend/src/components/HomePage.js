import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RandomSong from '../song_components/RandomSong';
import Filter from '../components/Filter';
import FilterGenre from '../filter_components/FilterGenre';
import FilterArtist from '../filter_components/FilterArtist';
import FilterDate from '../filter_components/FilterDate';
import RandomArtistSong from '../filter_components/FilteredSong/RandomArtistSong';
import RandomDateSong from '../filter_components/FilteredSong/RandomDateSong';
import RandomGenreSong from '../filter_components/FilteredSong/RandomGenreSong';


const HomePage = () => {

    return (
        <>
            <h1>Kamikazee Karaoke</h1>
            <a className="aNav" href="/kamikazee">Kamikazee</a>
            <a className="aNav" href="/filter">Filter your Kamikazee Karaoke Experience</a>
            <a className="aNav" href="/signin">Sign In</a> <strong>|</strong> <a className="aNav" href="/signup">Sign Up</a>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/kamikazee">
                        <RandomSong />
                    </Route>
                    <Route exact path="/filter/date/:min/:max">
                        <RandomDateSong />
                    </Route>
                    <Route exact path="/filter/date">
                        <FilterDate />
                    </Route>
                    <Route exact path="/filter/genre/:genre">
                        <RandomGenreSong />
                    </Route>
                    <Route exact path="/filter/genre">
                        <FilterGenre />
                    </Route>
                    <Route exact path="/filter/artists/:artist">
                        <RandomArtistSong />
                    </Route>
                    <Route exact path="/filter/artists">
                        <FilterArtist />    
                    </Route>
                    <Route exact path="/filter/user/:user">
                        
                    </Route>
                    <Route exact path="/filter">
                        <Filter />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default HomePage;