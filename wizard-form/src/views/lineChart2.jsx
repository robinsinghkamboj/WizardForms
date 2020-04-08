import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                      }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'stepline'
                },
                markers: {
                    hover: {
                        sizeOffset: 8
                    }
                },
            },
            series: [{
                data: [ 21, 43, 32, 54, 34, 13, 63, 23, 46, 62, 44]
            }],
        }
    }

    render() {

        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" width="400" height="350" />
            </div>
        );
    }
}

export default LineChart2