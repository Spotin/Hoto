import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Box from '../components/Box/Box';

class LogbooksPage extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLogbooksFor(machineId, logs) {
    let logbooks = {};
    for (let i = 0; i < logs.length; i++) {
      if (logs[i].machine === machineId) {
        if (logbooks.hasOwnProperty(logs[i].logbook)) {
          logbooks[logs[i].logbook][logs[i].severity] += 1;
        } else {
          logbooks[logs[i].logbook] = {
            topic: logs[i].logbook,
            info: 0,
            debug: 0,
            error: 0,
            fatal: 0,
            warn: 0,
          };
          logbooks[logs[i].logbook][logs[i].severity] += 1;
        }
      }
    }

    let boxes = [];
    for (let key in logbooks) {
      if (logbooks.hasOwnProperty(key)) {
        const logbook = logbooks[key];
        boxes.push(
          <Box link={'/machines/' + machineId + '/' + logbook.topic}
               title={logbook.topic}
               info={logbook.info}
               debug={logbook.debug}
               error={logbook.error}
               fatal={logbook.fatal}
               warn={logbook.warn}
               screen={(()=>{
                 return logbook.fatal > 0? 'fatal' :
                   logbook.error > 0? 'error' :
                   logbook.warn > 0? 'warn' :
                   logbook.info > 0? 'info' :
                   'debug';
               })()}
               type="logbook" />
        )
      }
    }

    return boxes;
  }

  render() {
    const {logs} = this.props;

    return (
      <div className="flex-container">
        {this.renderLogbooksFor(this.props.params.machineId, logs)}
      </div>
    )
  }
}

LogbooksPage.propTypes = {
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
)(LogbooksPage);
