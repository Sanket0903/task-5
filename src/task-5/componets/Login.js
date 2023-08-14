import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [storedData, setStoredData] = useState([]);

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in the fields.');
      return;
    }

    const loggedInUser = storedData.find(
      (entry) => entry.username === username && entry.password === password
    );

    if (loggedInUser) {
      const userRole = loggedInUser.role; 
      const name = loggedInUser.firstname;
      console.log(name)
      if (userRole === 'HOD') {
        console.log('Login successful as HOD!');
        localStorage.setItem('loggedInUser', JSON.stringify({ firstname: name, username: username, role: 'HOD' }));
        navigate('/dashboard/hod');
      } else if (userRole === 'staff') {
        console.log('Login successful as staff!');
        localStorage.setItem('loggedInUser', JSON.stringify({ firstname: name, username: username, role: 'staff' }));
        navigate('/dashboard/staff');
      }
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('registrationData')) || [];
    setStoredData(storedData);
  }, []);

  return (
    <div className='container template bg-success'>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-md-5'>
          <div className='card p-4'>
            <h1 className='card-title text-center mb-4'>Login</h1>
            <form onSubmit={submitForm}>
              <div className='mb-3'>
                <label htmlFor='username' className='form-label'>Username</label>
                <input
                  type='text'
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder='Enter username'
                  className='form-control'
                  id='username'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input
                  type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder='Enter password'
                  className='form-control'
                  id='password'
                />
              </div>

              <div className='d-grid'>
                <button className='btn btn-primary' type='submit'>Login</button>
              </div>
            </form>
            <p className='text-center mt-3'>
              Not Registered Yet? <Link to='/Registration'>Registration</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
