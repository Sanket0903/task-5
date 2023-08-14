import React, { useContext, useEffect, useState } from 'react'
import { FirstContext } from './Context'
import { useNavigate } from 'react-router';

function EmpDashboard() {

    const {state}=useContext(FirstContext)
    const {index}=state
    console.log(index);

    const [first, setfirst] = useState([])
    useEffect(() => {
      const getDetails=JSON.parse(localStorage.getItem('leavedetails'))
      setfirst(getDetails)
    }, [])

    const navigate=useNavigate()

    // const handleClick = () => {
    //   navigate('/leavedetails')
    // }; 
    const totalLeave = first.length;
    const totalApprove = first.filter(e => e.leaveStatus === 'Approved').length;
    const totalReject = first.filter(e => e.leaveStatus === 'Reject').length;
    const totalPending = first.filter(e => e.leaveStatus === 'pending').length;
  

  return (
    <>
        <div style={{border:'1px slid red',width:'160px',margin:'60px auto'}}>
            <button onClick={()=>navigate('/leavedetails')} style={{width:'160px',margin:'0 auto',padding:'11px 7px',backgroundColor:'blue',color:'white',border:'none',borderRadius:'10px',fontSize:'20px'}}>Apply Leave</button>
        <div><h3>Total Leave: {totalLeave}</h3>
          <h3>Total Approve:{totalApprove}</h3>
          <h3>Total Reject:{totalReject}</h3>
          <h3>Total Pending:{totalPending}</h3>
        </div> </div>

        




        <div className='container d-flex justify-content-center flex-wrap col-10' style={{paddingBottom:'10px',marginTop:'50px'}} >

          {first && first.map((e)=>{
            return  (
            <div style={{border:'1px solid black',width:'350px',margin:'40px 20px 30px 0',padding:'25px 19px 19px 10px',textAlign:'center',borderRadius:'10px', boxShadow: "10px 10px 20px gray"}} >
              <h5> empName :{index}</h5>
              <h5> Fromdate :{e.Fromdate}</h5>
              <h5> ToDate :{e.ToDate}</h5>
              <h5> Leave Reason :{e.LeaveReason}</h5>
              <h5> leaveStatus:{e.leaveStatus}</h5>
            </div>
             
            )
          })}
        </div>
    </>
  )
}

export default EmpDashboard