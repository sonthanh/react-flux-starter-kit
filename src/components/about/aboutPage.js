/**
 * Created by tdoson on 17.09.15.
 */
var React = require('react');

var About = React.createClass({
  render: function () {
    "use strict";
    return (
      <div>
        <h1>About</h1>

        <p>Abc
          <ul className="li">abc xyz</ul>
          <ul className="li">abc xyz</ul>
          <ul className="li">abc xyz</ul>
          <ul className="li">abc xyz</ul>
          <ul className="li">abc xyz</ul>
        </p>
      </div>
    );
  }
});

module.exports = About;