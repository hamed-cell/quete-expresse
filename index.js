// index.js
const express = require("express");
const app = express();

app.set('port', 5000);

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    colors: true,
    duration: 180,
  },
];

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Welcome to my favorite movie list');
});

// Route pour afficher la liste des films en JSON
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Route pour afficher un film spécifique par ID
app.get('/api/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send('Not Found');
  }
});

// Écouter le port défini
app.listen(app.get('port'), (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${app.get('port')}`);
  }
});
