/**
 * Created by tdoson on 17.09.15.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <h1>H1</h1>
        <p>abc</p>
        <Link to="about" className='btn btn-primary btn-large'>Learn more </Link>
      </div>
    );
  }
});

module.exports = Home;