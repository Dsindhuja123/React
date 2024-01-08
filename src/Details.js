import React from 'react';
 
const LeaveRequestDetails = ({ model }) => {
  return (
    <div>
      <h1>Details</h1>
      <div>
        <h4>LeaveRequest</h4>
        <hr />
        <dl className="row">
          <dt className="col-sm-2">Start Date</dt>
          <dd className="col-sm-10">{model.startDate}</dd>
          
          <dt className="col-sm-2">End Date</dt>
          <dd className="col-sm-10">{model.endDate}</dd>
          
          <dt className="col-sm-2">Leave Type ID</dt>
          <dd className="col-sm-10">{model.leaveTypeId}</dd>
          
          {/* Repeat similar blocks for other properties */}
        </dl>
      </div>
      <div></div>
      <a href="/Layout">Back to List</a>
      </div>
  );
};
 
export default LeaveRequestDetails;