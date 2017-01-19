var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    // grab props
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    // '{text}' renders the value of the text variable
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
