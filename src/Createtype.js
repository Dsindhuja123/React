import React from 'react';
 
const CreateLeaveTypeForm = () => {
  return (
    <div>
      <h1>Create Leave Type</h1>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <form action="Create">
            <div className="text-danger"></div>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" className="form-control" />
              <span className="text-danger"></span>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="DefaultDays">Default Days</label>
              <input type="text" id="DefaultDays" className="form-control" />
              <span className="text-danger"></span>
            </div>
            <br />
            <div className="form-group">
              <a href="Index" className="btn btn-dark">
                Back to List
              </a>
              &nbsp;
              <input type="submit" value="Create" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};
 
export default CreateLeaveTypeForm;