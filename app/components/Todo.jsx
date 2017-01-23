var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    // grab props
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    // creates the timestamp
    var renderDate = () => {
      var message = 'Created '; // text shown before timestamp
      var timestamp = createdAt; // timestamp itself

      /*
        if completed status is true
          update message and timestamp
      */
      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      // return the message and format of the timestamp
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    /*
      '{text}' renders the value of the text variable
      'checked' takes true (checkbox will be checked) or false (checkbox won't be checked)

      passing function indirectly using arrow function
      'onToggle' method that gets passed down from the parent
        pass in the 'id' we like to do to toggle

      'renderDate' renders the date
    */
    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id);
          dispatch(actions.toggleTodo(id));
        }}>
        <div className="todo_subtext">
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
