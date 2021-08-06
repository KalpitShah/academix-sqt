import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from "@ramonak/react-progress-bar";

const useStyles = makeStyles({
    skillItem: {
        textAlign: 'center',
        boxShadow: '0px 5px 20px 10px rgba(112, 144, 176, 0.15)',
        borderRadius: '20px',
        padding: '30px 20px',
        
        '& > img': {
            maxHeight: '64px',
            marginBottom: '10px'
        },
    },
    skillLevel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
            marginRight: '10px',
        }
    },
    progressBar: {
        marginTop: "25px",
        marginBottom: "15px",
    }
})

function ReportItem(prop) {

    const classes = useStyles()

    return (
        <div className={classes.skillItem}>
            <img src={prop.image} alt="" />
            <h3>{prop.title}</h3>
            <div className={classes.progressBar}>
                <ProgressBar style={{'-webkit-print-color-adjust': 'exact'}} height={12} labelSize={'0'} completed={prop.percentage} />
                <h3>{prop.percentage}%</h3>
            </div>
            <div className={classes.skillLevel}>
                <img src="img/percentage.png" alt="" />
                {prop.percentage < 40 ? <p>Beginner Level</p> : (prop.percentage < 80 ? <p>Moderate Level</p> : <p>Expert Level</p>)}
            </div>
        </div>
    )
}

export default ReportItem
