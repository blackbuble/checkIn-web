import React, { Component } from 'react';
import SideMenu from '../Navigation/sideMenu';
import TopBar from '../Navigation/topBar';
import SpicyDatatable from 'spicy-datatable';
import { Container, Button, Link } from 'react-floating-action-button';
//import RadialChart from './radialChart';
//import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class  RoutesPage extends Component {
   

render () {   

    const columns = [{
        key: 'id',
        label: '#',
        sort:true
      }, {
        key: 'rute',
        label: 'Rute',
        sort: true
      }, {
        key: 'fix_price',
        label: 'Harga Vendor',
        sort: true
      }, {
        key: 'driver_price',
        label: 'Offer Driver',
        sort: true
      },{
        key: 'pic_share',
        label: 'PIC',
        sort: true
      },{
        key: 'profit',
        label: 'Profit',
        sort: true
      },
    ];
    
const rows = [
       {id:1,rute:"SUB-Kertajaya",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:2,rute:"SUB-Manyar",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:3,rute:"SUB-Sukolilo",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:4,rute:"SUB-Mulyosari",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:5,rute:"SUB-Mulyorejo",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:6,rute:"SUB-Kapasan",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:7,rute:"SUB-Tj. Perak",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:8,rute:"SUB-JMP",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:9,rute:"SUB-Simopomahan",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:10,rute:"SUB-Manukan",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:11,rute:"MLG-Batu",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:12,rute:"MLG-Sawojajar",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:13,rute:"MLG-Purwantoro",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:14,rute:"MLG-Pakisjajar",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:15,rute:"MLG-Pakisaji",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:16,rute:"MLG-Kepanjen",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:17,rute:"MLG-Pandaan",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:18,rute:"MLG-Singosari",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:19,rute:"MLG-Lawang",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:20,rute:"MLG-Blimbing",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:21,rute:"MLG-Lowokwaru",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
       {id:22,rute:"MLG-Tumpang",fix_price:"100.000",driver_price:"90.000",pic_share:"5.000",profit:"5.000"},
     ];
      
const NameCell = rute => <div style={{ fontWeight: 700 }}>{rute}</div>;
          
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
                                    <h4 className="header-title mb-4">Routes Page</h4>
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
                                    <SpicyDatatable 
                            tableKey="demo-table-genral" 
                            columns={columns} 
                            rows={rows} 
                            config={{ showDownloadCSVButton: true }}/> :
                                </div>
                                
                            </div>
                        </div>
                        {/*End row*/}    
                      
                       
                    
                       
                        {/**/} 
                    </div>{/*End Container*/}
                </div>     {/*End Content*/}            
                    <Container>
                        
                       
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

export default RoutesPage;
