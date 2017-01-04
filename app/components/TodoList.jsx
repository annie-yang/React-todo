var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () => {
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

module.exports = TodoList;
