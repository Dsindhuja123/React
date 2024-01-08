import React from 'react';
 
const LeaveType = () => {
  return (

<body>

    <div b-67pgir0joi="" class="container">
       
            

<h1>Index</h1>

<p>
    <a class="btn btn-success" href="/LeaveTypes/Create"><i class="fas fa-plus"></i>Create New</a>
</p>
<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select form-select-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_0"></input></label></div></div></div><div class="row dt-row"><div class="col-sm-12"><table class="table dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
    <thead>
        <tr><th class="sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="
                Leave Type Name
            : activate to sort column descending" style={{width: "404.469px;"}}>
                Leave Type Name
            </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                Default Number of Days
            : activate to sort column ascending" style={{width: "536.516px;"}}>
                Default Number of Days
            </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label=": activate to sort column ascending" style={{width: "61.0156px;"}}></th></tr>
    </thead>
    <tbody>
    <tr class="odd"><td valign="top" colspan="3" class="dataTables_empty">No data available in table</td></tr></tbody>
</table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a aria-controls="DataTables_Table_0" aria-disabled="true" aria-role="link" data-dt-idx="next" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
<form id="deleteFrom" action="/LeaveTypes/Delete" method="post">
    <input type="hidden" id="leaveTypeId" name="Id"></input>
<input name="__RequestVerificationToken" type="hidden" value="CfDJ8LikUzR88eBEs_8tOginzUBVmiX4B9u7JdXIS7tS4CpwaxkcIc7viZx43eKTRh3nBgUbU4joPGLCO4j4b5CzfMerjVEXYOHBIyeGgqcYPZKAOLZzV_u_9JvqwxBLS1wtRCQKYOfhdMbCGFPUPERrAa8pruPsanOktiGk467z6RILb6eCD-wNDCRi7iAT2-z7kQ"></input></form>

<form id="allocationForm" action="/LeaveTypes/AllocateLeave" method="post">
    <input type="hidden" id="leaveTypeIdAllocate" name="Id"></input>
<input name="__RequestVerificationToken" type="hidden" value="CfDJ8LikUzR88eBEs_8tOginzUBVmiX4B9u7JdXIS7tS4CpwaxkcIc7viZx43eKTRh3nBgUbU4joPGLCO4j4b5CzfMerjVEXYOHBIyeGgqcYPZKAOLZzV_u_9JvqwxBLS1wtRCQKYOfhdMbCGFPUPERrAa8pruPsanOktiGk467z6RILb6eCD-wNDCRi7iAT2-z7kQ"></input></form>
    </div>

    
</body>

);
    };
    export default LeaveType;