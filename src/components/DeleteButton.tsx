import { projectStorage, projectFirestore } from '../firebase';
import { ref, deleteObject } from 'firebase/storage';
import { doc, deleteDoc } from 'firebase/firestore';

const handleDelete = (document: any) => {
  const deleteRef = ref(projectStorage, document.url);
  deleteObject(deleteRef)
    .then(() => {
      deleteDoc(doc(projectFirestore, 'images', document.id)).then(() =>
        console.log('successfully deleted'),
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

const DeleteButton = (document: any) => {
  return <button onClick={() => handleDelete(document)}>Delete</button>;
};

export default DeleteButton;
