import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export const logVisit = async () => {
  try {
    await addDoc(collection(db, 'visits'), {
      timestamp: new Date(),
      browser: navigator.userAgent
    });
  } catch (err) {
    console.error('Error logging visit:', err);
  }
};
