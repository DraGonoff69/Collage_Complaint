import React from 'react';

function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-blue-950 text-white py-16 mt-8">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} College Complaint Web App</p>
        <p>Indian Institute of Information Technology Una, Saloh, Himachal Pradesh</p>
      </div>
    </footer>
  );
}

export default Footer;
