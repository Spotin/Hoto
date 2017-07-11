import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Logs from '../components/Logs/Logs';
import '../components/Logs/logs.scss';

class LogsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  _formatLogData(machineId, logbookId, logs) {
    return logs.filter(obj => {
      return obj.machine === machineId && obj.logbook === logbookId;
    })
  }

  _chooseClassOnSeverity(severity) {
    switch (severity) {
      case 'info': return 'log-info';
      case 'debug': return 'log-debug';
      case 'warn': return 'log-warn';
      case 'error': return 'log-error';
      case 'fatal': return 'log-fatal';
    }
  }

  render() {
    const {logs} = this.props;

    const logData = this._formatLogData(this.props.params.machineId, this.props.params.logbookId, logs);
    const columns = [{
      width: 200,
      Header: 'Machine',
      accessor: 'machine' // String-based value accessors!
    }, {
      width: 200,
      Header: 'Host',
      accessor: 'machineHost',
    }, {
      width: 200,
      Header: 'Logbook',
      accessor: 'logbook'
    }, {
      width: 100,
      id: 'severity',
      Header: props => <span>Severity</span>, // Custom header components!
      accessor: 'severity',
      Cell: props => <div className={this._chooseClassOnSeverity(props.value)} style={{'text-align': 'center'}}>{props.value}</div> // Custom cell components!
    }, {
      Header: props => <span>Message</span>, // Custom header components!
      accessor: 'value'
    }];

    return (
      <div className="flex-container">
        <Logs data={logData} columns={columns}/>
      </div>
    )
  }
}

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
)(LogsPage);
