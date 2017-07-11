import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class Logs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {data, columns} = this.props;

    return (
      <ReactTable
        style={{'width': '100%'}}
        data={data}
        columns={columns}
      />
    );
  }
}

Logs.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default Logs;
