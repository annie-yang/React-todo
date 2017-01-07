var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0){
        return(
          <p className="container_message"> Nothing To Do</p>
        );
      }

      return todos.map((todo) => {
        return (
          // spread operator - takes every attribute from Todo and passes it down as a prop
          // unique key properties
          <Todo key={todo.id} {...todo}/>
        );
      });
    };
    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
