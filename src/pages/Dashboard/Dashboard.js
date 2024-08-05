import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import db from '../../firebase.config';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';







function Dashboard() {

    const [jobList, setJobList] = useState([
       
    ]);
    const jobRef = collection(db,"JOBLIST"); 
    const audio = new Audio('../../alert.mp3');

    const playAlert = ()=>{
        const audio = document.getElementById('alert');
        audio.play();

      
    }

    const lsitenToFirebase = async ()=>{
        const queryJobs = query(jobRef,where("JOBASSIGNEDTO",'==','US111'));
    
        
       const unsubscribe =  onSnapshot(queryJobs,
        (newJob)=>{
            let jobList=[];
            newJob.forEach((eachJob)=>{
                jobList.push({...eachJob.data(),id:eachJob.id});
            })
            

            setJobList(jobList);
            // audio.play();
           
           
            sendNotification(`NEW JOB CREATED PLEASE CHECK`)
            
           
        });
        return ()=>{
            unsubscribe();
        }
    }

    const sendNotification = (notifcationText ="Thank you for sending notification")=>{

        if(!("Notification" in window)){

                        
            alert("Browser doesnot support notification ")

        }
        else if(Notification.permission==="granted"){

            const notification= new Notification(notifcationText);
        

        }
        else if(Notification.permission !== "denied"){
            Notification.requestPermission().then((permission)=>{

                if(permission==="granted"){
                    const notification= new Notification(notifcationText);

                }

            });
        }

    }

    useEffect( ()=>{
        lsitenToFirebase()
       
    },[]);





    return (
        <>
            <div className='cont'>

                <div className='new job-stat'>

                    <h5>New Tasks</h5>

                    {1}

                </div>
                <div className='assigned job-stat'>
                    <h5>Assigned Tasks</h5>

                    {2}</div>
                <div className='unassigned job-stat'>
                    <h5>Unassigned Tasks</h5>
                    {3} </div>


            </div>

           

            <h2>JOBS NOTIFICATIONS</h2>
            <div className='notfication-list'>

                {jobList.map((eachJOb) => {
                    return (

                        <div key={eachJOb.JOBID} className='notification'>
                            <h5>JOB ID {eachJOb.JOBID}</h5>
                            <h6>JOB DESCiption : {eachJOb.JOBDESC}</h6>
                            <button onClick={()=>{ playAlert()}}>ASSIGN JOB</button>

                        </div>





                    )
                })}
            </div>


        </>

    )
}

export default Dashboard