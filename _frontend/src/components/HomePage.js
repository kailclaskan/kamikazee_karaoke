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
            <a className="aNav" href="/kamikazee">Kamikazee</a>
            <a className="aNav" href="/filter">Filter your Kamikazee Karaoke Experience</a>
            {userToken !== undefined ? <h3><a href={`/user/${username}`}>{username}</a> | <a className="aNav" href="/" onClick={signOut}>Sign Out</a></h3>: <h3><a className="aNav" href="/login">Sign In</a> <strong>|</strong> <a className="aNav" href="/signup">Sign Up</a></h3>}
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
                        <Filter />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default HomePage;