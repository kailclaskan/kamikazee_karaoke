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