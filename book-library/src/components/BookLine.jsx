import React, { useState } from 'react';

function Book({ book }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleTouch = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className="Book"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer', // Indicate touchable
      }}
      onTouchStart={handleTouch} // Use onTouchStart for better mobile experience
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <img
          src={book.url}
          alt={book.name}
          style={{
            height: '250px',
            borderRadius: '4px',
            objectFit: 'cover',
          }}
        />
      </div>

      <h2 style={{ fontSize: '1.2em', fontWeight: '600', textAlign: 'center', margin: '10px 0', color: '#333' }}>
        {book.name}
      </h2>

      {showDetails && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>Release Year: {book.releaseYear}</p>
          <p>{book.shortStory}</p>
        </div>
      )}
    </div>
  );
}

export default function BookLine() {
  let harryPotterBooks = [
    {
      name: 'Harry Potter and the Philosopher\'s Stone',
      url: 'https://m.media-amazon.com/images/I/51HSkTKlauL._SY344_BO1,204,203,200_.jpg',
      releaseYear: 1997,
      shortStory: 'Harry discovers he\'s a wizard and attends Hogwarts.',
    },
    {
      name: 'Harry Potter and the Chamber of Secrets',
      url: 'https://m.media-amazon.com/images/I/51jRjWvjS9L._SY344_BO1,204,203,200_.jpg',
      releaseYear: 1998,
      shortStory: 'A mysterious chamber opens, threatening Hogwarts students.',
    },
    {
      name: 'Harry Potter and the Prisoner of Azkaban',
      url: 'https://m.media-amazon.com/images/I/51jRjWvjS9L._SY344_BO1,204,203,200_.jpg',
      releaseYear: 1999,
      shortStory: 'A dangerous prisoner escapes Azkaban, seeking Harry.',
    },
    {
      name: 'Harry Potter and the Goblet of Fire',
      url: 'https://m.media-amazon.com/images/I/51jRjWvjS9L._SY344_BO1,204,203,200_.jpg',
      releaseYear: 2000,
      shortStory: 'Harry is unexpectedly entered into the Triwizard Tournament.',
    },
    {
      name: 'Harry Potter and the Order of the Phoenix',
      url: 'https://m.media-amazon.com/images/I/51jRjWvjS9L._SY344_BO1,204,203,200_.jpg',
      releaseYear: 2003,
      shortStory: 'The Ministry of Magic denies Voldemort\'s return, and Harry forms Dumbledore\'s Army.',
    },
    {
      name: 'Harry Potter and the Half-Blood Prince',
      url: 'https://m.media-amazon.com/images/I/51jRjWvjS9L._SY344_BO1,204,203,200_.jpg',
      releaseYear: 2005,
      shortStory: 'Harry discovers secrets about Voldemort\'s past with Dumbledore\'s help.',
    },
    {
      name: 'Harry Potter and the Deathly Hallows',
      url: 'https://m.media-amazon.com/images/I/51jRjWvjS9L._SY344_BO1,204,203,200_.jpg',
      releaseYear: 2007,
      shortStory: 'Harry, Ron, and Hermione search for Horcruxes to defeat Voldemort.',
    },
    {
       name:'Harry Potter and the Cursed Child',
       url:'https://m.media-amazon.com/images/I/51ObKo3jXKL._AC_UF1000,1000_QL80_.jpg',
       releaseYear: 2016,
       shortStory: "Harry's son Albus struggles with his father's legacy and makes a dangerous choice with time-travel."
    }
  ];

  return (
    <div className="BookLine" style={{ display: 'flex', overflowX: 'auto', padding: '20px' }}>
      {harryPotterBooks.map((book) => (
        <Book key={book.name} book={book} />
      ))}
    </div>
  );
}