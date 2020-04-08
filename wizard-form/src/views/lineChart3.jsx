import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart3 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'line',
                    shadow: {
                        enabled: false,
                        color: '#bbb',
                        top: 3,
                        left: 2,
                        blur: 3,
                        opacity: 1
                    },
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    width: 7,
                    curve: 'smooth'
                },

                xaxis: {
                    type: 'datetime',
                    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000',
                        '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001',
                        '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'
                    ],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#FDD835'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                markers: {
                    size: 6,
                    opacity: 0.9,
                    colors: ["#FFA41B"],
                    strokeColor: "#fff",
                    strokeWidth: 2,

                    hover: {
                        size: 7,
                    }
                },
                yaxis: {
                    min: -10,
                    max: 40,
                    title: {
                        text: 'Engagement',
                    },
                }
            },
            series: [{
                name: 'Likes',
                data: [6, 2, 13, 5, 29, 19, 12, 4, 16, 2, 11, 6, 14, 8, 15, 1, 8, 5]
            }],
        }
    }

    render() {

        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />
            </div>


        );
    }
}

export default LineChart3