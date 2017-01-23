var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  // return default state of our application
  getInitialState: function () {
    return {
      showCompleted: false, // when start application, only see todos you haven't completed
      searchText: '', // set to empty string because you want to return all todo items no matter what the text is
      todos: TodoAPI.getTodos() // fetch the todo list with whatever was saved in local storage
    };
  },
  // anytime we make changes to the state, we set the todos
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos, // include ALL old todos
        /*
          adding new todo items
        */
        {
          id: uuid(), // generate universely unique identifier (long string that is completely unique and random)
          text: text,
          completed: false, // not completed at default
          createdAt: moment().unix(), // using timestamp
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;

        /*
          if todo.completed is true, return timestamp
          if todo.completed is toggled to false, clear out the completedAt date
        */
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
  });
  this.setState({
      todos: updatedTodos
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    // values we want to grab
    var {todos, showCompleted, searchText} = this.state;
    // take all todos and filtered todos and run them through filtered todos and pass that array to "TodoList"
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText); //houses response

    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
