import React,{useState,useRef,useEffect} from "react";
import PageHeader from "../parts/PageHeader";
import { UiDropDown } from "../components"
import {Bar} from 'react-chartjs-2';
const DashboardContent = ({title}) => {




  const node = useRef();
  // register document events
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // handle click outside event
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    // close all open dropdowns
    setEarningDropDownVisible(false);
  };

  const [isEarningDropDownVisible, setEarningDropDownVisible] = useState(false);
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [90, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  return (
    <div className="container-fluid" >
       <PageHeader title ={"Dashboard"}/>
      {/**<!-- Content Row -->*/}
          <div className="row">
            {/**<!-- Earnings (Monthly) Card Example -->*/}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/**<!-- Earnings (Monthly) Card Example -->*/}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/**<!-- Earnings (Monthly) Card Example -->*/}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<!-- Pending Requests Card Example -->*/}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**<!-- Content Row Area Chart -->*/}

          <div className="row">
           { /** <!-- Area Chart -->*/}
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/** <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between"  >
                  <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                  <div className="dropdown no-arrow" ref={node}>
                    <a className="" href=" # " role="button" id="dropdownMenuLink" onClick={()=> setEarningDropDownVisible(!isEarningDropDownVisible)} aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                      <UiDropDown show={isEarningDropDownVisible} />
                  </div>
                </div>
                {/** <!-- Card Body --> */}
                <div className="card-body">
                  <div className="chart-area">
                  <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={150}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
                  </div>
                </div>
              </div>
            </div>

            {/**<!-- Pie Chart --> */}
            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                {/** <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                  <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href=" #" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div className="dropdown-header">Dropdown Header:</div>
                      <a className="dropdown-item" href=" #">Action</a>
                      <a className="dropdown-item" href=" #">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href=" #">Something else here</a>
                    </div>
                  </div>
                </div>
                {/**<!-- Card Body -->*/}
                <div className="card-body">
                  <div className="chart-pie pt-4 pb-2">
                    <canvas id="myPieChart"></canvas>
                  </div>
                  <div className="mt-4 text-center small">
                    <span className="mr-2">
                      <i className="fas fa-circle text-primary"></i> Direct
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-success"></i> Social
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-info"></i> Referral
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    </div>
  );
};

export default DashboardContent;
