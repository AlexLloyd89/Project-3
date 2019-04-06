const router = require("express").Router();
const workOutController = require("../../controllers/workout/workOutController");

//gets all workouts, used for finding individual exercises
router
  .route("/")
  .get(workOutController.findAllWorkOuts)
  .post(workOutController.addExercise);

router.route("/:date").get(workOutController.findWorkOutsByDate);

//gets presaved workouts
router
  .route("/savedworkouts")
  .get(workOutController.findSavedWorkOuts)
  .post(workOutController.saveWorkOut);

module.exports = router;
