import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

class PieChartDemo extends Component {

// Rmbr-- plz use many emojis! 
// https://en.wikipedia.org/wiki/Template:COVID-19_pandemic_data/United_States_medical_cases

    render() {
        const data = {
            labels: [
                'Florida 🍊',
                'Oregon 🍩',
                'Pennsylvania 🥨',
                'Arizona 🌮',
                'Minnesota 🥞'
            ],
            datasets: [
                {
                    data: [7985, 1294, 8843, 12314, 2879],
                    backgroundColor: [
                        "violet",
                        "gold",
                        "forestgreen",
                        "darkorange",
                        "darkslateblue",
                    ],
                    hoverBackgroundColor: [
                        "plum",
                        "beige",
                        "limegreen",
                        "orange",
                        "slateblue",
                    ]
                }]    
            };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>
                            New Cases of COVID
                        </h1>
                        <h2>
                            Logged on December 8th, 2020
                        </h2>
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