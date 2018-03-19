# ACCEDO | Programming Test: Media App VOD

## Aplication Features

- Application displayed a list of vidios in a horizontal carousel on the home page.
- User can select a vidio to play after be log in
- When vidio is finished, the app go back to the home page
- User can use the entire app using keyboards keys (arrow keys to navigate in carousel and enter to select). Event mouse to select is supported too.
- User logged can see a list of videos that has previously watched in home page.
- The app is responsible to changing screen sizes. Mobile view is not implemented.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Create .env after fork and write DBURL=mongodb://localhost/accedo (you have to instal mongodb)

## Prerequisites fullfilled

- The app work in the last version of Chrome Browser
- The app has been developed entirely in HTML/JavaSCript/CSS
- Server has been developed in NodeJS. Authentication mechanism has been developed too.
- Data between the server and client side is in JSON format.
- MongoDB as DB

## Installed NPM Packages 
- axios
- bcrypt
- body-parse
- passport
- bootsrap@3.3.7
- jquery@3.3.1
- owl.carousel@2.3.2
- express
- express-ejs-layouts
- espress-session
- mongoose
- connect-mongo

## Documentation

#### Features
<!-- :::info -->
:bulb: **USBAT** stands for **U**ser **S**hould **B**e **A**ble **T**o
<!-- ::: -->

- **USBAT** : View the home page with movies.
- **USBAT** : View the home page with movies and a list of movies whatched by user logged.
- **USBAT** : Register in the application.
- **USBAT** : Login  
- **USBAT** : Logout

#### Routes
- `GET` `/`. Basic home page that displayed a list of vidios in a horizontal carousel. "Welcome < User Name >" once the user is logged in. If the user hasn't started a session, he should be redirected to `/login` page.
- `GET` `/signup`. The signup page show a form with the fields `username` and `password`.
- `POST` `/signup`. We save the user information in the database.
- `GET` `/login`. If the user is already logged in, it should redirect him to the home page.
- `POST` `/login`. We start user's session.
- `GET` `/logout`. We end the user's session.
- `GET` `/film`. Page where vidio is played.
- `POST` `/film`. Save film selected in user logged info.

#### Pages
- `index.ejs`
- `layouts/main.ejs`
- `auth/signup.ejs`
- `auth/login.ejs`
- `film/film.ejs`

#### Models
- `User`
  - `username` - User's name
  - `password` - Encrypted password with BCrypt
  - `movies` - Array of ObjectId movie
  
- `Movie`
  - `id` - Movie's id
  - `title` - Movie's title
  - `url` - Movie's url
  - `duration` - Movie's duration
  - `cover` - Movie's cover image
  
#### Public
- `javascripts/carousel.js`
- `stylesheets/style.js`

#### logic
- `movie.js`


## DEMO

[Accedo Test](http://accedorieser.herokuapp.com/)



