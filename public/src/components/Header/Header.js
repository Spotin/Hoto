import React from 'react';
// import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import { Menu } from 'semantic-ui-react'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleItemClick = (e) => browserHistory.push('/');
  }

  render() {
    const { activeItem } = this.state;

    return (
        <Menu>
          <Menu.Item header>Hoto</Menu.Item>
          <Menu.Item name='logs' active={activeItem === 'logs'} onClick={this.handleItemClick} />
        </Menu>
    );
  }
}

Header.propTypes = {
};

export default Header;
