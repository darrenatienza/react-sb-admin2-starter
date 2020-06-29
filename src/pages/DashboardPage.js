import React, { useState, useRef, useEffect } from "react";
import PageHeader from "../parts/PageHeader";
import { UiDropDown, Card, SmallCard } from "../components";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import NumberFormat from "react-number-format";
const DashboardContent = ({ title }) => {
  const [isEarningDropDownVisible, setEarningDropDownVisible] = useState(false);
  const [isRevenueDropdownVisible, setRevenueDropdownVisible] = useState(false);
  const [val,setValue] = useState("");
  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Earnings",
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        pointRadius: 3,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: [
          0,
          10000,
          5000,
          15000,
          10000,
          20000,
          15000,
          25000,
          20000,
          30000,
          25000,
          40000,
        ],
      },
    ],
  };
  const barOptions = {
    maintainAspectRatio: false,
    layout: {
      padding: { left: 10, right: 25, top: 25, bottom: 0 },
    },
    legend: { display: false },
    scales:{
      xAxes:[{
        time:{
          unit:"day"
        },
        gridLines:{
          display: false,
          drawBorder: false
        },
        ticks:{
          maxTicksLimit: 7
        }
      }],
      yAxes: [
        {
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return ("$" + Number(value).toLocaleString('en')) ;
            },
            
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
      ],
    },tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + Number(tooltipItem.yLabel).toLocaleString('en');
        }
      }
    }

  }

  const pieData = {
    labels: ["Direct", "Social", "Referral"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#4E73DF", "#1CC88A", "#36B9CC"],
        hoverBackgroundColor: ["#4E73DF", "#1CC88A", "#36B9CC"],
      },
    ],
  };
  const pieOptions = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  }
  return (
    <div className="container-fluid">
      <PageHeader title={"Dashboard"}>
        <a
          href=" #"
          className="d-none d-sm-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </PageHeader>
      {/**<!-- Content Row -->*/}
      <div className="row">
        {/**<!-- Earnings (Monthly) Card Example -->*/}
        <div className="col-xl-3 col-md-6 mb-4">
          <SmallCard
            title="Earnings (Monthly)"
            icon="fas fa-calendar fa-2x"
            value="$40,000"
            colorTheme="primary"
          />
        </div>

        {/**<!-- Earnings (Annual) Card Example -->*/}
        <div className="col-xl-3 col-md-6 mb-4">
          <SmallCard
            title="Earnings (Annual)"
            icon="fas fa-dollar-sign fa-2x"
            value="$215,000"
            colorTheme="success"
          ></SmallCard>
        </div>

        {/**<!-- Task Card Example -->*/}
        <div className="col-xl-3 col-md-6 mb-4">
          <SmallCard
            title="Task"
            icon="fas fa-clipboard-list fa-2x"
            value="50%"
            colorTheme="info"
          >
            <div className="col">
              <div className="progress progress-sm mr-2">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </SmallCard>
        </div>
      
        {/**<!-- Pending Requests Card Example -->*/}
        <div className="col-xl-3 col-md-6 mb-4">
          <SmallCard
            title="Pending Requests"
            icon="fas fa-comments fa-2x"
            value="18"
            colorTheme="warning"
          ></SmallCard>
        </div>
      </div>

      {/**<!-- Content Row Area Chart -->*/}
      <div className="row">
        {/** <!-- Area Chart -->*/}
        <div className="col-xl-8 col-lg-7">
          <Card
            title="Revenues"
            dropDownTitle="Dropdown List"
            dropDownItems={[
              { id: 1, name: "Action", url: "#" },
              { id: 2, name: "Another Action", url: "#" },
              //empty name for divider
              { id: 3, name: "" },
              { id: 4, name: "Something else here" },
            ]}
            colorTheme="primary"
          >
            <div className="chart-area">
              <Line
                data={barData}
                options={barOptions}
              />
            </div>
          </Card>
        </div>

        {/**<!-- Pie Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <Card
            title="Revenues"
            dropDownTitle="Dropdown List"
            dropDownItems={[
              { id: 1, name: "Action", url: "#" },
              { id: 2, name: "Another Action", url: "#" },
              //empty name for divider
              { id: 3, name: "" },
              { id: 4, name: "Something else here" },
            ]}
            colorTheme="primary"
          >
            {/**Chart itself */}
            <div className="chart-pie pt-4 pb-2">
              <Doughnut
                width={100}
                height={100}
                data={pieData}
                options={pieOptions}
              />
            </div>
            {/**Legends */}
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
          </Card>
        </div>
      </div>
    
      {/**<!-- Content Row -->*/}
          <div class="row">

            {/**<!-- Content Column -->*/}
            <div class="col-lg-6 mb-4">

              {/**<!-- Project Card Example -->*/}
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div class="card-body">
                  <h4 class="small font-weight-bold">Server Migration <span class="float-right">20%</span></h4>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 class="small font-weight-bold">Sales Tracking <span class="float-right">40%</span></h4>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-warning" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 class="small font-weight-bold">Customer Database <span class="float-right">60%</span></h4>
                  <div class="progress mb-4">
                    <div class="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 class="small font-weight-bold">Payout Details <span class="float-right">80%</span></h4>
                  <div class="progress mb-4">
                    <div class="progress-bar bg-info" role="progressbar" style={{width: "100%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <h4 class="small font-weight-bold">Account Setup <span class="float-right">Complete!</span></h4>
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>

              {/**<!-- Color System -->*/}
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <div class="card bg-primary text-white shadow">
                    <div class="card-body">
                      Primary
                      <div class="text-white-50 small">#4e73df</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-success text-white shadow">
                    <div class="card-body">
                      Success
                      <div class="text-white-50 small">#1cc88a</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-info text-white shadow">
                    <div class="card-body">
                      Info
                      <div class="text-white-50 small">#36b9cc</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-warning text-white shadow">
                    <div class="card-body">
                      Warning
                      <div class="text-white-50 small">#f6c23e</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-danger text-white shadow">
                    <div class="card-body">
                      Danger
                      <div class="text-white-50 small">#e74a3b</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-secondary text-white shadow">
                    <div class="card-body">
                      Secondary
                      <div class="text-white-50 small">#858796</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="col-lg-6 mb-4">

              {/**<!-- Illustrations -->*/}
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                </div>
                <div class="card-body">
                  <div class="text-center">
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="img/undraw_posting_photo.svg" alt="" />
                  </div>
                  <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                  <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw &rarr;</a>
                </div>
              </div>

              {/**<!-- Approach -->*/}
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                </div>
                <div class="card-body">
                  <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                  <p class="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                </div>
              </div>

            </div>
          </div>

    </div>
  );
};

export default DashboardContent;