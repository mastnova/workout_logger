var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _workouts = [];
var _showForm = false;

var AppStore = assign({}, EventEmitter.prototype, {
  toggleForm: function(){
    _showForm = !_showForm;
  },
  getShowForm: function(){
    return _showForm;
  },
  addWorkout: function(workout){
    _workouts.push(workout);
  },
  getWorkouts: function(){
    return _workouts;
  },
  receiveWorkouts: function(workouts){
    _workouts = workouts;
  },
  removeWorkout: function(workoutId){
    _workouts = _workouts.filter(workout => workout.id !== workoutId);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case AppConstants.TOGGLE_FORM:
      AppStore.toggleForm();
      break;
    case AppConstants.ADD_WORKOUT:
      AppStore.addWorkout(action.workout);
      AppAPI.saveWorkout(action.workout);
      break;
    case AppConstants.RECEIVE_WORKOUTS:
      AppStore.receiveWorkouts(action.workouts);
      break;
    case AppConstants.REMOVE_WORKOUT:
      AppStore.removeWorkout(action.workoutId);
      AppAPI.removeWorkout(action.workoutId);
      break;
    default:
      return false;
  }

  AppStore.emitChange();
  return true;
});

module.exports = AppStore;
