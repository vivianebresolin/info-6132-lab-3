import { collection, getDocs } from 'firebase/firestore';
import { db } from './config';

export async function getAllTransactions() {
  const querySnapshot = await getDocs(collection(db, 'transactions'));
  const transactionsList = [];

  querySnapshot.forEach((doc) => {
    transactionsList.push(
      {
        ...doc.data(),
        id: doc.id
      }
    );
  });

  return transactionsList;
}