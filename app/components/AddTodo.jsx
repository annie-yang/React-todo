var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else{
      // if user clicks or add todo list button and there isn't valid data inputted
      // it will put the cursor back in the input field automatically, so they can try again
      this.refs.todoText.focus();
    }
  },
  render:function(){
    return(
      <div className="container_footer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
            <button className="button expanded">Add Todo</button>
          </form>
      </div>
    );
  }
});

module.exports = AddTodo;
