import React from 'react';
const Leavereq = () => {
    return (
<body className='m-4'>        
<h1>Admin Leave Requests View</h1>
 
<div class="row">
    <div class="col-3">
        <div class="card">
            <div class="card-body text-center">
                <h1 class="card-title text-primary">0</h1>
                <p class="card-text">Total Number Of Requests</p>
            </div>  
        </div>
    </div>
    <div class="col-3">
        <div class="card">
            <div class="card-body text-center">
                <h1 class="card-title text-success">0</h1>
                <p class="card-text">Approved Requests</p>
            </div>
        </div>
    </div>
    <div class="col-3">
        <div class="card">
            <div class="card-body text-center">
                <h1 class="card-title text-warning">0</h1>
                <p class="card-text">Pending Requests</p>
            </div>
        </div>
    </div>
    <div class="col-3">
        <div class="card">
            <div class="card-body text-center">
                <h1 class="card-title text-danger">0</h1>
                <p class="card-text">Rejected Requests</p>
            </div>
        </div>
    </div>
    <h1>Leave Request Log</h1>
</div>
<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select form-select-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_0"></input></label></div></div></div><div class="row dt-row"><div class="col-sm-12"><table class="table dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
    <thead>
        <tr><th class="sorting sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="
                Employee Name
            : activate to sort column descending" style={{width: "189.578px;"}}>
                Employee Name
            </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                Start Date
            : activate to sort column ascending" style={{width: "123.625px;"}}>
                Start Date
            </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                End Date
            : activate to sort column ascending" style={{width: "111.656px;"}}>
                End Date
            </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                Leave Type
            : activate to sort column ascending" style={{width: "133.312px;"}}>
                Leave Type
            </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                Date Requested
            : activate to sort column ascending" style={{width: "184.109px;"}}>
                Date Requested
            </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                Approved
            : activate to sort column ascending" style={{width: "120.984px;"}}>
                Approved
            </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label=": activate to sort column ascending" style={{width: "14.7344px;"}}></th></tr>
    </thead>
    <tbody>
    <tr class="odd"><td valign="top" colspan="7" class="dataTables_empty">No data available in table</td></tr></tbody>
</table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" class="page-link">Previous</a></li><li class="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="next" tabindex="-1" class="page-link">Next</a></li></ul></div></div></div></div>    
</body>
 
);
};
export default Leavereq;