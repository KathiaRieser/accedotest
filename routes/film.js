const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Movie = require('../models/Movie');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/', isLoggedIn,function(req, res, next) {

    console.log("entramos en el get");
    console.log(req.query);
    console.log("request");
    console.log(req);
    const urlFilm = req.query.url;
    console.log(urlFilm);
    res.render('films/film', { title: 'Accedo', movie: urlFilm });

})

/* POST film page*/
router.post('/', isLoggedIn,function(req, res, next) {

    //console.log("entramos en movie");
    const userId = req.user.id;
    const urlFilm = req.query.url;
    const idFilm  = req.query.id;
    const {id,title,url,duration,cover} = req.query;
    //console.log({id,title,url,duration,cover});
    //console.log("entro en el post");
    //console.log(idFilm);
    Movie.findOne({"id":idFilm}).exec()
        .then(film => {
            //console.log("comprobamos que existe la peli");
            //console.log(film);
            if(film){
                console.log("existe la peli");
                
                User.findById(userId, (err, user) => {
                    if (user.movies.indexOf(film._id) === -1){
                        user.movies.push(film._id);
                        user.save()
                          .then(()=>{
                            console.log(`New movie aded ${user.movies}`);
                            //res.render('films/film', { title: 'Accedo', movie: urlFilm });
                            res.send({ title: 'Accedo', movie: urlFilm });
                          })
                    }else{
                        //res.render('films/film', { title: 'Accedo', movie: urlFilm });
                        res.send({ title: 'Accedo', movie: urlFilm });
                    }
                })
            }else{
                console.log("no existe la peli");
                const newMovie = new Movie({id,title,url,duration,cover});
                newMovie.save()
                    .then((film)=>{
                        //Add _id film after created
                        User.findById(userId, (err,user) => {
                            user.movies.push(film._id);
                            user.save()
                              .then(()=>{
                                console.log(`New movie created ${newMovie.id}`);
                                //res.render('films/film', { title: 'Accedo', movie: urlFilm });
                                res.send({ title: 'Accedo', movie: urlFilm });

                              })
                        })
                    })
                    .catch( e => console.log(e))//next(e))

            }
        })


})

module.exports = router;