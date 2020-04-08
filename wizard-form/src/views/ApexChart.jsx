import React from "react";
import Chart from "react-apexcharts";
import LineChart1 from "./lineChart1";
import LineChart2 from "./lineChart2";
import LineChart3 from "./lineChart3";
import AreaChart1 from "./areaChart1";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [20, 30, 25, 70, 44, 68, 80, 99]
        }
      ]
    }
  }

  render() {
    return (
      <div style={{marginRight: '20', marginLeft: '20'}}>
        <div className="row">
          <div className="col">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="400"
            />
          </div>
          <div className="col">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="400"
            />
          </div>
          <div className="col">
            <Chart options={this.state.options} series={[24, 32, 51, 23, 11]} type="donut" width="400" />
          </div>
          <div className="mixed-chart">

          </div>
        </div>

        <div className="row">
          <div className="col">
            <LineChart1 />
          </div>
          <div className="col">
            <LineChart2 />
          </div>
          <div className="col">
            <LineChart3 />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <AreaChart1 />
          </div>
          <div className="col">
            {/* <LineChart2 /> */}
          </div>
          <div className="col">
            {/* <LineChart3 /> */}
          </div>
        </div>

      </div>
    );
  }
}

export default ApexChart;