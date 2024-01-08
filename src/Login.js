import React, { useState } from 'react';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Client-side validation logic
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.password || !/(?=.*[A-Z])(?=.*\d)(?=.*\W)/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one uppercase letter, one digit, and one special character';
    }
    if (Object.keys(newErrors).length === 0) {
      // If no errors, you can proceed with form submission or further processing
      console.log('Form data submitted:', formData);
    } else {
      // If there are errors, update the state to display them
      setErrors(newErrors);
    }
  };
  return (
    <div className="container pt-5">
      <div className="card shadow border">
        <div className="card-header bg-success bg-gradient ml-0 py-4">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="py-2 text-white">Login</h2>
            </div>
          </div>
        </div>
        <div className="card-body p-4">
          <div className="row">
            <div className="col-md-12">
              <section>
                <form onSubmit={handleSubmit}>
                  {/* ...Other form elements */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      aria-required="true"
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <span className="text-danger">{errors.email}</span>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      aria-required="true"
                    />
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <span className="text-danger">{errors.password}</span>
                  </div>
                  <div className="checkbox mb-3">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="form-check-input"
                    />
                    <label className="form-label">Remember Me</label>
                  </div>
                  {/* ...Other form elements */}
                  <div>
                    <button type="submit" className="w-100 btn btn-lg btn-outline-success">
                      Log in
                    </button>
                  </div>
 
                  <div class="d-flex justify-content-between pt-2">
                                <p>
                                    <a href="/Admin">Login as admin</a>
                                </p>
                                <p>
                                    <a href="/Register">Register as a new user</a>
                                </p>
                            </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;