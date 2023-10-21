const pool = require("../config/db");

class Movie {
      static getAll() {
            return pool.query("SELECT * FROM movies");
      }

      static getById(id) {
            return pool.query("SELECT * FROM movies WHERE id = $1", [id]);
      }

      static create(movie) {
            const { id, title, genres, year, photo } = movie;
            return pool.query("INSERT INTO movies (id, title, genres, year, photo) VALUES ($1, $2, $3, $4, $5) RETURNING *", [id, title, genres, year, photo]);
      }

      static update(movies) {
            const { id, title, genres, year, photo } = movies;
            return pool.query("UPDATE movies SET title = $1, genres = $2, year = $3, photo = $4 WHERE id = $5 RETURNING *", [title, genres, year, photo, id]);
      }

      static hapus(id) {
            return pool.query("DELETE FROM movies WHERE id = $1", [id]);
      }
}

module.exports = Movie;
