import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';
import {
  DocumentData,
  collection as collect,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState<Array<DocumentData>>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collect(projectFirestore, collection),
        orderBy('createdAt', 'desc'),
        limit(3),
      ),
      (snapshot) => {
        const documents: Array<DocumentData> = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      },
    );

    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default useFirestore;
