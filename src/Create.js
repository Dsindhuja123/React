import React, { useState } from 'react';
 
const LeaveRequestCreateForm = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [requestComments, setRequestComments] = useState('');
  const [errors, setErrors] = useState({});
 
  const validateForm = () => {
    const newErrors = {};
 
    if (!leaveType) {
      newErrors.leaveType = 'Please select a leave type';
    }
 
    if (!startDate) {
      newErrors.startDate = 'Start date is required';
    }
 
    if (!endDate) {
      newErrors.endDate = 'End date is required';
    }
 
    if (!requestComments) {
      newErrors.requestComments = 'Request comments are required';
    }
 
    setErrors(newErrors);
 
    return Object.keys(newErrors).length === 0;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (validateForm()) {
      // Handle form submission logic here
      console.log('Form submitted:', { leaveType, startDate, endDate, requestComments });
    } else {
      console.log('Form has validation errors. Please correct them.');
    }
  };
 
  return (
    <div>
      <h1>Apply For Leave</h1>
      <hr />
      <div className="row m-4">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="leaveType">Leave Type</label>
              <select
                id="leaveType"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
                className={`form-select ${errors.leaveType ? 'is-invalid' : ''}`}
              >
                <option value="">Select Leave Type</option>
                {/* Map through LeaveTypes if available */}
              </select>
              {errors.leaveType && <div className="invalid-feedback">{errors.leaveType}</div>}
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                  />
                  {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="endDate">End Date</label>
                  <input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
                  />
                  {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="requestComments">Request Comments</label>
              <textarea
                id="requestComments"
                value={requestComments}
                onChange={(e) => setRequestComments(e.target.value)}
                className={`form-control ${errors.requestComments ? 'is-invalid' : ''}`}
              ></textarea>
              {errors.requestComments && (
                <div className="invalid-feedback">{errors.requestComments}</div>
              )}
            </div>
            <div className="form-group p-2">
              <button className="btn btn-dark m-2">Cancel</button>
              <input type="submit" value="Create" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default LeaveRequestCreateForm;