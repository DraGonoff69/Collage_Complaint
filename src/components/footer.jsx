import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} College Complaint Web App</p>
        <p>Address: 123 College St, City, State ZIP</p>
        <p>Email: info@example.com</p>
      </div>
    </footer>
  );
}

export default Footer;
