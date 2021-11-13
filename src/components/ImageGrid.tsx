import useFirestore from '../hooks/useFirestore';
import './ImageGrid.css';

const ImageGrid = () => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs.map((doc) => (
        <img src={doc.url} alt="uh-oh" key={doc.id} />
      ))}
    </div>
  );
};

export default ImageGrid;
