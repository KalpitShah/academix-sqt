import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import ReportItem from "./ReportItem";
import { QuestionContext } from "../../contexts/QuestionContext";

const useStyles = makeStyles({
    container: {
        background: 'white',
        color: 'black',
        maxWidth: '1300px',
        margin: 'auto',
        minHeight: '100%'
    },
    report: {
        background: 'white',
        color: 'black',
        minHeight: '100%',
        paddingBottom: '20px'
    },
    reportHeader: {
        background: 'url(img/header-bg.jpg)',
        backgroundColor:'#2a5298',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover',
        textAlign: 'center',
        minHeight: '350px',
        borderRadius: '0px 0px 50px 50px',
        color: 'white',
        marginBottom: '40px',
        '@media print and (max-width: 768px)': {
            background: 'unset',
            backgroundColor:'#2a5298',
        },
    },
    reportHeaderText: {
        display: 'flex',
        height: '220px',
        alignItems: 'center',
        paddingLeft: '15px',
        paddingRight: '15px',
        justifyContent: 'center',
    },
    reportLogo: {
        padding: '15px',
        paddingLeft: '30px',
        textAlign: 'left',

        '& img': {
            maxWidth: '100%'
        }
    },
    reportBody: {
        paddingLeft: '60px',
        paddingRight: '60px',

        '@media (max-width: 768px)': {
            paddingLeft: '30px',
            paddingRight: '30px',
        },
        '@media (max-width: 480px)': {
            paddingLeft: '15px',
            paddingRight: '15px',
        },
    },
    reportOverallScontainer: {
        padding: '10px 60px',
        display: 'flex',
        boxShadow: '0px 5px 20px 10px rgba(112, 144, 176, 0.15)',
        borderRadius: '20px',
        alignItems: 'center',
        marginBottom: '40px',

        '@media (max-width: 768px)': {
            padding: '20px 30px',
            display: 'block',
            textAlign: 'center',
        },
        '@media (max-width: 480px)': {
            padding: '20px 15px',
            borderRadius: '10px',
        },
        '@media print': {
            pageBreakAfter: 'always',
        },

        '& h4': {
            fontSize: '22px',
            marginBottom: '15px',

            '@media (max-width: 768px)': {
                fontSize: '19px',
            },
            '@media (max-width: 480px)': {
                fontSize: '16px',
            },
        },

        '& h1': {
            fontSize: '70px',
            marginBottom: '0',
            lineHeight: '1',
            color: '#2C5494',

            '@media (max-width: 768px)': {
                fontSize: '55px',
            },
            '@media (max-width: 480px)': {
                fontSize: '40px',
            },
        },
    },
    OverallText: {
        flex: '1',
    },
    OverallGraph: {
        flex: '1',
        textAlign: 'center'
    },
    downloadText: {
        marginTop: '15px',

        '@media (max-width: 768px)': {
            textAlign: 'center'
        },
        
        '@media print': {
            display: 'none'
        },
    },
    skillGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gridGap: '40px',
        marginBottom: '35px',

        '@media (max-width: 768px)': {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
        '@media (max-width: 480px)': {
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },
        '@media print': {
            paddingTop: '15px',
            marginBottom: '0px',
        },
    },
})



const captions = {
    // columns
    problem_solving: 'Problem Solving',
    design_thinking: 'Design Thinking',
    resilience: 'Resilience',
    teamwork: 'Team Work',
    communication: 'Effective Communication'
};

function Report(prop) {
    const { marksObtained, userInfo } = useContext(QuestionContext);

    const classes = useStyles()

    const data = [
        {
            data: {
                problem_solving: marksObtained["Problem Solving"],
                design_thinking: marksObtained["Design Thinking"],
                resilience: marksObtained["Resilience"],
                teamwork: marksObtained["Team Work"],
                communication: marksObtained["Effective Communication"],
            },
            meta: { color: 'blue' }
        }
    ];

    const overall = parseInt((marksObtained["Problem Solving"] + marksObtained["Design Thinking"] + marksObtained["Resilience"] + marksObtained["Team Work"] + marksObtained["Effective Communication"])*20);

    console.log(marksObtained["Problem Solving"])
    console.log(marksObtained["Design Thinking"])
    console.log(marksObtained["Resilience"])
    console.log(marksObtained["Team Work"])
    console.log(marksObtained["Effective Communication"])

    function printReport (){
        window.print();
    }

    return (
        <div className={classes.container}>
            <div className={classes.report}>
                <div className={classes.reportHeader}>
                    <div className={classes.reportLogo}>
                        <img src="img/header-logo.png" alt="" />
                    </div>
                    <div className={classes.reportHeaderText}>
                        <div>
                            <h1>Hey, {userInfo.name}!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper mauris eget dolor aliquam </p>
                        </div>
                    </div>
                </div>
                <div className={classes.reportBody}>
                    <div className={classes.reportOverallScontainer}>
                        <div className={classes.OverallText}>
                            <div>
                                <h4>Overall Score Obtained</h4>
                                <h1>{overall }%</h1>
                            </div>
                        </div>
                        <div className={classes.OverallGraph}>
                            <RadarChart
                                captions={captions}
                                data={data}
                                size={250}
                            />
                        </div>
                    </div>
                    <div className={classes.skillGrid}>
                        <ReportItem image="img/problem-solving.png" title="Problem Solving" percentage={parseInt(marksObtained["Problem Solving"] * 100)} />

                        <ReportItem image="img/mind.png" title="Design Thinking" percentage={parseInt(marksObtained["Design Thinking"] * 100)} />

                        <ReportItem image="img/teamwork.png" title="Team Work" percentage={parseInt(marksObtained["Resilience"] * 100)} />

                        <ReportItem image="img/willpower.png" title="Resilience" percentage={parseInt(marksObtained["Team Work"] * 100)} />

                        <ReportItem image="img/group.png" title="Effective Communication" percentage={parseInt(marksObtained["Effective Communication"] * 100)} />
                    </div>
                    <div className={classes.downloadText}>
                        <p>Download your assessment report <a href="#" onClick={printReport}>here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report
