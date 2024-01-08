import React from 'react';
 
const currentYear = new Date().getFullYear();
 
const Footer = () => {
  return (
    <footer className="border-top footer text-muted">
      <div className="container">
        &copy; {currentYear} - LeaveManagement.web - <a href="/privacy">Privacy</a>
      </div>
    </footer>
  );
};
 
export default Footer;