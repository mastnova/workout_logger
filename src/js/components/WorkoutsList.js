var React = require('react');
var Workout = require('./Workout');

var WorkoutsList = React.createClass({
  render: function(){
    return(
      <ul className="list-group">
        {
          this.props.workouts.map((workout, i) => {
            return <Workout workout={workout} key={i} />
          })
        }
      </ul>
    );
  }
});

module.exports = WorkoutsList;
