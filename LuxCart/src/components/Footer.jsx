import React from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-3 mt-3" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <p className="mb-1" style={{ color: '#61099a',fontWeight:'bold' }}>&copy; {currentYear} CartGenius</p>
        <p className="mb-0 text-dark" style={{fontSize:'15px', fontWeight:'10px'}}>Contact: +91 6379991294</p>
      </div>
    </footer>
  )
}

export default Footer;