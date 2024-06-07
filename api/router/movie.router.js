const router = require("express").Router(); 

const {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller"); 


router.get("/", getAllMovies);
router.get("/:id", getMovie);

router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
