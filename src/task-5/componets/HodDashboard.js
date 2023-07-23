import React, { useEffect, useState } from 'react';

function HodDashboard() {
    const [info1, setInfo1] = useState([]);
    const [info2, setInfo2] = useState([]);
    const [info3, setInfo3] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [reject, setReject] = useState(false);

    useEffect(() => {
        const data1 = JSON.parse(localStorage.getItem('leavedetails'));
        const data2 = JSON.parse(localStorage.getItem('user'));
        const data3 = JSON.parse(localStorage.getItem('hoduser'));
        setInfo1(data1);
        setInfo2(data2);
        setInfo3(data3);
    }, [toggle, reject]);

    const handleApprove = (id) => {
        const dataApprove = info1.filter((item) => item.id !== id);
        const infoApprove = info1.find((item) => item.id === id);

        localStorage.setItem('leavedetails', JSON.stringify([...dataApprove, { ...infoApprove, LeaveStatus: 'Approved' }]));
        setToggle(!toggle);
    };
    const handleReject = (id) => {
        const dataReject = info1.filter((item) => item.id !== id);
        const infoReject = info1.find((item) => item.id === id);
    
        localStorage.setItem('leavedetails', JSON.stringify([...dataReject, { ...infoReject, LeaveStatus: 'Reject' }]));

        setReject(!reject);
    };


    return (
        <>
            <div className='container d-flex justify-content-center flex-wrap col-10'>
                {info1 &&
                    info1.map((item) => {
                        if (item.LeaveStatus !== 'Approved') {
                            return (
                                <div
                                    key={item.id}
                                    style={{
                                        border: '1px solid black',
                                        width: '350px',
                                        margin: '100px 20px 30px 0',
                                        padding: '19px 30px 19px 30px',
                                        textAlign: 'center',
                                        borderRadius: '10px',
                                        boxShadow: '10px 10px 20px gray'
                                    }}
                                >
                                    <h5> Name : {item.Name}</h5>
                                    <h5> From Date : {item.FromDate}</h5>
                                    <h5> To Date: {item.ToDate}</h5>
                                    <h5> Leave Reason: {item.LeaveReason}</h5>
                                    <div
                                        style={{
                                            width: '300px',
                                            margin: '20px 0 auto',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            gap: '15px'
                                        }}
                                        className='d-flex'
                                    >
                                        <button
                                            onClick={() => handleApprove(item.id)}
                                            style={{
                                                border: '1px solid red',
                                                width: '90px',
                                                backgroundColor: 'green',
                                                color: 'white',
                                                padding: '7px 5px 10px 5px',
                                                border: 'none',
                                                borderRadius: '7px'
                                            }}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => handleReject(item.id)}

                                            style={{
                                                border: '1px solid red',
                                                width: '90px',
                                                backgroundColor: 'red',
                                                color: 'white',
                                                padding: '7px 5px 10px 5px',
                                                border: 'none',
                                                borderRadius: '7px'
                                            }}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
            </div>
        </>
    );
}

export default HodDashboard;
