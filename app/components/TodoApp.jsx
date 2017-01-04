var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  // creates static data
  // returns default state of function
  getInitialState: function(){
    return {
        showCompleted: false,
        searchText: '',
        todos: [
          {
            id: uuid(),
            text: 'Walk the dog',
            completed: false
          }, {
            id: uuid(),
            text: 'Clean the yard',
            completed: true
          }, {
            id: uuid(),
            text: 'Leave mail on porch',
            completed: false
          }, {
            id: uuid(),
            text: 'Learn React',
            completed: true
          }
        ]
    };
  },
  handleAddTodo: function(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(), // uuid package that specifies its unique id
          text: text,
          completed: false // always start at first
        }
      ]
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render:function() {
    // pass data down from TodoList
    var{todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos = {todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
