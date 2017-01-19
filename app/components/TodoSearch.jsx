var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function(){
    /*
      "true" if box is checked and "false" if box is unchecked
      '.checked' attribute checks if it's checked or not
    */
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  /*
    'onChange' gets called everytime the value changes
    EX: if someone searches for letter "a", that will call the 'onChange' event and keep updating
      if they search for "p", it will render again and search for tasks that has letters "ap"
  */
  render: function(){
    return(
      <div className="container_header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}></input>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}></input>
            Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
