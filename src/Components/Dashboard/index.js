import React, { Component } from 'react';
import SideMenu from '../Navigation/sideMenu';
import TopBar from '../Navigation/topBar';
import { Scrollbars } from 'react-custom-scrollbars'; 
import { Container, Button, Link } from 'react-floating-action-button';
//import RadialChart from './radialChart';
//import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class  Dashboard extends Component {
   
logout = (event) => {
 event.preventDefault();
 this.props.history.push(ROUTES.SIGN_IN); 
}   
   
render () {   
        
return (
        <>
    
            <SideMenu />   

            <div className="content-page">
                 <TopBar />

                 <div className="content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Account Overview</h4>
                                    <div className="row text-center">  
                                        <div className="col-sm-6 col-xl-3">
                                            <div className="card-box widget-flat border-custom bg-custom text-white">
                                            <i className="fi-tag" />
                                            <h3 className="m-b-10">25563</h3>
                                            <p className="text-uppercase m-b-5 font-13 font-600">Total tickets</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xl-3">
                                            <div className="card-box bg-primary widget-flat border-primary text-white">
                                            <i className="fi-archive" />
                                            <h3 className="m-b-10">6952</h3>
                                            <p className="text-uppercase m-b-5 font-13 font-600">Pending Tickets</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xl-3">
                                            <div className="card-box bg-success widget-flat border-success text-white">
                                            <i className="fi-help" />
                                            <h3 className="m-b-10">6952</h3>
                                            <p className="text-uppercase m-b-5 font-13 font-600">Closed Tickets</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xl-3">
                                            <div className="card-box bg-danger widget-flat border-danger text-white">
                                            <i className="fi-delete" />
                                            <h3 className="m-b-10">6952</h3>
                                            <p className="text-uppercase m-b-5 font-13 font-600">Pending Tickets</p>
                                            </div>
                                        </div>
                                    </div>         
                                    {/*End Row*/}
                                </div>
                            </div>
                        </div>
                        {/*End row*/}    
                        <div className="row">
                            <div className="col-md-6 col-xl-3">
                            <div className="card-box tilebox-one">
                                <i className="icon-layers float-right text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                                <h2 className="m-b-20" data-plugin="counterup">1,587</h2>
                                <span className="badge badge-custom"> +11% </span> <span className="text-muted">From previous period</span>
                            </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                            <div className="card-box tilebox-one">
                                <i className="icon-paypal float-right text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Revenue</h6>
                                <h2 className="m-b-20">$<span data-plugin="counterup">46,782</span></h2>
                                <span className="badge badge-danger"> -29% </span> <span className="text-muted">From previous period</span>
                            </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                            <div className="card-box tilebox-one">
                                <i className="icon-chart float-right text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Average Price</h6>
                                <h2 className="m-b-20">$<span data-plugin="counterup">15.9</span></h2>
                                <span className="badge badge-custom"> 0% </span> <span className="text-muted">From previous period</span>
                            </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                            <div className="card-box tilebox-one">
                                <i className="icon-rocket float-right text-muted" />
                                <h6 className="text-muted text-uppercase mt-0">Product Sold</h6>
                                <h2 className="m-b-20" data-plugin="counterup">1,890</h2>
                                <span className="badge badge-custom"> +89% </span> <span className="text-muted">Last year</span>
                            </div>
                            </div>
                        </div>   
                        {/*End Row*/}

                        <div className="row">
                            {/* Messages */}
                            <div className="col-lg-4">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Messages</h4>
                                    <Scrollbars autoHide style={{ height: 370 }}>
                                    <div className="inbox-widget slimscroll">
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-1.jpg" className="rounded-circle bx-shadow-lg" alt="" /></div>
                                                <p className="inbox-item-author">Chadengle</p>
                                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                                <p className="inbox-item-date">13:40 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" className="rounded-circle bx-shadow-lg" alt="" /></div>
                                                <p className="inbox-item-author">Tomaslau</p>
                                                <p className="inbox-item-text">I've finished it! See you so...</p>
                                                <p className="inbox-item-date">13:34 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-3.jpg" className="rounded-circle bx-shadow-lg" alt="" /></div>
                                                <p className="inbox-item-author">Stillnotdavid</p>
                                                <p className="inbox-item-text">This theme is awesome!</p>
                                                <p className="inbox-item-date">13:17 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" className="rounded-circle bx-shadow-lg" alt="" /></div>
                                                <p className="inbox-item-author">Kurafire</p>
                                                <p className="inbox-item-text">Nice to meet you</p>
                                                <p className="inbox-item-date">12:20 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" className="rounded-circle bx-shadow-lg" alt="" /></div>
                                                <p className="inbox-item-author">Shahedk</p>
                                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                                <p className="inbox-item-date">10:15 AM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-6.jpg" className="rounded-circle bx-shadow-lg" alt="" /></div>
                                                <p className="inbox-item-author">Adhamdannaway</p>
                                                <p className="inbox-item-text">This theme is awesome!</p>
                                                <p className="inbox-item-date">9:56 AM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-8.jpg" className="rounded-circle bx-shadow-lg" alt="" /></div>
                                                <p className="inbox-item-author">Arashasghari</p>
                                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                                <p className="inbox-item-date">10:15 AM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-9.jpg" className="rounded-circle bx-shadow-lg" alt="" /></div>
                                                <p className="inbox-item-author">Joshaustin</p>
                                                <p className="inbox-item-text">I've finished it! See you so...</p>
                                                <p className="inbox-item-date">9:56 AM</p>
                                            </div>
                                        </a>
                                    </div>
                                    </Scrollbars>
                                </div>
                            </div>
                            {/* End Messages*/}
                            {/* Comments */}
                            <div className="col-lg-4">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Latest Comments</h4>
                                    <Scrollbars autoHide style={{ height: 370 }}>
                                    <div className="comment-list slimscroll">
                                        <a href="#">
                                            <div className="comment-box-item">
                                                <div className="badge badge-pill badge-success">Ubold - Admin</div>
                                                <p className="commnet-item-date">1 month ago</p>
                                                <h6 className="commnet-item-msg">Do you have any plans to add a vertical menu?</h6>
                                                <p className="commnet-item-user">Ubold User</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="comment-box-item">
                                                <div className="badge badge-pill badge-warning">Adminox - Admin</div>
                                                <p className="commnet-item-date">1 month ago</p>
                                                <h6 className="commnet-item-msg">Hello, what is your plan to upgrade Bootstrap 4 versions? Beta or wait for stable?</h6>
                                                <p className="commnet-item-user">Ubold User</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="comment-box-item">
                                                <div className="badge badge-pill badge-primary">Staro - Landing</div>
                                                <p className="commnet-item-date">1 month ago</p>
                                                <h6 className="commnet-item-msg">Hi coderthemes – do you have PSD for this admin UI? I could really use it.</h6>
                                                <p className="commnet-item-user">Ubold User</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="comment-box-item">
                                                <div className="badge badge-pill badge-dark">Ubold - Admin</div>
                                                <p className="commnet-item-date">1 month ago</p>
                                                <h6 className="commnet-item-msg">Do you have any plans to add a vertical menu?</h6>
                                                <p className="commnet-item-user">Ubold User</p>
                                            </div>
                                        </a>
                                    </div>
                                    </Scrollbars>
                                </div>
                            </div>   
                            {/* End Comments*/}
                            {/* Transaction*/}
                            <div className="col-lg-4">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Last Transactions</h4>
                                    <Scrollbars autoHide style={{ height: 370 }}>
                                    <ul className="list-unstyled transaction-list slimscroll mb-0" >
                                        <li>
                                            <i className="dripicons-arrow-down text-success"></i>
                                            <span className="tran-text">Advertising</span>
                                            <span className="float-right text-success tran-price">+$230</span>
                                            <span className="float-right text-muted">07/09/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-up text-danger"></i>
                                            <span className="tran-text">Support licence</span>
                                            <span className="float-right text-danger tran-price">-$965</span>
                                            <span className="float-right text-muted">07/09/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-down text-success"></i>
                                            <span className="tran-text">Extended licence</span>
                                            <span className="float-right text-success tran-price">+$830</span>
                                            <span className="float-right text-muted">07/09/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-down text-success"></i>
                                            <span className="tran-text">Advertising</span>
                                            <span className="float-right text-success tran-price">+$230</span>
                                            <span className="float-right text-muted">05/09/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-up text-danger"></i>
                                            <span className="tran-text">New plugins added</span>
                                            <span className="float-right text-danger tran-price">-$452</span>
                                            <span className="float-right text-muted">05/09/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-down text-success"></i>
                                            <span className="tran-text">Google Inc.</span>
                                            <span className="float-right text-success tran-price">+$230</span>
                                            <span className="float-right text-muted">04/09/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-up text-danger"></i>
                                            <span className="tran-text">Facebook Ad</span>
                                            <span className="float-right text-danger tran-price">-$364</span>
                                            <span className="float-right text-muted">03/09/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-down text-success"></i>
                                            <span className="tran-text">New sale</span>
                                            <span className="float-right text-success tran-price">+$230</span>
                                            <span className="float-right text-muted">03/09/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-down text-success"></i>
                                            <span className="tran-text">Advertising</span>
                                            <span className="float-right text-success tran-price">+$230</span>
                                            <span className="float-right text-muted">29/08/2017</span>
                                            <span className="clearfix"></span>
                                        </li>

                                        <li>
                                            <i className="dripicons-arrow-up text-danger"></i>
                                            <span className="tran-text">Support licence</span>
                                            <span className="float-right text-danger tran-price">-$854</span>
                                            <span className="float-right text-muted">27/08/2017</span>
                                            <span className="clearfix"></span>
                                        </li>
                                    </ul>
                                    </Scrollbars>
                                </div>
                            </div>
                            {/* End Transaction*/}
                        </div>    
                        {/**/} 
                    </div>{/*End Container*/}
                </div>     {/*End Content*/}            
                    <Container>
                        
                        <Link href="#"
                            tooltip="Add Driver"
                            icon="fi-head"
                           />
                        <Link href="#"
                            tooltip="Add Order"
                            icon="fi-layers"
                           />  
                        <Link href="#"
                            tooltip="Add Rute"
                            icon="fi-shuffle"
                           />    
                        <Button
                            tooltip="The big plus button!"
                            icon="fi-plus"
                            rotate={true}
                            onClick={() => alert('FAB Rocks!')} />
                    </Container>               
            </div>  
    </>          
    );
    }
}

const SignOutLink = () =>(
    <a href="" onClick={this.logout} ><i className="fi-power"></i> <span> Signout</span></a>
  );

export default Dashboard;
