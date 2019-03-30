import axios from "axios";

export default {
  // Gets all WorkOuts
  getAllWorkOuts: function() {
    return axios.get("/api/workouts");
  },
  // Gets all WorkOuts
  getSavedWorkOuts: function() {
    return axios.get("/api/savedworkouts");
  },

  //Push workout to User object
  pushWorkOut: function(data) {
    return axios.put("/api/users", data);
  },
  //add single exercise
  addExercise: function(data) {
    return axios.post("/api/workouts", data);
  },
  //Gets all Nutrition
  getNutrition: function() {
    return axios.get("/api/nutrition");
  },

  saveWorkOut: function(data) {
    return axios.post("/api/savedworkouts", data);
  },

  //--------------------USER--------------------------

  createUser: function(data) {
    return axios.post("/api/users", data);
  },

  findUser: function(data) {
    return axios.get("/api/users", data);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/workouts/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/workouts", bookData);
  }
};
