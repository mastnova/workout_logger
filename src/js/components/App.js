var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm');
var WorkoutsList = require('./WorkoutsList');

function getAppState(){
  return {
    showForm: AppStore.getShowForm(),
    workouts: AppStore.getWorkouts()
  }
}

var App = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  toggleForm: function(e){
    e.preventDefault();
    AppActions.toggleForm();
  },

  render: function(){
    if (this.state.showForm) {
      var FormButton = <button onClick={this.toggleForm} className="btn btn-info btn-block">Close Form</button>;
      var Form = <AddForm />;
    } else {
      var FormButton = <button onClick={this.toggleForm} className="btn btn-primary btn-block">Add Workout</button>;
      var Form = '';
    }

    return(
      <div>
        <h1 className="text-center page-header">WorkoutLogger</h1>
        {FormButton}
        <br />
        {Form}
        <br />
        <WorkoutsList workouts={this.state.workouts} />
      </div>
    );
  },

  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
