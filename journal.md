**7/27/2021**
The first two days I spent gathering song information and playing with APIs
Found the most useful was iTunes because it had the most information, HOWEVER it only seems to allow 20 queries and hour.
Deezer doesn't seem to have as many issues, but it has less data.

The biggest thing I learned is that CORS issues need to be handled in a different way.
Best way was to use a proxy
used the proxy at: **https://www.npmjs.com/package/local-cors-proxy**
To install: npm install -g local-cors-proxy
To start: lcp --proxyUrl https://www.yourdomain.ie
In Client the GET point is: **http://localhost:8010/proxy/movies/list**
**/proxy/movies/list is the endpoint where as localhost:8010 covers the domain you're trying to reach that has that endpoint.

The way the idea was designed was behind a database that contained ALL songs and their information title/artist/genre/year
Current database is lacking the genre and year.
**Options are limited to querying one database to fill those columns with the missing information or putting it in manually
Attempting to use iTunes, which has this information, to update the database is an extremely slow process.
May need to create a secondary app just to fix the database.
Also need to plan out the remaining databases: songs, likes/dislikes, users
-songs is missing the information listed above.
-likes/dislikes would be a db where a user can select a thumbs up if they liked that song, or a thumbs down if they didn't. This will then narrow down the list of songs they can sing. It will also be a section that displays within the user profile so they can choose to remove the status of the song.
-users would track the users. It will have username/first name/last name/email/password/security question/security answer.

Being suggested to connect to another api and just pull data from there.
May work out, but I need to know a lot of information if I do that.
First off I would need to know the length of their library.
I could always pull a random song some way. 
Safe enough to look into.
Calling it a day.

**7/30/2021**
Focused on the youtube api.
Had meeting with John.
Suggested that instead of trying to add to DB we just write an array of objects to file.
Should create a Node app.

**8/4/2021**
Had a long weekend.
Focused on trying to create the file I need to create.
Put it together.
Ran into an issue with the system, for some reason it was giving me the letters of the first song.
Found out it was because I was importing [songsArr] instead of just using the module I was importing.
Changed to songsArr = require("./songName")
Same with Artist
Confirmed it's not pulling data.
Going to test it with just 500 songs and see how it works out.
Still not exactly what I want, but it's close.

**8/5/2021**
Figured out a way to add the correct genre and a release year to the song.
Unfortunately the song year may be off, but it'll be close.
What I did was, before pushing to song objs, I checked to see if there was a release/genre
If there was it just moves on, otherwise it winds up searching through songObjs for other songs with the same name and takes the year/genre from that.
Running the full length of the list.
We'll see how it works out.
Wound up having to restart after five minutes and adjusting a few things.

While waiting I played with the YouTube Data API and figured out how to use it. 
Will be able to pull the video ID from it and plug it into the video on the page.
I think it's time to start working on the components.
For video url we can use **https://www.youtube.com/watch?v=VIDEO_ID**
VIDEO_ID will be grabbed from the YouTube data API.

**8/6/2021**
Failed after attempting to retrieve both bits of data.
Changed to just require the song data regardless of success/unsuccessful.
Will update later.

**8/7/2021**
On my way out for Vacation.
Verified successful creation of data.
Will play with data when back from

**8/16/2021**
Back from Vacation!!!!
Began playing with Data.
Able to confirm that (A) the number of songs matches what it's supposed to and (B) that there are only 1022 songs that have no genre or release.
Started with verifying I could manipulate the Arr.
Created a random number > length is that of the song data.
Verified I could pull a random song using this data.
Created a random genre selection option as well.
Need to map all genres so I can list them all and just have a selector or something.
Created a random year method
confirmed it works.
I think with the years I will also have a selector of sorts. Need to think on that one.
I think that I'll have it be 80's and have min = year: 
	`yearsSelector (year) => {
		let min = year;
		let max = year + 9;
	}`
Or something along those lines
So if it's 80's it would be 1980 - 1989 because we will already encompass 1990 within the 90's category.

**08/17/2021**
Starting React development
Set up the components for the random karaoke song.
Created files RandomSong, Karaoke Video, Lyrics and MusicVideo. 
Was able to implement random song selections
Used iframe to load the Karaoke video into the page
Struggled a bit, but found it was because I was using watch instead of embed/id
Adjusted and now it's working.
Getting:
Video unavailable
Playback on other websites has been disabled by the video owner.
Watch on YouTube
Found it's likely because it's Karafun is the host.
Researching now.
3/3 were karafun...willing to bet this is the issue.
need to dig through and have the system search through the res for non-karafun, before accepting.
Console Log info:
Could check against snippet.channelTitle: "KaraFun Karaoke"
for(song of res.data){
	if(song.snippet.channeltTitle !== "KaraFun Karaoke"){
		videoId = song.id.videoId;
		break;
	}
}
Found that SingKing and Karafun are causing this issue.
Went over my limit, need to wait a bit.

**08/18/2021**
Time to play with Lyrics
Server is down apparently....hm....
Went back to research Musixmatch.
Limited to 2k calls daily
Only get 30% of song lyrics per call....
Really not going to work.
Shazam api isn't working out either.
Doesn't give lyrics
Genius returns lyrics via a url instead of the body.
Per the example response for Mourits, IT would be perfect.
Problem is it's not working....FML
Genius may work if I can scrape the site for the lyric.
Reference https://cmichel.io/song-lyrics-in-nodejs for a way to potentially get song lyrics.
Going to see if I can find a way to scrape the site for the lyrics. Found a potential walk through (Above)

**08/30/2021**
Spent the last week and a half moving and prepping/unpacking.
Finally back on this.
After last meeting with mentor it came to my attention that I should be trying to do more in the backend.
Most of my CORS issues would be alleviated with backend implementation.
Researched some backend projects from the past.
Mocked the basics of my backend from Jobly.
Played with the helpers functions and made sure I was able to retrieve the YouTube links and the lyrics populated.
Confirmed that everything was populating like it's supposed to.
Having trouble getting the information to populate
Only getting Promise Pending.
Shows up correct when in an async function.
Looking through the way this was handled in Jobly.
Not getting it.
Asked mentor.
Suggested .then
It works, but again only after the fact.
I'm an idiot....
Everything will be returned via a route and will go through async/await.
Packaged in a route.
Forgot to install everything.
Installed dependencies.
Verified that all is populating when using return res.json({info})
Tested a couple of dozen times.
Adjusted some language:
l -> lyric -> lyrics
k -> karaoke -> karaokeUrl
Created helper for musicVideo
Populates the music video of the song by artist.
The first section of this is done. Need to work on the next.
Not ready to set up the users/auth just yet.
Going to focus on turning in the first assignment of this project.

**08/31/2021**
Database day.
Setup Database to reflect SCHEMA.
Not a huge database and only for those who want to track their favorite songs.
Will update the songs array by creating a new array to adjust for anything that the user sets as a favorite IF they want.
* Will likely be an option that the user selects, similar to that of the year/genre definition.
Mocked db after the Jobly db
Ran .sql file and confirmed that everything was created.
Now I need to run routes to create database input.
Need to also set up Salt/Hashing for Password and Date of Birth.
Date of Birth will be used to assist a user in resetting their password.
Security question will not be hashed, though maybe it should
Security answer will be hashed.
Both will be used to verify the user.
Uploaded database files to git hub.

**09/01/2021**
Officially have the backend setup.
Was able to query the api, though when it comes time to do this for real some things will have to change.
Wrote a bit on the front end, but because of the way I wrote it it used up my youtube quota and now I have to wait til some time tomorrow.
I think I have it set up on the front end, but I'm not sure, will find out tomorrow.

**09/02/2021**
Able to query again.
Verified that I can get it set up and working correctly.
Have lyrics!
Have the Karaoke Video, but the Music video is blank.
Not embeddable.
Looking into this.
Apparently you can narrow down by using yt:accessControl action="embed"
Attempted within a search to define and it still didn't work.
Apparently there's a react youtube package that can be installed.
https://www.npmjs.com/package/react-youtube
Searching through all the returned results for the youtube search came up with nothing.
Sad panda.
Looking up better ways to add the music track.
So far the app will only consist of the Karaoke Track and the lyrics, which may be enough once all the user functionality is added.
Nothing is coming up that makes me go....hmm yeah that will work.
Suppose I could, instead of embedding the video, just have a link that will open it up?
Link would instead be: https://www.youtube.com/watch?v=[video id here]
I could then add a link to the song that says something like Title by Artist Music Video located here.
Should add this and see how it looks.
I can make it look good.
Struggling with making the link appear correctly.
Need to work on that.
I must have been doing something wrong because after reconfiguring it a bit it's now working.
I need to do some sort of catch for just in case anything comes back empty.
Added a check to the karaoke video backend helper to verify if there's data to sort through.
Should help with performing a check in the front end.
Did perform a check, but still had the 500 error. Maybe I forgot to restart the server?
Either way the app is, I would say 65% done. Maybe 50% if we're including styling.
Data is working as expected now though!!!!!

**09/06/2021**
Focused on setting up some restrictive random songs.
In other words defining the songs by specific criteria.
Started with returning artists
Moved on to returning genres
Working on returning dates.
Dates may not need to be returned in this case.
I think what I'll do is have a check box for specific year ranges.
Years start at 0979???
I think that's supposed to be 1979.
Going to make adjustment to the data.
Verified that 0979 is now gone.
Years start with 1937
Years end with 2021
Date Ranges:
	1930-1939
	1940-1949
	1950-1959
	1960-1969
	1970-1979
	1980-1989
	1990-1999
	2000-2009
	2010+
Verified that genres and artists are returning all in JSON format.
On the front end I need to sort out the look/feel of it all. 
The back end is returning what I want it to at this moment. 
Need to run through getting genre, date and artist returned with a random song from that g/d/a.
Confirmed Artist is working
Confirmed Genre is working
Confirmed Date is working
This is all confirmed on the backend.
Tomorrow I will put effort into figuring out the front end.
I need to sort out how I'm going to make this app look.
To Do:
Sort the app page by page.
When does it load the information for the song? 
I think I'm going to move that functionality to RandomSong, but that depends on I decide to do it.
Right now I've got 5 different API paths.
Do I want a component for eac version?
Do I want a single component that's versatile enough to manage the change.
How do I want it to look?
Plan for Wednesday to start user/authentication.
Tomorrow I will sort out how things will look.

**09/07/2021**
Worked on a lot today.
The app now has the ability to filter the type of song you want to sing.
Created Filter scripts and RandomSongBasedOn scripts.
These included: Genre/Artist/Date/User
All, but User is up and running.
Put a bit of CSS to work and made the front end look good.
Have a nav bar:
Kamikazee (Random song based on the whole songData array.)
Filter your Kamikazee Karaoke Experience (Filter by one var listed above)
Sign In (To be built, but it signs a user in.)
Sign Up (To be built, but it creates a user.)
After some trial and error I edited a few genres and artists to make sure they worked when used.
Created API script so I could just call those specific methods instead of using Axios everywhere.
Updated App. Instead of running the random song right when it loads, I have a landing page where the user decides where they're going.
Cleaned up some unused vars and imports.
A slightly different structure to the frontend.
Added filter_components folder which contains the filter components and FilterSong folder which contains all the random song based on components.

**09/08/2021**
Database day!!!
Set up the ability to add a user, authenticate a user, like a song and get a list of songs from the database.
Realized my seed was setup incorrectly and fixed it.
Instead of song ID (which would be easier) the favorites table stores the song name and artist.
Need to rebuild the DB with this in mind.
Rebuilt the DB
Created the userAuth and UserRegistration Schemas.
Quicker than I thought. Now I have to get into creating/sending token....
Installed packages bcrypt and jsonschema
Installed jsonwebtoken
Wrote tokens.js script.
Working on auth.js.
Tested /auth and /token and confirmed they work as expected.
Added the ability to add favorites to the database.
Ran tests to verify it worked and they were successful.

Still need to add ways to update user profile and unfavorite songs.
The second should be just as easy as adding, just change /:username/favorites/:songName/:artistName to /:username/unfavorite/:songName/:artistName and change it to remove.
Also need to have a few checks added, such as checking if the user matches the token before adding/removing a song.
Need to verify that the song exists for the user before unfavoriting.
Need to verify that the song does not exist before favoriting.

**09/09/2021**
Second day of DB day.
Was able to get the frontend squared away.
Now have a login page and a signup page
Running into an issue with the signup page
Need to run through and figure out what I'm missing.
Have to stop for the day, Allergies are kicking my butt.

**09/10/2021**
Able to get Login and Signup to work.
Perhaps I was messing up the password.
Need to setup a confirm password input. (To Do)
Set up Like for songs.
Verified that a user can put a single song in the favorites table.
Verfied that a user cannot put the same song in the favorites table.
Need to setup an unlike function that removes the song if it's in the favorites database under the user (To Do) [Done]
Going to need to add some user feedback. IE: Wrong password, already user with username. (To Do)
Need to add functionality to reset passwords. (To Do) 
Make so username can be uppercase/lowercase. (To Do)

**09/13/2021**
Created function that pulls all user liked songs in API
Set like button to update to either like or unlike and the form onSubmit to update from handleLikeSubmit or handleUnlikeSubmit.
Verified in DB that the like function works.
Verified in DB that the unlike function works.
Also verified that it works when state is set to opposite of current state.
Verified it works regardles if you're defining the kamikazee experience, or just randomly selecting any song in the song database.

**09/14/2021**
Today's focus is on the user created play list.
Was able to create a user based route and helper.
Confirmed with Insomnia that it now sends all required information.
Now I need to set up the front end.
Front end setup as expected.
Was a bit difficult.
Consistently threw errors until I did the random song selection on the front end and skipped sending the songs to the back end.
Now it will send/receive information based on the users liked songs.