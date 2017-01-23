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
  /*
    takes 'todos' and filtered todos and returns a subset of the todos
    wired up in 'TodoApp.jsx'
  */
  filterTodos: function(todos, showCompleted, searchText){
    // set 'filterTodos' equal to the 'todos' array
    var filteredTodos = todos;

    /*
      filter by 'showCompleted'
      calls individual items
    */
    filteredTodos = filteredTodos.filter((todo) => {
      /*
        return false if it todo item is not completed (filtered out)
          OR if the showCompleted is true, return every single item (shown to screen -- won't get shown to screen)
      */
      return !todo.completed || showCompleted;
    });

    // filter by 'searchText'
    filteredTodos = filteredTodos.filter((todo) => {
      /*
        get text off todo item
        making search feature case insensitive
      */
      var text = todo.text.toLowerCase();
      /*
        if return true, the item stays in array
          if the length of the searchText is 0, we want to return every single item
        if return false, the item gets removed
          if the todo text contains the searchText phrase and is greater than -1, then success
          use indexOf to check if searchText is inside (if it's found)
          -1 if not found
      */
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    /*
      re-sort todos with non-completed first
      modifies existing ones
    */
    filteredTodos.sort((a, b) => {
      if(!a.completed === false && b.completed){
        return -1; // a comes before b
      } else if(a.completed && !b.completed){
        return 1; // b comes before a
      } else {
        return 0; // no change (assume a and b are equal)
      }
    });

    return filteredTodos;
  }
};
