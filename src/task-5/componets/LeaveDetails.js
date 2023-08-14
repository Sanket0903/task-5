import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FirstContext } from './Context';
import { useNavigate } from 'react-router';

function Details() {
  const navigate = useNavigate();
  const state = useContext(FirstContext);
  const Name = state;

  const [data, setData] = useState({
    FromDate: '',
    ToDate: '',
    LeaveReason: '',
    Name: Name,
    LeaveStatus: 'pending',
    leaveCount: 0,
  });

  const days = new Date(data.FromDate);
  const date = new Date(data.ToDate);
  const diff = Math.abs(days - date);
  const num = Number(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  let displayLeave;
  if (num > 0) {
    displayLeave = num;
  } else {
    displayLeave = 0;
  }

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let getData;
    try {
      getData = JSON.parse(localStorage.getItem('leavedetails')) || [];
    } catch (error) {
      getData = null;
    }
    setDetails(getData);
  }, [toggle]);

  const [detail, setDetails] = useState([]);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    setDetails([...detail, data]);
    e.preventDefault();
    if (data.FromDate === '') {
      alert('Please fill the From date');
    } else if (data.ToDate === '') {
      alert('Please fill the To date');
    } else if (data.LeaveReason === '') {
      alert('Please fill the reason');
    } else if (data.Name === '') {
      alert('Please fill the name');
    } else {
      localStorage.setItem(
        'leavedetails',
        JSON.stringify([...detail, { ...data, id: uuidv4() }])
      );
      setToggle(!toggle);
      setData({
        FromDate: '',
        ToDate: '',
        LeaveReason: '',
        Name: Name,
        LeaveStatus: 'pending',
      });
      navigate('/dashboard/staff');
    }
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card p-4 shadow">
              <h1 className="mb-4">Leave Details</h1>
              <div className='row'>
                <div className=" col-md-6 mb-3">
                <label htmlFor="FromDate" className="form-label">
                  <h5>From</h5>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="FromDate"
                  name="FromDate"
                  value={data.FromDate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="ToDate" className="form-label">
                  <h5>To</h5>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="ToDate"
                  name="ToDate"
                  value={data.ToDate}
                  onChange={handleChange}
                />
              </div>
              </div>
              
              <div style={{ display: 'none' }}>
                <input
                  onChange={handleChange}
                  name="leaveCount"
                  type="number"
                  value={num}
                />
                Number of Days: {displayLeave}
              </div>
              <div className="mb-3">
                <label htmlFor="LeaveReason" className="form-label">
                  Reason
                </label>
                <textarea
                  className="form-control"
                  id="LeaveReason"
                  name="LeaveReason"
                  value={data.LeaveReason}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Details;
