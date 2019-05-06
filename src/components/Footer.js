import React from 'react';
import createReactClass from 'create-react-class';

export default createReactClass({
  render: function() {
    return <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>Written by @Takayuki</p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  }
});