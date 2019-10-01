import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import * as ROUTES from '../../constants/routes';

class SideMenu extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            showItems: []
        }
    }
    onClick(index) {
        console.log(index);
        let showItems = this.state.showItems.slice(0);
        showItems[index] = !showItems[index];
        this.setState({showItems});
        return false;
    }   
    logout() {
       //window.location.href='/';
        this.props.history.push('/');
        console.log('Logout fired');
        //event.preventDeafult();
    }
 render(){
     return(
        <div className="left side-menu">
                <div className="slimscroll-menu" id="remove-scroll">
                {/*<!-- LOGO --> */}
                    <div className="topbar-left">
                        <a href="index.html" className="logo">
                            <span>
                                <img src="assets/images/logo_new.png" alt="" height="22" />
                            </span>
                            <i>
                                <img src="assets/images/logo_sm.png" alt="" height="28" />
                            </i>
                        </a>
                    </div>

                    {/*<!-- User box -->*/}
                    <div className="user-box">
                        <div className="user-img">
                            <img src="assets/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle img-fluid" />
                        </div>
                        <h5><a href="#">Maxine Kennedy</a> </h5>
                        <p className="text-muted">Admin Head</p>
                    </div>

                    {/*<!--- Sidemenu --> */}
                    <Scrollbars autoHide  style={{ height: 500 }}>
                    <div id="sidebar-menu">
                        <ul className="metismenu" id="side-menu">
                            <li>
                                <Link to={'/dashboard'}>
                                    <i className="fi-air-play"></i> <span> Dashboard </span>
                                </Link>
                            </li>
                            <li>
                                <a  href="#/" onClick={ this.onClick.bind(this,0) }><i className="fi-head"></i> <span> Driver </span> <span className="menu-arrow"></span></a>
                                {this.state.showItems[0] ?
                                <ul  className="nav-second-level" aria-expanded="false">
                                    <li><Link to='/drivers' >Summary</Link></li>
                                    <li><Link to='/drivers-active' >Active</Link></li>
                                    <li><Link to='/drivers-inactive' >Inactive</Link></li>
                                    <li><Link to='/drivers-suspend' >Suspend</Link></li>
                               </ul>
                              : null} 
                            </li>
                            <li>
                                <a  href="#/" onClick={this.onClick.bind(this,1)}><i className="fi-layers"></i> <span> Order </span> <span className="menu-arrow"></span></a>
                                {this.state.showItems[1] ?
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><Link to='/orders' >Summary</Link></li>
                                    <li><Link to='/orders-open' >Open</Link></li>
                                    <li><Link to='/orders-assign' >Assign</Link></li>
                                    <li><Link to='/orders-process' >Process</Link></li>
                                    <li><Link to='/orders-done' >Done</Link></li>
                                    <li><Link to='/orders-cancel' >Cancel</Link></li>
                               
                                </ul>
                              : null} 
                            </li>
                            
                            <li>
                                <Link to='/route'><i className="fi-shuffle"></i><span>Rute</span></Link>
                            </li>
                            <li>
                                <a href="#/"><i className="fi-command"></i><span>PPOB</span></a>
                            </li>
                            <li>
                                <a href="#/" onClick={this.onClick.bind(this,2)}><i className="fi-repeat"></i><span>Withdraw</span><span className="menu-arrow"></span></a>
                                {this.state.showItems[2] ?
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><a href="apps-calendar.html">WD Done</a></li>
                                    <li><a href="apps-tickets.html">WD Request</a></li>                               
                                </ul>
                              : null} 
                            </li>
                            <li>
                                <a href="#/" onClick={this.onClick.bind(this,3)}><i className="fi-cog"></i><span>Setting</span><span className="menu-arrow"></span></a>
                                {this.state.showItems[3] ?
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><a href="apps-calendar.html">Calendar</a></li>
                                    <li><a href="apps-tickets.html">Tickets</a></li>
                                    <li><a href="apps-taskboard.html">Task Board</a></li>
                                    <li><a href="apps-task-detail.html">Task Detail</a></li>
                               
                                </ul>
                              : null} 
                            </li>
                            <li>
                                <a href="#/"><i className="fi-monitor"></i><span>Laporan</span></a>
                            </li>
                            <li>
                            <a href="#" onClick={this.logout}><i className="fi-power"></i> <span> Signout</span></a>

                            </li>
                        </ul>    
                    </div>
                    </Scrollbars>                
                    <div className="clearfix"></div>

                </div>
            </div>     
     );
 }
}

export default withRouter(SideMenu);