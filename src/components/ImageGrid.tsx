import { DocumentData } from 'firebase/firestore';
import useFirestore from '../hooks/useFirestore';
import DeleteButton from './DeleteButton';
import './ImageGrid.css';

const ImageGrid = () => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs.map((document: DocumentData) => (
        <div className="img-item" key={document.id}>
          <img src={document.url} alt="uh-oh" />
          <DeleteButton document={document}>Delete</DeleteButton>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
