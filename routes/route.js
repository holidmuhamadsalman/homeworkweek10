const express = require("express");
const multer = require("multer");
const MovieController = require("../controllers/moviesController");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Folder tempat file di-upload

router.get("/movies", MovieController.index);
router.get("/movies/create", MovieController.create);
router.post("/movies", upload.single("photo"), MovieController.store);
router.get("/movies/:id", MovieController.show);
router.get("/movies/:id/edit", MovieController.edit);
router.put("/movies/:id", upload.single("photo"), MovieController.update);
router.delete("/movies/:id", MovieController.delete);

module.exports = router;
