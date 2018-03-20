const express = require('express');
const router = express.Router();
const movies = require("../logic/movies");
const Movie = require('../models/Movie');
const User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const user = req.user;
  //console.log(user);
  movies()
  .then((films) => {
    //console.log(films);
    if(!user){
        res.render('index', { title: 'Accedo', movies:films });
    }else{
      
      User.findById(user.id).populate('movies').select('movies')
        .exec((err, filmsWacthed) => {
          //console.log("Ejecutamos query");
          //console.log(filmsWacthed.movies);
          if (err) { return next(err); }
          res.render('index', { title: 'Accedo', movies:films, watched:filmsWacthed.movies });
        })
    }
    
  })
  .catch(e => console.log(e))

});

module.exports = router;
