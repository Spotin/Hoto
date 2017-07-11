import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import MachinesPage from './containers/MachinesPage';
import LogbooksPage from './containers/LogbooksPage';
import LogsPage from './containers/LogsPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MachinesPage}/>
    <Route path="/machines/:machineId" component={LogbooksPage}/>
    <Route path="/machines/:machineId/:logbookId" component={LogsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
