import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import DebugMachine from './monitor_debug.png';
import ErrorMachine from './monitor_error.png';
import WarnMachine from './monitor_warn.png';
import FatalMachine from './monitor_fatal.png';
import InfoMachine from './monitor_info.png';
import DefaultMachine from './monitor_default.png';

import DebugLogbook from './001-agenda-debug.png';
import ErrorLogbook from './001-agenda-error.png';
import WarnLogbook from './001-agenda-warn.png';
import FatalLogbook from './001-agenda-fatal.png';
import InfoLogbook from './001-agenda-info.png';
// import DefaultLogbook from './001-agenda-default.png';

import './box.scss'

import { Card, Icon, Image } from 'semantic-ui-react'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  renderMachineForScreen(screen) {
    if (screen === 'debug') return <Image src={DebugMachine} />;
    else if (screen === 'warn') return <Image src={WarnMachine} />;
    else if (screen === 'info') return <Image src={InfoMachine} />;
    else if (screen === 'error') return <Image src={ErrorMachine} />;
    else if (screen === 'fatal') return <Image src={FatalMachine} />;
    else return <Image src={DefaultMachine} />;
  }

  renderLogbookForScreen(screen) {
    if (screen === 'debug') return <Image src={DebugLogbook} />;
    else if (screen === 'warn') return <Image src={WarnLogbook} />;
    else if (screen === 'info') return <Image src={InfoLogbook} />;
    else if (screen === 'error') return <Image src={ErrorLogbook} />;
    else if (screen === 'fatal') return <Image src={FatalLogbook} />;
    else return <Image src={DefaultMachine} />;
  }

  handleClick() {
    const {link} = this.props;
    browserHistory.push(link);
  }

  render() {
    const {title, subtitle, info, debug, error, fatal, warn, screen, type} = this.props;

    return (
      <div className="box">
        <Card className="onHoverGlow" onClick={this.handleClick}>
          <div style={{'margin': '0 5px'}}>
            {type === 'machine'? this.renderMachineForScreen(screen) : this.renderLogbookForScreen(screen)}
          </div>
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>{subtitle}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <span style={{'color': '#30B330', 'margin': '0 0px 0 3px'}}>
              <Icon name='bug' /><h6 style={{'display': 'inline-block', 'margin': '0 0'}}>{debug}</h6>
            </span>
            <span style={{'color': '#1C95F4', 'margin': '0 0px 0 3px'}}>
              <Icon name='info circle' /><h6 style={{'display': 'inline-block', 'margin': '0 0'}}>{info}</h6>
            </span>
            <span style={{'color': '#A58D3F', 'margin': '0 0px 0 3px'}}>
              <Icon name='exclamation triangle' /><h6 style={{'display': 'inline-block', 'margin': '0 0'}}>{warn}</h6>
            </span>
            <span style={{'color': '#BC7C3B', 'margin': '0 0px 0 3px'}}>
              <Icon name='exclamation'></Icon><h6 style={{'display': 'inline-block', 'margin': '0 0'}}>{error}</h6>
            </span>
            <span style={{'color': '#C73C35', 'float': 'right', 'margin-bottom': '5px'}}>
              <Icon name='bomb'></Icon><h6 style={{'display': 'inline-block', 'margin': '0 0'}}>{fatal}</h6>
            </span>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.number.isRequired,
  debug: PropTypes.number.isRequired,
  error: PropTypes.number.isRequired,
  fatal: PropTypes.number.isRequired,
  warn: PropTypes.number.isRequired,
};

export default Box;
