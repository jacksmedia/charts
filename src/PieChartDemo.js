import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

class PieChartDemo extends Component {

// Rmbr-- plz use many emojis! 
// https://github.com/OxCGRT/USA-covid-policy/blob/master/data/OxCGRT_US_latest.csv

    render() {
        const data = {
            labels: ['Oregon 🍩','Florida 🍊','Pennsylvania 🥨', 'California 🍱'],
            datasets: [
                {
                    data: [5, 26, 12, 20],
                    backgroundColor: [
                        "blueviolet",
                        "aqua",
                        "green",
                        "darkorange",
                    ],
                    hoverBackgroundColor: [
                        "violet",
                        "aquamarine",
                        "forestgreen",
                        "orange",
                    ]
                }]    
            };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Cases per 10,000 residents</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="pie" data={data} />
                </div>
            </div>
        )
    }
}

export default PieChartDemo