import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import { Link, IndexLink } from 'react-router';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    const {routing} = this.props;

    const location = routing.locationBeforeTransitions.pathname;

    function matchLocationToBreadcrumbs(location) {
      if (/^\/$/.test(location)) return [
        {name:'Machines', link:'/', current: true}
      ];
      else if (/^\/machines\/([a-z]|[A-Z]|[0-9]|%20| )*$/.test(location)) return [
        {name:'Machines', link:'/'},
        {name:location.split('/')[2], link:'/machines/' + location.split('/')[2], current: true}
      ];
      else if (/^\/machines\/([a-z]|[A-Z]|[0-9]|%20| )*\/([a-z]|[A-Z]|[0-9]|%20| )*$/.test(location)) return [
        {name:'Machines', link:'/'},
        {name:location.split('/')[2], link:'/machines/' + location.split('/')[2]},
        {name:location.split('/')[3], link:'/machines/' + location.split('/')[2] + '/' + location.split('/')[3], current: true}
      ]; else
        return [
          {name:'Take Me Home', link:'/', current: true}
        ];
    }

    return (
      <div>
        <Header />
        <br/>
        <Breadcrumb crumbs={matchLocationToBreadcrumbs(location)} style={{'margin-left': '10px'}} />
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    routing: state.routing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
