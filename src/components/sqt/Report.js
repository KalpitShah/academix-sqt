import React from 'react'

function Report() {


    return (
        <div className="report">
            <div className="report-header">
                <div className="report-logo">
                    <img src="img/header-logo.png" alt="" />
                </div>
                <div className="report-header-text">
                    <h1>Hey, AIC GUSEC TEAM!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper mauris eget dolor aliquam </p>
                </div>
            </div>
            <div className="report-body">
                <div className="overall-score-container">
                    <div className="overall-text">
                        <h4>Overall Score Obtained</h4>
                        <h1>30%</h1>
                    </div>
                    <div className="overall-graph"></div>
                </div>
                <div className="skill-grid">

                </div>
                <div className="download-text">
                    <p>Download your assessment report <a href="#">here</a></p>
                </div>
            </div>
        </div>
    )
}

export default Report
