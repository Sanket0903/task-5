import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FirstContext } from './Context'

function StaffDashboard() {
  const  state = useContext(FirstContext)
  const [data, setData] = useState([])
  useEffect(() => {
    const getDetails = JSON.parse(localStorage.getItem('leavedetails'))
    setData(getDetails || []);
  }, [])
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/leavedetails')
  }; 
  const totalLeave = data.length;
  const totalApprove = data.filter(e => e.LeaveStatus === 'Approved').length;
  const totalReject = data.filter(e => e.LeaveStatus === 'Reject').length;
  const totalPending = data.filter(e => e.LeaveStatus === 'pending').length;
  return (
    <div>
      <div><button onClick={handleClick} type="button" class="btn btn-primary">Apply For Leave</button>
      <div ><h3>Total Leave: {totalLeave}</h3>
      <h3>Total Approve:{totalApprove}</h3>
      <h3>Total Reject:{totalReject}</h3>
      <h3>Total Pending:{totalPending}</h3>
      </div> 
      </div>
      <div style={{border:'1px solid black',}} className='"container text-left'>
        <div className='row '>
        {data && Array.isArray(data) && data.map((e) => {
          return (<div key={state} style={{border:'1px solid black'}} className='col-4 col-sm-4 '>
            <h5> Name : {e.Name}</h5>
            <h5> FromDate : {e.FromDate} </h5>
            <h5> ToDate : {e.ToDate} </h5>
            <h5> Leave Reason : {e.LeaveReason} </h5>
            <h5 style={{marginBottom:'20px'}}> Leave Status : {e.LeaveStatus} </h5>
          </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default StaffDashboard