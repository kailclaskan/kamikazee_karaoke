# Kamikazee Karaoke

Have you ever been out on the town, having fun singing Karaoke when you suddenly didn't know what you wanted to sing? Let's be honest it's happened
most of the time, for me that is. This app was created with that idea in mind. I was out one night, having a few drinks and was tired of singing the 
same old songs. This app has a few different options to choose from when selecting a song. First there's the Kamikazee option. It allows you to 
receive any song from the entire database of songs. Then you can filter the songs by artist, genre or date. This will select songs only by the selected
option. Finally, there's one more filtering option....

The app pulls a Karaoke Video, a link to the music video and the lyrics for the song. When you receive your song it will have a like button. This button, 
if signed in, will allow a user to add the song to their own personal list. When signed in a user can filter all songs by just those songs. At that point 
a user can randomly select songs based on that list.

## Used API's
    * https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=
      * This is for the youtube karaoke video and the music video that will be populated.
    * Technically not an api, but to pull the lyrics I use the genius-lyrics node package. It uses the genius API to pull the lyrics and only the lyrics.
    * Finally I will use personal api for user creation so users can like songs.
      * This will create a new song array that only includes the users liked songs and will randomize based on that array if the user chooses to do this.

## Stack Used 
  -React
  -Javascript
  -PostgreSQL
  -Express
  -Node

## User Flows
Login, Sign Up, Filter, Kamikazee

Login -> Input Username and Password -> User signs in if info correct.
Signup -> Input Username, Password, First Name, Last Name, Email Address, Date of Birth, Security Question, Security Answer -> User signs in if information is correct.
Filter Your Kamikazee Karaoke Experience -> Filter options open up -> Select option -> Random Song opens up.
Kamikazee -> Random song from the entire database opens up.
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
