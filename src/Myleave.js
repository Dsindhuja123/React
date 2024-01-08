import React from 'react';
function Myleave(props) {
 const { leaveAllocations, leaveRequests } = props;
 const renderLeaveAllocations = () => {
   return (
<div className="card">
<div className="card-header">
<h2>Leave Allocations</h2>
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">
<div className="row">
<div className="col">Leave Name</div>
<div className="col">Original Allocation</div>
<div className="col">Current Allocation</div>
</div>
</li>
         
            {leaveAllocations && leaveAllocations.map && leaveAllocations.map((allocation, index) => (
<li key={index} className="list-group-item">
<div className="row">
<div className="col">
<h6>{allocation.leaveType.Name}</h6>
</div>
<div className="col">
<button type="button" className="btn btn-primary">
                   Allocated Days{' '}
<span className="badge bg-secondary">
                     {allocation.leaveType.DefaultDays}
</span>
</button>
</div>
<div className="col">
<button type="button" className="btn btn-primary">
                   Remaining Days{' '}
<span className="badge bg-secondary">
                     {allocation.numberOfDays}
</span>
</button>
</div>
</div>
</li>
         ))}
</ul>
</div>
   );
 };
 const renderLeaveRequests = () => {
   return (
<div>
<hr />
<h2>Current Requests</h2>
<table className="table">
<thead>
<tr>
<th>Start Date</th>
<th>End Date</th>
<th>Leave Type</th>
<th>Date Requested</th>
<th>Approved</th>
<th>Cancelled</th>
</tr>
</thead>
<tbody>
           {leaveRequests && leaveRequests.map && leaveRequests.map((request, index) => (
<tr key={index}>
<td>{request.StartDate}</td>
<td>{request.EndDate}</td>
<td>{request.LeaveType.Name}</td>
<td>{request.DateRequested}</td>
<td>
                 {request.Cancelled ? (
<span className="badge bg-secondary">Cancelled</span>
                 ) : request.Approved === null ? (
<span className="badge bg-warning">Pending</span>
                 ) : request.Approved ? (
<span className="badge bg-success">Approved</span>
                 ) : (
<span className="badge bg-danger">Rejected</span>
                 )}
</td>
<td>
                 {request.Approved === null && (
<form>
<input
                       type="hidden"
                       name="requestId"
                       value={request.Id}
                     />
<button
                       type="submit"
                       className="btn btn-danger btn-sm"
>
                       Cancel Request
</button>
</form>
                 )}
</td>
</tr>
           ))}
</tbody>
</table>
</div>
   );
 };
 return (
<div>
     {renderLeaveAllocations()}
     {renderLeaveRequests()}
</div>
 );
}
export default Myleave;