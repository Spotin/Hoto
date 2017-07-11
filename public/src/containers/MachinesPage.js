import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Box from '../components/Box/Box';

class MachinesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextprops, nextstate) {
    console.log("updating...");
    console.log(nextprops);
  }

  renderMachines(logs) {
    let machines = {};
    for (let i = 0; i < logs.length; i++) {
      if (machines.hasOwnProperty(logs[i].machine)) {
        console.log(logs[i].severity);
        machines[logs[i].machine][logs[i].severity] += 1;
      } else {
        machines[logs[i].machine] = {
          title: logs[i].machine,
          subtitle: logs[i].machineHost,
          info: 0,
          debug: 0,
          error: 0,
          fatal: 0,
          warn: 0
        };
        machines[logs[i].machine][logs[i].severity] += 1;
      }
    }

    console.log('showing machines');
    console.log(machines);

    let boxes = [];
    for (let key in machines) {
      if (machines.hasOwnProperty(key)) {
        const machine = machines[key];
        boxes.push(
          <Box link={'/machines/' + machine.title}
               title={machine.title}
               subtitle={machine.subtitle}
               info={machine.info}
               debug={machine.debug}
               error={machine.error}
               fatal={machine.fatal}
               warn={machine.warn}
               screen={(()=>{
                 return machine.fatal > 0? 'fatal' :
                   machine.error > 0? 'error' :
                   machine.warn > 0? 'warn' :
                   machine.info > 0? 'info' :
                   'debug';
               })()}
               type="machine" />
        )
      }
    }

    return boxes;
  }

  render() {
    const {logs} = this.props;

    return (
      <div className="flex-container">
        {this.renderMachines(logs)}
      </div>
    )
  }
}

MachinesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    logs: state.logs
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
)(MachinesPage);
