import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
  const { docs } = useFirestore('images');

  return (
    <div
      className="img-grid"
      style={{
        display: 'grid',
        gap: '1em',
        gridAutoFlow: 'column',
        gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
        alignItems: 'stretch',
        justifyItems: 'stretch',
      }}
    >
      {docs.map((doc) => (
        <img
          src={doc.url}
          alt="uh-oh"
          key={doc.id}
          style={{
            maxHeight: '250px',
            maxWidth: '250px',
          }}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
