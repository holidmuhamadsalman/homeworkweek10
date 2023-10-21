const MovieRepository = require("../repositories/repositoryMovies");

class MovieController {
      static async index(req, res) {
            try {
                  const movies = await MovieRepository.getAll();
                  res.render("movies/index", { movies: movies.rows });
            } catch (error) {
                  console.error(error);
            }
      }

      static async show(req, res) {
            const { id } = req.params;
            try {
                  const movie = await MovieRepository.getById(id);
                  res.render("movies/show", { movie: movie.rows[0] });
            } catch (error) {
                  console.error(error);
            }
      }

      static create(req, res) {
            res.render("movies/create");
      }

      static async store(req, res) {
            const { id, title, genres, year } = req.body;
            const photo = req.file.filename;
            try {
                  const newMovie = await MovieRepository.create({ id, title, genres, year, photo });
                  res.redirect("/movies");
            } catch (error) {
                  console.error(error);
            }
      }

      static async edit(req, res) {
            try {
                  const { id, title, genres, year, photo } = req.body;
                  const movies = await MovieRepository.update({ id, title, genres, year, photo });
                  res.render("movies/edit", { movies: movies.rows });
            } catch (error) {
                  console.error(error);
            }
      }

      static async update(req, res) {
            const { id } = req.params;
            const { title, genres, year } = req.body;
            const photo = req.file.filename;
            try {
                  await MovieRepository.update(id, { id, title, genres, year, photo });
                  res.redirect("/movies");
            } catch (error) {
                  console.error(error);
            }
      }

      static async delete(req, res) {
            const { id } = req.params.id;
            try {
                  const movies = await MovieRepository.hapus(id);
                  res.redirect("/movies", { movies: movies.rows });
            } catch (error) {
                  console.error(error);
            }
      }
}

module.exports = MovieController;
