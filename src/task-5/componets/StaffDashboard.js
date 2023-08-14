import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FirstContext } from './Context'

function StaffDashboard() {
  const state = useContext(FirstContext)
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
  const totalReject = data.filter(e => e.LeaveStatus === 'Rejected').length;

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row mt-5 mb-3'>
              <div className='col-md-9'>
                <h3 style={{ display: 'inline-block', margin: '0 10px', textAlign: 'center' }} className='me-5'>{totalLeave}<p>Total Leaves</p>
                </h3>
                <h3 style={{ display: 'inline-block', margin: '0 10px', textAlign: 'center' }} className='me-5'>{totalApprove}<p>Approved</p>
                </h3>
                <h3 style={{ display: 'inline-block', margin: '0 10px', textAlign: 'center' }}>{totalReject}<p>Rejected</p></h3>

              </div>
              <div className='col-md-3'>
                <button onClick={handleClick} type="button" class="btn btn-primary mt-4 ">+ Apply Leave</button>
              </div>

            </div>
          </div>



          <div className='row'>
            {data && Array.isArray(data) && data.map((e) => {
              return (
                <div key={state} className='card col-md-5 text-left me-5 mt-3'>                  
                <h5 style={{ marginBottom: '15px' }} >Leave for {e.FromDate} to  {e.ToDate}</h5>                  
                <h5>Reason : {e.LeaveReason} </h5>                
                <h5 style={{ marginBottom: '20px' }}>Status : {e.LeaveStatus}</h5>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </>
  )
}

export default StaffDashboard