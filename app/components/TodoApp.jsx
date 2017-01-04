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
            text: 'Walk the dog'
          }, {
            id: uuid(),
            text: 'Clean the yard'
          }, {
            id: uuid(),
            text: 'Leave mail on porch'
          }, {
            id: uuid(),
            text: 'Learn React'
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
          text: text
        }
      ]
    });
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
        <TodoList todos = {todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
