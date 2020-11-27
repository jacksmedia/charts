import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

class PieChartDemo extends Component {

    render() {
        const data = {
            labels: ['Goths 👩🏿‍🎤','Scenesters 🕺🏾','Hipsters 📼'],
            datasets: [
                {
                    data: [3500, 10000, 8000],
                    backgroundColor: [
                        "blueviolet",
                        "aquamarine",
                        "darkorange"
                    ],
                    hoverBackgroundColor: [
                        "purple",
                        "aqua",
                        "orange"
                    ]
                }]    
            };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Populations in Neo PDX</h1>
                        <p>Major tribes in the city, as surveilled.</p>
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