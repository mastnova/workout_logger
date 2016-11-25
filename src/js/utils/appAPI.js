var AppActions = require('../actions/AppActions');

module.exports = {
  saveWorkout: function(workout){
    var workouts = JSON.parse(localStorage.getItem('workouts'));
    workouts = workouts || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  },

  getWorkouts: function(){
    var workouts = JSON.parse(localStorage.getItem('workouts'));
    AppActions.receiveWorkouts(workouts);
  },

  removeWorkout: function(workoutId){
    var workouts = JSON.parse(localStorage.getItem('workouts'));
    workouts = workouts.filter(workout => workout.id !== workoutId);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
}
