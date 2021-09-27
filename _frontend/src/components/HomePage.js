import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import RandomSong from '../song_components/RandomSong';
import Filter from '../components/Filter';
import Login from '../components/LogIn';
import Signup from '../components/Signup';
import FilterGenre from '../filter_components/FilterGenre';
import FilterArtist from '../filter_components/FilterArtist';
import FilterDate from '../filter_components/FilterDate';
import RandomArtistSong from '../filter_components/FilteredSong/RandomArtistSong';
import RandomDateSong from '../filter_components/FilteredSong/RandomDateSong';
import RandomGenreSong from '../filter_components/FilteredSong/RandomGenreSong';
import RandomUserSong from '../filter_components/FilteredSong/RandomUserSong';
import UserProfile from '../components/UserProfile';
import React, { useEffect, useState } from 'react';
import api from "../helpers/api";
import jwt from "jwt-decode";
import useLocalStorage from '../helpers/useLocalStorage';
import logo from '../kamikazeekaraoke.png'


const HomePage = () => {
    const [user, setUser] = useState([]);
    const [userToken, setUserToken] = useState([]);
    const [token, setToken] = useLocalStorage("token");
    const [username, setUsername] = useLocalStorage("username");
    const [songs, setSongs] = useState([]);
    
    const retrieveToken = async (username, password) => {
        let token = await api.getToken(username, password);
        setToken(token);
        let u = jwt(token);
        setUsername(u.username);
    }
    const signUp = async(username, password, firstName, lastName, email, dateOfBirth, securityQuestion, securityAnswer) => {
        let token = await api.createUser(username, password, firstName, lastName, email, dateOfBirth, securityQuestion, securityAnswer)
        setToken(token);
        let u = jwt(token);
        setUsername(u.username);
    }
    const signOut = () => {
        window.localStorage.clear();
        setUsername(undefined);
        setToken(undefined);
    }
    const like = async (songName, songArtist) => {
        let u = jwt(token);
        if(u.username === user){
            let res = await api.like(username, songName, songArtist);
            console.log(res);
        } else {
            console.log("You must be that user to add song to their like.")
        }
    }
    const unlike = async(songName, songArtist) => {
        let u = jwt(token);
        if(u.username === user){
            let res = await api.unlike(username, songName, songArtist);
            console.log(res);
        }
    }
    const getSongStatus = async (username) => {
        let res = await api.getSongStatus(username);
        
        return res;
    } 

    //Add unlike function.

    useEffect(() => {
        const storeUser = async () => {
            setUser(username);
            setUserToken(token);            
        }
        storeUser();
    }, [username, token]);
    useEffect(()=> {
        const userSongs = async () => {
            let uSongs = await getSongStatus(user);
            setSongs(uSongs.results.songs);
        }
        userSongs();
    }, [user]);
    if(username === undefined && user === undefined){
        window.localStorage.clear();
    }
    return (
        <>
            <h1>Kamikazee Karaoke</h1>
            <div>
                <a className="aLogo" href="/"><img className="imgLogo" src={logo} /></a>
                <a className="aNav" href="/kamikazee">Kamikazee</a>
                <a className="aNav" href="/filter">Filter your Kamikazee Karaoke Experience</a>
                {userToken !== undefined ? <><a className="aUser" href={`/user/${username}`}>{username}</a> <strong>|</strong> <a className="aNav" href="/" onClick={signOut}>Sign Out</a></>: <><a className="aNav" href="/login">Sign In</a> <strong>|</strong> <a className="aNav" href="/signup">Sign Up</a></>}
            </div>
            
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login">
                        <Login retrieveToken={retrieveToken} />
                    </Route>
                    <Route exact path="/signup">
                        <Signup signUp={signUp} />
                    </Route>
                    <Route exact path="/user/:username">
                        <UserProfile songs={songs}/>
                    </Route>
                    <Route exact path="/kamikazee">
                        <RandomSong like={like} unlike={unlike} user={user} songs={songs} />
                    </Route>
                    <Route exact path="/filter/date/:min/:max">
                        <RandomDateSong like={like} unlike={unlike} user={user} songs={songs} />
                    </Route>
                    <Route exact path="/filter/date">
                        <FilterDate />
                    </Route>
                    <Route exact path="/filter/genre/:genre">
                        <RandomGenreSong like={like} unlike={unlike} user={user} songs={songs}/>
                    </Route>
                    <Route exact path="/filter/genre">
                        <FilterGenre />
                    </Route>
                    <Route exact path="/filter/artists/:artist">
                        <RandomArtistSong like={like} unlike={unlike} user={user} songs={songs} />
                    </Route>
                    <Route exact path="/filter/artists">
                        <FilterArtist />    
                    </Route>
                    <Route exact path="/filter/user/">
                        {userToken !== undefined ? <RandomUserSong like={like} unlike={unlike} user={user} songs={songs} /> : null}
                    </Route>
                    <Route exact path="/filter">
                        <Filter user={user}/>
                    </Route>
                    <Route exact path="/">
                        <div className="divAbout">
                            <h1>Welcome</h1>
                            <p>
                                Kamikazee Karaoke is all about finding a song to sing when you're stumped as to what you should sing next. 
                                This project was formed based on that principle alone. I sat around one night, of course at the local watering 
                                hole, and considered what I wanted to sing. When I came up with nothing, at least nothing that I hadn't sang 
                                a million times before, the synapses began firing and thus was born Kamikazee Karaoke.
                            </p>
                            <p>
                                The premise is this. Select kamikazee and you will be given any song in the database as the song you sing. You'll 
                                notice that there's a Like button at the bottom of the song which, assuming you're signed in, will add it to your 
                                personal library of songs. Like button will only appear IF you're signed in.
                            </p>
                            <p>
                                Other features allow you to define your experience by filtering the songs by genre, date (decades, not year) and 
                                artist. If you're signed in you'll also be able to filter by your liked songs. So grab a drink and hit the random 
                                button of your choice. Your song's coming up next!!!
                            </p>
                            <p>
                                Last thing, I promise. When your song comes up you'll have access to the karaoke video, if there is one, a link to 
                                the music video and the lyrics to the song. Talk about making a random song easy! Now go sing your heart out to the 
                                song the fates decide for you. Good Luck and come back for more!!!
                            </p>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default HomePage;