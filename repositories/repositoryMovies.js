const Movie = require("../models/movie");

class MovieRepository {
      static getAll() {
            return Movie.getAll();
      }

      static getById(id) {
            return Movie.getById(id);
      }

      static create(movie) {
            return Movie.create(movie);
      }

      static update(id) {
            return Movie.update(id);
      }

      static delete(id) {
            return Movie.delete(id);
      }
}

module.exports = MovieRepository;
