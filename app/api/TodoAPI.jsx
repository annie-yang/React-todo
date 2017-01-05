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
  }
};
