import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, Timestamp } from '@firebase/firestore';
import { v4 } from 'uuid';

const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error>();
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    const storageRef = ref(
      projectStorage,
      file.name.replace(/(\.[^/.]+$)/, `-${v4()}$1`),
    );
    const collectionRef = collection(projectFirestore, 'images');

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        addDoc(collectionRef, { url, createdAt: Timestamp.now() });
        setUrl(url);
      },
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
