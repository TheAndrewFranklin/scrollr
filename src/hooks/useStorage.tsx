import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error>();
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);

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
        setUrl(url);
      },
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
