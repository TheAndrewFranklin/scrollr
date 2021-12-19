import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';
import {
  DocumentData,
  collection as collect,
  onSnapshot,
  orderBy,
  query,
  limit,
  QueryDocumentSnapshot,
  startAfter,
  getDocs,
} from 'firebase/firestore';

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState<Array<DocumentData>>([]);
  const [count, setCount] = useState<number>(3);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collect(projectFirestore, collection),
        limit(count),
        orderBy('createdAt', 'desc'),
      ),
      (snapshot) => {
        const documents: Array<DocumentData> = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      },
    );

    return unsubscribe;
  }, [collection, count]);

  const loadMore = async () => {
    setCount((prevState) => prevState + 3);
  };

  return { docs, loadMore };
};

export default useFirestore;
