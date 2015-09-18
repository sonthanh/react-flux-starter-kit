$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var App = React.createClass({
  render: function () {
    "use strict";
    var Child;

    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
      case 'authors':
        Child = Authors;
        break;
      default :
        Child = Home;
    }

    return (
      <div>
        <Header/>
        <Child/>
      </div>
    );
  }
});

var hash = window.location.hash;
console.log(hash);

function render() {
  "use strict";
  var route = window.location.hash.substr(1);
  React.render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();