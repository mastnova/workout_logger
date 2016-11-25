var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  toggleForm: function(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.TOGGLE_FORM
    });
  },

  addWorkout: function(workout){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_WORKOUT,
      workout: workout
    });
  },

  receiveWorkouts: function(workouts){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_WORKOUTS,
      workouts: workouts
    });
  },

  removeWorkout: function(id){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_WORKOUT,
      workoutId: id
    })
  }
}

module.exports = AppActions;
