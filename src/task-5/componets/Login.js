import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([null]);
  const [storedData, setStoredData] = useState(null);

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
  
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in the fields.');
      return;
    }

    if (storedData && username === storedData.username && password === storedData.password && storedData.HOD === 'HOD') {
      console.log('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify({ username: username, password: password }));
      navigate('/dashboard/hod');
    } else if(storedData && username === storedData.username && password === storedData.password && storedData.Staff === 'staff'){     
       console.log('Login successful!');
       localStorage.setItem('loggedInUser', JSON.stringify({ username: username, password: password }));
       navigate('/dashboard/staff')

  }else{
      alert('Incorrect username or password. Please try again.');
    }setAllEntry('')
  };
  

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('registrationData'));
    setStoredData(storedData);
    console.log(allEntry);
  }, [allEntry]);

  return (
    <div className='container template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={submitForm} >
          <h1 className='text-center'>Login</h1>
          <div className='mb-2'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder='Enter username'
              className='form-control'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder='Enter password'
              className='form-control'
            />
          </div>
          
          
          <div className='d-grid mb-2'>
            <button className='btn btn btn-primary' >Sign in</button>
          </div>
          <p className='text-end mt-2'>
            Don't have an account? <Link to='/Registration'>Registration</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
