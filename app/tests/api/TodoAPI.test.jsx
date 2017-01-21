var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  // gets called before every test
  beforeEach(() => {
    // clean out local storage value
	 localStorage.removeItem('todos');
  });

  it('should exist', () => {
	 expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
	 it('should set valid todos array', () => {
		var todos = [{
		  id: 23,
		  test: 'test all files',
		  completed: false
		}];
		TodoAPI.setTodos(todos);

     // store the value stored in the local storage todos item
		var actualTodos = JSON.parse(localStorage.getItem('todos'));

    // 'toEqual' works great for objects and array
		expect(actualTodos).toEqual(todos);
	 });

	 it('should not set invalid todos array', () => {
		var badTodos = {a: 'b'};
		TodoAPI.setTodos(badTodos);

		expect(localStorage.getItem('todos')).toBe(null);
	 });
  });

  describe('getTodos', () => {
	 it('should return empty array for bad localstorage data', () => {
		var actualTodos = TodoAPI.getTodos();
		expect(actualTodos).toEqual([]); // check if its value is equal to empty array
	 });

   // return the valid data
	 it('should return todo if valid array in localstorage', () => {
		var todos = [{
		  id: 23,
		  test: 'test all files',
		  completed: false
		}];

		localStorage.setItem('todos', JSON.stringify(todos));
		var actualTodos = TodoAPI.getTodos();

		expect(actualTodos).toEqual(todos);
	 });
  });

  describe('filterTodos', () => {
    var todos = [{
    id: 1,
    text: 'Some text here',
    completed: true
    },{
    id: 2,
    text: 'Other text here',
    completed: false
    },{
    id: 3,
    text: 'Some text here',
    completed: true
    }];

	 it('should return all items if showCompleted is true', () => {
     /*
      stores response from 'filteredTodos'
      testing what happens if the 'todo' is set to true
     */
  		var filteredTodos = TodoAPI.filterTodos(todos, true, '');
  		expect(filteredTodos.length).toBe(3);
  	 });

  	 it('should return non-completed todos when showCompleted is false', () => {
  		var filteredTodos = TodoAPI.filterTodos(todos, false, '');
  		expect(filteredTodos.length).toBe(1);
  	 });
  });
});
