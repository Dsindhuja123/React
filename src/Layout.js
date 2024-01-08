import React from 'react';
 
function Layout() {
    return (
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
    <div class="container">
        <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Leave Management web - NET 6</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul class="navbar-nav flex-grow-1">
                <li class="nav-item">
                    <a class="nav-link text-white" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="/Create"asp-area="" asp-controller="LeaveRequests" asp-action="Create">Apply For Leave</a>
                </li>
 
                <li class="nav-item">
                    <a class="nav-link text-white" href="/Myleave" asp-area="" asp-controller="LeaveRequests" asp-action="MyLeave">My Leave</a>
                </li>
               
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/Details" asp-area="" asp-controller="Employees" asp-action="Index">Employees</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Leave Management
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/LeavetypeCRUD" asp-controller="LeaveTypes" asp-action="Index">Leave Types</a></li>
                            <li><a class="dropdown-item" href = "/LeaveRequest" asp-controller="LeaveRequests" asp-action="Index">Leave Requests</a></li>
                        </ul>
                    </li>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <li class="nav-item">
                    <a class="nav-link text-white" href ="/Login"asp-area="" asp-controller="LeaveRequests" asp-action="MyLeave">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="/Register"asp-area="" asp-controller="LeaveRequests" asp-action="MyLeave">Register</a>
                </li>
 
                                       
            </ul>
            <partial name="_LoginPartial" />
        </div>
    </div>
</nav>


 
    );
}

export default Layout;