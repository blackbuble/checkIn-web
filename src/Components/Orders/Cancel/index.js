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
      },  {
        key: 'booking_code',
        label: 'Kode booking',
        sort: true
      },{
        key: 'passengger',
        label: 'Penumpang',
        sort: true
      },{
        key: 'rute',
        label: 'Rute',
        sort: true
      },{
        key: 'driver',
        label: 'Driver',
        sort: true
      },{
        key: 'status',
        label: 'Status',
        sort: true
      },{
        key: 'driver_price',
        label: 'Rate Driver',
        sort: true
      },{
        key: 'date_order',
        label: 'Layanan',
        sort: true
      },,{
        key: 'action',
        label: 'Action',
        sort: true
      },

    ];

    const rows = [
        {id:1,booking_code:"SUB7250",passengger:"Abunawas",rute:"SUB-Kertajaya",driver:"n/a",status:"open",driver_price:"90.000",date_order:"22/10/2019 11:00",profit:"5.000"},
         ];
const ActionCell = action => <div className="btn-group dropdown">
<a href="javascript: void(0);" className="table-action-btn dropdown-toggle arrow-none btn btn-light btn-sm" data-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-horizontal" /></a>
<div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#"><i className="mdi mdi-pencil mr-2 text-muted font-18 vertical-middle" />Edit Ticket</a>
  </div>
</div>;

const StatusCell = status => {
        switch (status) {
          case "open":
            return <span className="badge badge-success">{status}</span>;
          case "close":
            return <span className="badge badge-dark">{status}</span>;
          case "assign":
            return <span className="badge badge-danger">{status}</span>;  
          case "cancel":
            return <span className="badge badge-warning">{status}</span>;    
          case "on process":
            return <span className="badge badge-info">{status}</span>;      
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
                                <h4 className="header-title">Order Cancel</h4>
                                
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
