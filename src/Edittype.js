import React, { useState } from 'react';
const EditLeaveType = () => {
 const [name, setName] = useState('');
 const [defaultDays, setDefaultDays] = useState('');
 const [nameError, setNameError] = useState('');
 const [defaultDaysError, setDefaultDaysError] = useState('');
 const validateName = () => {
   if (!name.trim()) {
     setNameError('Name is required');
   } else {
     setNameError('');
   }
 };
 const validateDefaultDays = () => {
   if (!defaultDays.trim()) {
     setDefaultDaysError('Default Days is required');
   } else if (isNaN(defaultDays)) {
     setDefaultDaysError('Please enter a valid number');
   } else {
     setDefaultDaysError('');
   }
 };
 const handleSubmit = (event) => {
   event.preventDefault();
   validateName();
   validateDefaultDays();
   if (!nameError && !defaultDaysError && name && defaultDays) {
     alert('Form submitted successfully!');
   
   }
 };
 return (
    <div className='m-4'>
    <h1>Edit LeaveType</h1>
    <hr />
    <div className='row'>
    <div className='col-md-12'>
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
    <label>Name</label>
    <input
                   type='text'
                   className={`form-control ${nameError ? 'is-invalid' : ''}`}
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   onBlur={validateName}
                 />
                 {nameError && <span className='text-danger'>{nameError}</span>}
    </div>
    <br />
    <div className='form-group'>
    <label>Default Days</label>
    <input
                   type='text'
                   className={`form-control ${defaultDaysError ? 'is-invalid' : ''}`}
                   value={defaultDays}
                   onChange={(e) => setDefaultDays(e.target.value)}
                   onBlur={validateDefaultDays}
                 />
                 {defaultDaysError && <span className='text-danger'>{defaultDaysError}</span>}
    </div>
    <br />
    <div className='form-group'>
    <button className='btn btn-dark' onClick={() => window.location.href = "/Home"}>
                   Back to List
    </button>
    &nbsp;
    <input type='submit' value='Save Changes' className='btn btn-warning' />
    </div>
    </form>
    </div>
    </div>
    </div>
     );
    };
    export default EditLeaveType;