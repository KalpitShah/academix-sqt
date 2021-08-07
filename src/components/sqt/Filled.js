import React, { useState, useEffect } from 'react'
import firebase from "./firebase";

function Filled() {
    const db = firebase.firestore();
    const [filledResponse, setFilledResponse]=useState([])
    const [len, setLen]=useState(0)

    var arr = [];

    const fetchResponses=async()=>{
        const response = db.collection("userInput");
        const data=await response.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                
                arr.push(doc.data())
            });
            setFilledResponse(arr)
            setLen(arr.length)
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
    
    useEffect(() => {
        fetchResponses();
    }, []);

    return (
        <div style={{color: 'white', maxWidth: '1200px', margin: 'auto', paddingTop: '30px'}}>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Problem Solving</th>
                    <th>Design Thinking</th>
                    <th>Resilience</th>
                    <th>Team Work</th>
                    <th>Effective Communication</th>
                    <th>Over All</th>
                </tr>
                {
                    filledResponse && filledResponse.map(res=>{
                        return(
                            <tr>
                                <td>{res.name}</td>
                                <td>{res.marks.catMarks["Problem Solving"]}</td>
                                <td>{res.marks.catMarks["Design Thinking"]}</td>
                                <td>{res.marks.catMarks["Resilience"]}</td>
                                <td>{res.marks.catMarks["Team Work"]}</td>
                                <td>{res.marks.catMarks["Effective Communication"]}</td>
                                <td>{res.marks.Total}</td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan="7">Number of Responses: {len}</td>
                </tr>
            </table>
        </div>
    )
}

export default Filled
