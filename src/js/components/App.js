var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm');

function getAppState(){
  return {
    showForm: AppStore.getShowForm()
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

  onShowFormClick: function(e){
    e.preventDefault();
    AppActions.showForm();
  },

  render: function(){
    return(
      <div>
        <h1 className="text-center page-header">WorkoutLogger</h1>
        <a onClick={this.onShowFormClick} href="#" className="btn btn-primary btn-block">Add Workout</a>
        <br />
        {
          (this.state.showForm)
            ? <AddForm />
            : ''
        }
        <br />
        WORKOUTS
        <br />
      </div>
    );
  },

  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
