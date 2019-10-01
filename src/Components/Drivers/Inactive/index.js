import React, { Component } from 'react';
import SideMenu from '../../Navigation/sideMenu';
import TopBar from '../../Navigation/topBar';
import SpicyDatatable from 'spicy-datatable';
import { Container, Button, Link } from 'react-floating-action-button';
//import RadialChart from './radialChart';
//import { withFirebase } from '../Firebase';


class  DriverSummary extends Component {
   
  
render () {   

const columns = [{
        key: 'id',
        label: '#',
        sort:true
      }, {
        key: 'driver',
        label: 'Driver',
        sort: true
      },{
        key: 'phone_number',
        label: 'Nomor HP',
        sort: true
      },{
        key: 'status',
        label: 'Status',
        sort: true
      },{
        key: 'kendaraan',
        label: 'Kendaraan',
        sort: true
      },{
        key: 'plat_nomor',
        label: 'Plat Nomor',
        sort: true
      },,{
        key: 'action',
        label: 'Action',
        sort: true
      },

    ];

    const rows = [
        {id:1,driver:"Fulan bin Fulan", phone_number:"0811223344",status:"active",kendaraan:"Suzuki Ertiga", plat_nomor:"W 3515 IS"},
        {id:2,driver:"Fulan bin Fulani", phone_number:"081122334455",status:"suspend",kendaraan:"Suzuki Pajero", plat_nomor:"W 351 SI"},
        {id:3,driver:"Abdul bin Fulan", phone_number:"081122344",status:"inactive",kendaraan:"Wuling Conferro", plat_nomor:"L 147 IN"},
  
      ];
const ActionCell = action => <div className="btn-group dropdown">
<a href="javascript: void(0);" className="table-action-btn dropdown-toggle arrow-none btn btn-light btn-sm" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal" /></a>
<div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#"><i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />Edit Ticket</a>
    <a className="dropdown-item" href="#"><i className="mdi mdi-check-all mr-2 text-muted font-18 vertical-middle" />Close</a>
   </div>
</div>;

const StatusCell = status => {
        switch (status) {
          case "active":
            return <span className="badge badge-success">{status}</span>;
          case "suspend":
            return <span className="badge badge-dark">{status}</span>;
          case "inactive":
            return <span className="badge badge-danger">{status}</span>;  
          
          default:
            return <div>{status}</div>;
        }
      };
return (
        <>
    
            <SideMenu />   

            <div className="content-page">
                 <TopBar />
              {/* Start Page content */}
                    <div className="content">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                            <div className="card-box">
                                <h4 className="header-title">Driver Summary</h4>
                                <div className="text-center mt-4 mb-4">
                                <div className="row">
                                    <div className="col-md-6 col-xl-3">
                                    <div className="card-box widget-flat border-custom bg-custom text-white">
                                        <i className="fi-tag" />
                                        <h3 className="m-b-10">25563</h3>
                                        <p className="text-uppercase m-b-5 font-13 font-600">Total tickets</p>
                                    </div>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                    <div className="card-box bg-primary widget-flat border-primary text-white">
                                        <i className="fi-archive" />
                                        <h3 className="m-b-10">6952</h3>
                                        <p className="text-uppercase m-b-5 font-13 font-600">Pending Tickets</p>
                                    </div>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                    <div className="card-box widget-flat border-success bg-success text-white">
                                        <i className="fi-help" />
                                        <h3 className="m-b-10">18361</h3>
                                        <p className="text-uppercase m-b-5 font-13 font-600">Closed Tickets</p>
                                    </div>
                                    </div>
                                    <div className="col-md-6 col-xl-3">
                                    <div className="card-box bg-danger widget-flat border-danger text-white">
                                        <i className="fi-delete" />
                                        <h3 className="m-b-10">250</h3>
                                        <p className="text-uppercase m-b-5 font-13 font-600">Deleted Tickets</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/*Spicy Datatable Here*/}

                                <SpicyDatatable 
                            tableKey="demo-table-genral" 
                            columns={columns} 
                            rows={rows.map(row => ({
                                ...row,
                                status: StatusCell(row.status),
                                action: ActionCell(row.action)
                              }))}
                            config={{ showDownloadCSVButton: true }}/> :

                                                   </div>
                            </div>{/* end col */}
                        </div>
                        {/* end row */}
                        </div> {/* container */}
                    </div> {/* content */}                             
                    <Container>
                        
                        <Link href="#"
                            tooltip="Add user link"
                            icon="fi-paper"
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

export default DriverSummary;
