import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbExampleSmallSize = (props) => {

  const {crumbs} = props;

  function renderCrumbs(crumbs) {
    return crumbs.map(obj => {
      return [
        <Breadcrumb.Section link><Link to={obj.link}>{obj.name}</Link></Breadcrumb.Section>,
        obj.current? null : <Breadcrumb.Divider icon='right chevron'/>
      ];
    });
  }

  return (
    <div style={props.style}>
      <Breadcrumb size='small'>
        {renderCrumbs(crumbs)}
      </Breadcrumb>
    </div>
  )
};

BreadcrumbExampleSmallSize.propTypes = {
  crumbs: PropTypes.array.isRequired,
};

export default BreadcrumbExampleSmallSize;
