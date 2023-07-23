import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, FormLabel, TextField, TextareaAutosize } from '@mui/material';
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
    leaveCount: 0
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
      localStorage.setItem('leavedetails', JSON.stringify([...detail, { ...data, id: uuidv4() }]));
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
    <>
      <form>
        <Box borderRadius="15px" border={"0.25px solid #ccc"} alignItems={"center"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"450px"} margin={"60px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>
          <FormLabel><h5>FromDate</h5>
            <TextField type='date' value={data.FromDate} onChange={handleChange} size='small' sx={{ mb: 2 }} name='FromDate' />
          </FormLabel>
          <FormLabel><h5>ToDate</h5>
            <TextField type='date' value={data.ToDate} onChange={handleChange} size='small' sx={{ mb: 2 }} name='ToDate' />
          </FormLabel>
          <div onChange={handleChange} name='leaveCount' type='number' value={num}>Number of Days: {displayLeave}  </div>
          <FormLabel><h5>Name</h5>
            <TextField type="text" name='Name' value={data.Name} onChange={handleChange} size='small' sx={{ mb: 2 }} />
          </FormLabel>
          <FormLabel>LeaveReason
            <TextareaAutosize type="text" name='LeaveReason' style={{ width: "400px" }} onChange={handleChange} value={data.LeaveReason} minRows={3}></TextareaAutosize>
          </FormLabel>
          <Button onClick={handleSubmit}>Apply Leave</Button>
        </Box>
      </form>
    </>
  )
}

export default Details;
