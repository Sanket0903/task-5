import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Registration() {
  const [HOD, setHOD] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [department, setDepartment] = useState(localStorage.getItem('selectedDepartment') || 'Department');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [allEntry, setAllEntry] = useState({
  //   HOD:'',
  //   firstname:'',
  //   lastname:'',
  //   contact:'',
  //   department:'',
  //   username:'',
  //   password:[],
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      contact.trim() === '' ||
      lastname.trim() === '' ||
      firstname.trim() === ''
    ) {
      alert('Please fill all fields.');
      return;
    }
    const userRole = HOD === '1' ? 'HOD' : 'staff';

    const newEntry = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      department: department,
      role: userRole,
      Staff: HOD === '1' ? '' : 'staff',
      HOD: HOD === '2' ? 'HOD' : '',
    };
    setAllEntry([...allEntry, newEntry]);
   

    if (HOD === '1') {
      localStorage.setItem('registrationData', JSON.stringify({ ...newEntry, HOD: 'HOD', Staff: '' }));
    } else if (HOD === '2') {
      localStorage.setItem('registrationData', JSON.stringify({ ...newEntry, Staff: 'staff', HOD: '' }));
    }
    setUsername('');
    setPassword('');
    setHOD('');
    setFirstName('');
    setLastName('');
    setContact('');
    setDepartment('');
  };

  useEffect(() => {
    console.log(allEntry);
  }, [allEntry]);

  return (
    <div className='container template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white' style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <h1 className='text-center'>Registration</h1>
          <div className='d-flex mb-2'>
            <div className='form-check flex-fill me-2'>
              <input
                value='1'
                checked={HOD === '1'}
                onChange={(e) => setHOD(e.target.value)}
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault1'
              />
              <label className='form-check-label' htmlFor='flexRadioDefault1'>
                HOD
              </label>
            </div>
            <div className='form-check flex-fill ms-2'>
              <input
                value='2'
                checked={HOD === '2'}
                onChange={(e) => setHOD(e.target.value)}
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault2'
              />
              <label className='form-check-label' htmlFor='flexRadioDefault2'>
                Staff
              </label>
            </div>
          </div>

          <div className='d-flex mb-2'>
            <div className='flex-fill me-2'>
              <label htmlFor='firstname'>First Name</label>
              <input
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                placeholder='Enter Name'
                className='form-control'
              />
            </div>
            <div className='flex-fill ms-2'>
              <label htmlFor='lastname'>Last Name</label>
              <input
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                placeholder='Enter Name'
                className='form-control'
              />
            </div>
          </div>
          <div className='mb-2'>
            <label htmlFor='contact'>Contact</label>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type='number'
              placeholder='Enter contact'
              className='form-control'
            />
          </div>
          <div className='dropdown'>
            <button
              className='btn btn-secondary dropdown-toggle'
              value={department}
              onClick={(e) => setDepartment(e.target.value)}
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='true'
            >
              Department
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
              <li>
                <a className='dropdown-item' href='#' onClick={() => setDepartment('Electrical')}>
                  Electrical
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#' onClick={() => setDepartment('Computer')}>
                  Computer
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#' onClick={() => setDepartment('Civil')}>
                  Civil
                </a>
              </li>
            </ul>
          </div>
          <div className='mb-2'>
            <label htmlFor='username'>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type='text'
              placeholder='Enter username'
              className='form-control'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Enter password'
              className='form-control'
            />
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn btn-primary'>
              Sign up
            </button>
          </div>
          <p className='text-end mt-2'>
            Already Registered? <Link to='/' className='ms-2'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
