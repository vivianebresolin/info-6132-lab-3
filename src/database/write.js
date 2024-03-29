import { collection, addDoc } from 'firebase/firestore';
import { formatDateToDB, parseStringToFloat } from '../utils/utils';
import { db } from './config';

export async function addTransaction(name, amount, date, location) {
  const newTransaction = {
    name: name,
    amount: parseStringToFloat(amount),
    date: formatDateToDB(date),
    location: location,
  };

  try {
    const docRef = await addDoc(collection(db, 'transactions'), newTransaction);
    return {
      ...newTransaction,
      id: docRef.id
    };
  } catch (e) {
    return null;
  }
}
