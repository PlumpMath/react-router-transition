import React from 'react';
import Router from 'react-router/build/npm';
import VelocityTransitionGroup from './velocity.jsx';
var { Route, RouteHandler, DefaultRoute, Link, HistoryLocation } = Router;
var App;
var routes;

class Inbox extends React.Component {
  render() {
    return (
      <div className="page page-inbox">
        <h2>here is an inbox</h2>
      </div>
    );
  }
}

class Calendar extends React.Component {
  render() {
    return (
      <div className="page page-calendar">
        <h2>here is a calendar</h2>
      </div>
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <div className="page page-dashboard">
        <h2>here is a dashboard</h2>
      </div>
    );
  }
}

App = React.createClass({
  contextTypes: { router: React.PropTypes.func },

  render() {
    let name = this.context.router.getCurrentPath();

    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
        </header>

        <VelocityTransitionGroup transitionName="slideover-forward">
          <RouteHandler key={name}/>
        </VelocityTransitionGroup>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox} />
    <Route name="calendar" handler={Calendar} />
    <DefaultRoute handler={Dashboard} />
  </Route>
);

Router.run(routes, HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});

