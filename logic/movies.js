const axios = require("axios");
//const _ = require('lodash');

module.exports = () => {

  return new Promise((resolve, reject) => {

    url = "https://demo2697834.mockable.io/movies";
    axios.get(url)
    .then(res => {

      //console.log(res.data)
      movies = [];
      res.data.entries.forEach(m => { 
        movies.push({
          id:m.id,
          title:m.title, 
          cover:m.images[0].url,
          url:m.contents[0].url
        })
      })
      //console.log(movies.length);
      //console.log(movies);
      resolve(movies);
    })
    .catch(e => {
      console.log(e);
      reject()

    })
  })
}

