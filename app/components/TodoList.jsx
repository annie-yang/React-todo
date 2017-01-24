var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function () {
    // pulls todos prop off 'this.props'
    var {todos} = this.props;

    /*
      iterate over array and return array of jsx --> return a value
      do something with "every todo" --> return a new piece of jsx that gets rendered to the screen for every element in the array
    */
    var renderTodos = () => {
      /*
        if array is 0, return a message
      */
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      /*
        'todos.map' takes a function and calls the function for every element in the array and whatever gets returned gets replaced
        EX: 1 2 3 and add 1, the value is 2, 3, 4
      */
      return todos.map((todo) => {
        return (
          /*
            grabs the unique IDs from todo's
            '{...todo}' is a spread operator that passes down every attribute on an object (id and text) as props to a react component without explicitly defining everything
          */
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };

    // custom renderer
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
