import React, { Component } from 'react';
//import SignIn from '../SignIn';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import DashboardPage from '../Dashboard';
import DriverSummary from '../Drivers/Summary';
import DriverActive from '../Drivers/Active';
import DriverInactive from '../Drivers/Inactive';
import DriverSuspend from '../Drivers/Suspend';
import OrderSummary from '../Orders/Summary';
import OrderOpen from '../Orders/Open';
import OrderCancel from '../Orders/Cancel';
import OrderDone from "../Orders/Done";
import OrderProcess from '../Orders/Process';
import OrderAssign from '../Orders/Assign';
import RouteAction from '../Route';
import * as ROUTES from '../../constants/routes';

class App extends Component {
 render(){ 
   return (
    <div className="App">
      <Router>
        <Route exact path='/' component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.DASHBOARD} component={DashboardPage} />
        <Route path={ROUTES.DRIVER_SUMMARY} component={DriverSummary} />
        <Route path={ROUTES.DRIVER_ACTIVE} component={DriverActive} />
        <Route path={ROUTES.DRIVER_INACTIVE} component={DriverInactive} />
        <Route path={ROUTES.DRIVER_SUSPEND} component={DriverSuspend} />
        <Route path={ROUTES.ORDER_SUMMARY} component={OrderSummary} />
        <Route path={ROUTES.ORDER_OPEN} component={OrderOpen} />
        <Route path={ROUTES.ORDER_CANCEL} component={OrderCancel} />
        <Route path={ROUTES.ORDER_DONE} component={OrderDone} />
        <Route path={ROUTES.ORDER_PROCESS} component={OrderProcess} />
        <Route path={ROUTES.ORDER_ASSIGN} component={OrderAssign} />
        <Route path={ROUTES.ROUTE} component={RouteAction} />
      </Router>
     
    </div>
  );
 }
}

export default App;
