import React, { useEffect, useState } from 'react';

function HodDashboard() {
    const [leaveDetails, setLeaveDetails] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [reject, setReject] = useState(false);

    useEffect(() => {
        const storedLeaveDetails = JSON.parse(localStorage.getItem('leavedetails'));
        setLeaveDetails(storedLeaveDetails || []);
    }, [toggle, reject]);

    const handleApprove = (id) => {
        const updatedDetails = leaveDetails.map((item) =>
            item.id === id ? { ...item, LeaveStatus: 'Approved' } : item
        );
        localStorage.setItem('leavedetails', JSON.stringify(updatedDetails));
        setToggle(!toggle);
    };

    const handleReject = (id) => {
        const updatedDetails = leaveDetails.map((item) =>
            item.id === id ? { ...item, LeaveStatus: 'Rejected' } : item
        );
        localStorage.setItem('leavedetails', JSON.stringify(updatedDetails));
        setReject(!reject);
    };

    return (
        <div className='container mt-5'>
            <div className='row'>
                {leaveDetails.map((item) => (
                    <div key={item.id} className='col-md-6 mb-4'>
                        <div className='card'>
                            <div className='card-body'>
                                {/* <h5 className='card-title'>Name: {item.Name}</h5> */}
                                <p className='card-text'>From Date: {item.FromDate}</p>
                                <p className='card-text'>To Date: {item.ToDate}</p>
                                <p className='card-text'>Leave Reason: {item.LeaveReason}</p>
                                {item.LeaveStatus !== 'Approved' && item.LeaveStatus !== 'Rejected' && (
                                    <div className=' row '>
                                        <div className='col-md-3 me-2 mt-2'><button
                                            onClick={() => handleApprove(item.id)}
                                            className='btn btn-success'
                                        >
                                            Approve
                                        </button>
                                        </div>
                                        <div className='col-md-4 mt-2'>
                                        <button
                                            onClick={() => handleReject(item.id)}
                                            className='btn btn-danger'
                                        >
                                            Reject
                                        </button>    
                                        </div>
                                        
                                    </div>
                                )}
                                {item.LeaveStatus === 'Approved' && (
                                    <p className='text-success'>Leave Approved</p>
                                )}
                                {item.LeaveStatus === 'Rejected' && (
                                    <p className='text-danger'>Leave Rejected</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HodDashboard;
