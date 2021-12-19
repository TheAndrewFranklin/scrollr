import { DocumentData } from 'firebase/firestore';
import useFirestore from '../hooks/useFirestore';
import DeleteButton from './DeleteButton';
import './ImageGrid.css';

const ImageGrid = () => {
  const { docs, loadMore } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs.map((doc: DocumentData) => (
        <div className="img-item" key={'div-' + doc.id}>
          <img src={doc.url} key={'img-' + doc.id} alt="uh-oh" />
          <DeleteButton document={doc} key={'delete-button-' + doc.id}>
            Delete
          </DeleteButton>
        </div>
      ))}
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default ImageGrid;
