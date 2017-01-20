/*
  set and fetch todo items from local storage
*/

var $ = require('jquery');

module.exports = {
  // take a set of todo arrays we like to save
  setTodos: function(todos) {
    // check if the value passed in is an array
    if($.isArray(todos)){
      /*
        if value is an array, store the value in local storage
          'JSON.stringify' converts array into string
      */
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos; // differentiate between invalid and valid data
    }
  },
  // fetch todos out from local storage
  getTodos: function(){
    // grab items from 'localStorage' and passes it to 'stringTodos'
    var stringTodos = localStorage.getItem('todos');
    var todos = []; // if we don't have valid data inside 'stringTodos', we just return the empty array

    try{
      todos = JSON.parse(stringTodos); // convert 'stringTodos' to an array
    } catch(e){ // catches error if error is inside 'try'

    };

    /*
      check if whatever was stored inside todo's was an array
      if is an array, return the variable
      else return an empty array
    */
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
