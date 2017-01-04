var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  // creates static data
  // returns default state of function
  getInitialState: function(){
    return {
        showCompleted: false,
        searchText: '',
        todos: [
          {
            id: 1,
            text: 'Walk the dog'
          }, {
            id: 2,
            text: 'Clean the yard'
          }, {
            id: 3,
            text: 'Leave mail on porch'
          }, {
            id: 4,
            text: 'Learn React'
          }
        ]
    };
  },
  handleAddTodo: function(text){
    alert('new todo: ' + text);
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
