const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Movie = require('../models/Movie');
const isLoggedIn = require('../middlewares/isLoggedIn');

/* GET film page*/
router.get('/', isLoggedIn,function(req, res, next) {
    //console.log("entramos en movie");
    const userId = req.user.id;
    const urlFilm = req.query.url;
    const idFilm  = req.query.id;
    const {id,title,url,duration,cover} = req.query;
    console.log({id,title,url,duration,cover});
    Movie.findOne({"id":idFilm}).exec()
        .then(film => {
            if(film){
                User.findById(userId, (err, user) => {
                    if (user.movies.indexOf(film._id) === -1){
                        user.movies.push(film._id);
                        user.save()
                          .then(()=>{
                            //console.log(`New movie aded ${user.movies}`);
                            res.render('films/film', { title: 'Accedo', movie: urlFilm });
                          })
                    }else{
                        res.render('films/film', { title: 'Accedo', movie: urlFilm });
                    }
                })
            }
        })
        .then(()=>{
            const newMovie = new Movie({id,title,url,duration,cover});
            newMovie.save()
                .then((film)=>{
                    //Add _id film after created
                    User.findById(userId, (err,user) => {
                        user.movies.push(film._id);
                        user.save()
                          .then(()=>{
                            //console.log(`New movie aded ${user.movies}`);
                            res.render('films/film', { title: 'Accedo', movie: urlFilm });
                          })
                    })
                })
                .catch( e => console.log(e))//next(e))
        })
});

module.exports = router;