var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    // check if the value passed in is an array
    if($.isArray(todos)){
      // 'JSON.stringify' converts array into string
      // set the item on 'localStorage' if is an array
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    // grab items from 'localStorage' and passes it to 'stringTodos'
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    } catch(e){

    };

    // check if todo's variable is an array
    // if is an array, return the variable
    // else return an empty array
    return $.isArray(todos) ? todos :[];
  },
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    // filter by 'showCompleted'
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by 'searchText'
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed === false && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
