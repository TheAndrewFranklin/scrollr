import { projectStorage, projectFirestore } from '../firebase';
import { ref, deleteObject } from 'firebase/storage';
import { doc, deleteDoc, DocumentData } from 'firebase/firestore';

const handleDelete = (data: DocumentData) => {
  const deleteRef = ref(projectStorage, data.document.url);

  deleteObject(deleteRef)
    .then(() => {
      deleteDoc(doc(projectFirestore, 'images', data.document.id))
        .then(() => console.log('successfully deleted'))
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

const DeleteButton = (document: DocumentData) => {
  return <button onClick={() => handleDelete(document)}>Delete</button>;
};

export default DeleteButton;
