const express = require("express");
const app = express();

app.set('port', 5000);

const movies = [
  // ... (votre tableau de films)
];

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const getMovies = (req, res) => {
  res.json(movies);
};

app.get("/api/movies", getMovies);

// Move this route definition above the getMovieById function
app.get('/api/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (movie) {
    res.status(200).json(movie); // Assurez-vous que le statut est 200 ici
  } else {
    res.status(404).send('Not Found');
  }
});

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.status(404).send('Not Found');
  }
};

// Exportez le serveur ici
const server = app.listen(app.get('port'), (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${app.get('port')}`);
  }
});

module.exports = { app, server };  // Exportez le serveur ici
