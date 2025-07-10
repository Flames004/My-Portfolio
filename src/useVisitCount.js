import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useVisitCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'visits'));
        setCount(snapshot.size);
      } catch (err) {
        console.error('Error fetching visit count:', err);
      }
    };

    fetchCount();
  }, []);

  return count;
};
