var React = require('react');
var Workout = require('./Workout');
var AppActions = require('../actions/AppActions');

var WorkoutsList = React.createClass({
  render: function(){
    var workout = this.props.workout;
    var minutes = '';
    var miles = '';
    if (workout.minutes) {
      minutes = `- ${workout.minutes} Minutes`;
    }
    if (workout.miles) {
      miles = `| ${workout.miles} Miles`;
    }
    return(
      <li className="list-group-item">
        {`${workout.type} ${minutes} ${miles}`}
        <button className="btn btn-danger btn-xs btn-remove" onClick={this.removeWorkout.bind(this, workout.id)}>X</button>
      </li>
    );
  },

  removeWorkout: function(id){
    AppActions.removeWorkout(id);
  }
});

module.exports = WorkoutsList;
