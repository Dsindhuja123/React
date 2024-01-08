import React, {useState} from "react";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dateJoined, setDateJoined] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState('');
    const [dateJoinedError, setDateJoinedError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    
    const validateFirstName = () => {
      if (!firstName) {
        setFirstNameError('First Name is required');
      } else {
        setFirstNameError('');
      }
    };
    const validateLastName = () => {
      if (!lastName) {
        setLastNameError('Last Name is required');
      } else {
        setLastNameError('');
      }
    };
    const validateDateOfBirth = () => {
      if (!dateOfBirth) {
        setDateOfBirthError('Date of Birth is required');
      } else {
        setDateOfBirthError('');
      }
      
    };
    const validateDateJoined = () => {
      if (!dateJoined) {
        setDateJoinedError('Date Joined is required');
      } else {
        setDateJoinedError('');
      }
      
    };
    const validateEmail = () => {
      if (!email) {
        setEmailError('Email is required');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Invalid email address');
      } else {
        setEmailError('');
      }
    };
    const validatePassword = () => {
      if (!password) {
        setPasswordError('Password is required');
      } else if (password.length < 8) {
        setPasswordError('Password must be at least 8 characters');
      } else if (!/\d/.test(password)) {
        setPasswordError('Password must contain at least one digit');
      } else if (!/[!@#$%^&*]/.test(password)) {
        setPasswordError('Password must contain at least one special character: !@#$%^&*');
      } else {
        setPasswordError('');
      }
    };
    const validateConfirmPassword = () => {
      if (!confirmPassword) {
        setConfirmPasswordError('Please confirm your password');
      } else if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match');
      } else {
        setConfirmPasswordError('');
      }
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      validateFirstName();
      validateLastName();
      validateDateOfBirth();
      validateDateJoined();
      validateEmail();
      validatePassword();
      validateConfirmPassword();
      if (
        !firstNameError &&
        !lastNameError &&
        !dateOfBirthError &&
        !dateJoinedError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError
      ) {
        alert('Form submitted successfully!');
      } else {
      }
    };
    return (
   <div className='m-4'>
   <h1>Register</h1>
   <div className='row'>
   <div className='col-md-12'>
   <form id='registerForm' method='post' onSubmit={handleSubmit}>
   <h2>Create a new account.</h2>
   <hr />
   <div className='form-floating'>
   <input
                  type='text'
                  className={`form-control ${firstNameError ? 'is-invalid' : ''}`}
                  aria-required='true'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={validateFirstName}
                  required
                />
   <label>First Name</label>
                {firstNameError && <div className='invalid-feedback'>{firstNameError}</div>}
   </div>
   <div className='form-floating'>
   <input
                  type='text'
                  className={`form-control ${lastNameError ? 'is-invalid' : ''}`}
                  aria-required='true'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={validateLastName}
                  required
                />
   <label>Last Name</label>
                {lastNameError && <div className='invalid-feedback'>{lastNameError}</div>}
   </div>
   <div className='form-floating'>
   <input
                  type='date'
                  className={`form-control ${dateOfBirthError ? 'is-invalid' : ''}`}
                  aria-required='true'
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  onBlur={validateDateOfBirth}
                  required
                />
   <label>Date of Birth</label>
                {dateOfBirthError && <div className='invalid-feedback'>{dateOfBirthError}</div>}
   </div>
   <div className='form-floating'>
   <input
                
                  type='Date'
                  className={`form-control ${dateJoinedError ? 'is-invalid' : ''}`}
                  aria-required='true'
                  value={dateJoined}
                  onChange={(e) => setDateJoined(e.target.value)}
                  onBlur={validateDateJoined}
                  required
                />
   <label>Date Joined</label>
                {dateJoinedError && <div className='invalid-feedback'>{dateJoinedError}</div>}
   </div>
   <div className='form-floating'>
   <input
                  type='text'
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  autoComplete='username'
                  aria-required='true'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                  required
                />
   <label>Email</label>
                {emailError && <div className='invalid-feedback'>{emailError}</div>}
   </div>
   <div className='form-floating'>
   <input
                  type='password'
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  autoComplete='new-password'
                  aria-required='true'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                  required
                />
   <label>Password</label>
                {passwordError && <div className='invalid-feedback'>{passwordError}</div>}
   </div>
   <div className='form-floating'>
   <input
                  type='password'
                  className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                  autoComplete='new-password'
                  aria-required='true'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={validateConfirmPassword}
                  required
                />
   <label>Confirm Password</label>
                {confirmPasswordError && <div className='invalid-feedback'>{confirmPasswordError}</div>}
   </div>
   <button type='submit' className='w-100 btn btn-lg btn-primary btn-block'>
                Register
   </button>
   </form>
   </div>
   </div>
   </div>
    );
   };
   export default Register;