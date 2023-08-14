import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration() {
  const [HOD, setHOD] = useState('');

  const [allEntry, setAllEntry] = useState({
    role: '',
    firstname: '',
    lastname: '',
    contact: '',
    department: '',
    username: '',
    password: '',
  });

  const handleRoleChange = (event) => {
    setHOD(event.target.value);
    setAllEntry((prev) => ({ ...prev, role: event.target.value }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAllEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleDepartmentChange = (department) => {
    handleInputChange({ target: { name: 'department', value: department } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      allEntry.username.trim() === '' ||
      allEntry.password.trim() === '' ||
      allEntry.contact.trim() === '' ||
      allEntry.lastname.trim() === '' ||
      allEntry.firstname.trim() === '' ||
      allEntry.department.trim() === '' ||
      allEntry.role.trim() === ''
    ) {
      alert('Please fill all fields.');
    }else{
      const checkData = JSON.parse(localStorage.getItem('registrationData')) || [];
      const exist = checkData.some(
        (entry) => entry.username === allEntry.username || entry.password === allEntry.password
      );
      if(exist){
        alert('Username or password already exists');
      }else {
        const updatedData = [...checkData, allEntry]
      
      localStorage.setItem('registrationData', JSON.stringify(updatedData));

      
      setAllEntry({
        role: '',
        firstname: '',
        lastname: '',
        contact: '',
        department: '',
        username: '',
        password: '',
      });
      setHOD('');
    }}
  };

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100 bg-primary'>
     <div className='row'>
      <div className='col-md-12'>
      <div className='card p-4'>
         <form onSubmit={handleSubmit}>
          <h1 className='text-center'>Registration</h1>
          <div className='row mb-2'>
            <div className='col-md-2 form-check ms-3 me-2'>
              <input
                value='HOD'
                checked={HOD === 'HOD'}
                onChange={handleRoleChange}
                className='form-check-input'
                type='radio'
                name='role'
                id='flexRadioDefault1'
              />
              <label className='form-check-label' htmlFor='flexRadioDefault1'>
                HOD
              </label>
            </div>
            <div className='col-md-2 form-check flex-fill'>
              <input
                value='staff'
                checked={HOD === 'staff'}
                onChange={handleRoleChange}
                className='form-check-input'
                type='radio'
                name='role'
                id='flexRadioDefault2'
              />
              <label className='form-check-label' htmlFor='flexRadioDefault2'>
                Staff
              </label>
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col-md-6 '>
              <label htmlFor='firstname'>First Name</label>
              <input
                value={allEntry.firstname}
                onChange={handleInputChange}
                type='text'
                name='firstname'
                placeholder='Enter First Name'
                className='form-control'
                id='firstname'
              />
            </div>
            <div className='col-md-6 '>
              <label htmlFor='lastname'>Last Name</label>
              <input
                value={allEntry.lastname}
                onChange={handleInputChange}
                type='text'
                name='lastname'
                placeholder='Enter Last Name'
                className='form-control'
                id='lastname'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-2'>
            <label htmlFor='contact'>Contact</label>
            <input
              value={allEntry.contact}
              onChange={handleInputChange}
              type='number'
              name='contact'
              placeholder='Enter contact'
              className='form-control'
              id='contact'
            />
          </div>
          <div className='col-md-6 dropdown mt-4'>
            <button
              className='btn btn-secondary dropdown-toggle'
              value={allEntry.department}
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {allEntry.department || 'Select Department'}
            </button>
            <ul className='dropdown-menu' >
              <li>
                <a className='dropdown-item' href='#' onClick={() => handleDepartmentChange('Electrical')}>
                  Electrical
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#' onClick={() => handleDepartmentChange('Computer')}>
                  Computer
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#' onClick={() => handleDepartmentChange('Civil')}>
                  Civil
                </a>
              </li>
            </ul>
          </div>
          </div>
          
          <div className='mb-2 mt-2'>
            <label htmlFor='username'>Username</label>
            <input
              value={allEntry.username}
              onChange={handleInputChange}
              type='text'
              name='username'
              placeholder='Enter username'
              className='form-control'
              id='username'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              value={allEntry.password}
              onChange={handleInputChange}
              type='password'
              name='password'
              placeholder='Enter password'
              className='form-control'
              id='password'
            />
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn btn-primary mt-2'>
              Sign up
            </button>
          </div>
          <p className='text-end mt-2'>
            Already Registered? <Link to='/' className='ms-2'>Login</Link>
          </p>
        </form>
      </div>
      </div>
     </div>
    </div>
  );
}

export default Registration;
