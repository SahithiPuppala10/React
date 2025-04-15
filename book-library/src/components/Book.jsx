import React from 'react';

function Book({ url, title }) {
  return (
    <div className="Book" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out', // Smooth hover effect
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <img 
          src={url} 
          alt={title} 
          style={{ 
            height: '250px', // Slightly reduced height for better spacing
            borderRadius: '4px',
            objectFit: 'cover' // prevent image distortion
          }} 
        />
        {/* Optional: Add a subtle overlay or border on hover for image */}
      </div>
      
      <h2 style={{ 
        fontSize: '1.2em', 
        fontWeight: '600', 
        textAlign: 'center', 
        margin: '10px 0',
        color: '#333' // Darker text for better readability
      }}>
        {title}
      </h2>
      
      {/* Optional: Add a subtle description or author name */}
      {/* <p style={{ fontSize: '0.9em', color: '#666', textAlign: 'center' }}>Author Name</p> */}
    </div>
  );
}

export default Book;