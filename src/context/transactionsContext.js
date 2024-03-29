import React, { createContext, useContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as db from '../database/index';

const TransactionsContext = createContext();
SplashScreen.preventAutoHideAsync();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);


  const addTransactionToTheList = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const allTransactions = await db.getAllTransactions();
        setTransactions(allTransactions);
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        Alert.alert('Error', 'Failed to fetch data.');
      } finally {
        SplashScreen.hideAsync();
      }
    };

    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={
        {
          transactions,
          setTransactions,
          isDataLoaded,
          addTransactionToTheList
        }
      }
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  return useContext(TransactionsContext);
};