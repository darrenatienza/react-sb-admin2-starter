import React, { useState, useRef, useEffect } from "react";
import PageHeader from "../parts/PageHeader";
import { UiDropDown, Card, SmallCard } from "../components";
import { Bar,Line,Pie,Doughnut } from "react-chartjs-2";
const DashboardContent = ({ title }) => {
  const [isEarningDropDownVisible, setEarningDropDownVisible] = useState(false);
  const [isRevenueDropdownVisible, setRevenueDropdownVisible] = useState(false);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [90, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  const pieData = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };
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
              { id: 1,name: "Action", url: "#" },
              { id: 2,name: "Another Action", url: "#" },
              //empty name for divider
              { id: 3,name: "" },
              { id: 4,name: "Something else here" },
            ]}
            colorTheme="primary"
          >
            <div className="chart-area">
            <Line data={data} />
            </div>
          </Card>
        </div>

        {/**<!-- Pie Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <Card
            title="Revenues"
            dropDownTitle="Dropdown List"
            dropDownItems={[
              { id: 1,name: "Action", url: "#" },
              { id: 2,name: "Another Action", url: "#" },
              //empty name for divider
              { id: 3,name: "" },
              { id: 4,name: "Something else here" },
            ]}
            colorTheme="primary"
          >
            {/**Chart itself */}
            <div className="chart-pie pt-4 pb-2">
              <Doughnut width={100} height={100}   data={pieData}   options={{cutoutPercentage:80, legend: {display:false}, maintainAspectRatio:false,tooltips: {xPadding:15,yPadding:15}}}/>
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
    </div>
  );
};

export default DashboardContent;
