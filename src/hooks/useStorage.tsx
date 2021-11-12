import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase';
import { ref, uploadBytesResumable } from 'firebase/storage';

const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(projectStorage);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const percentage =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    });
  }, [file]);
};

export {};
