var AppActions = require('../actions/AppActions');

module.exports = {
  saveWorkout: function(workout){
    var workouts = JSON.parse(localStorage.getItem('workouts'));
    workouts = workouts || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }
}
