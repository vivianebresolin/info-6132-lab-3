import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import * as db from '../../database/index';
import { formatDateString, parseStringToFloat } from '../../utils/utils';
import { useTransactions } from '../../context/transactionsContext';
import styles from "./styles";

const { format: formatCurrency } = Intl.NumberFormat('en-CA', {
  currency: 'CAD',
  style: 'currency',
});

function useAmountInput() {
  const [amount, setAmount] = useState('');
  function handleChange(value) {
    const decimal = Number(value.replace(/\D/g, '')) / 100;
    setAmount(formatCurrency(decimal || 0).replace('$\xa0', ''));  // '$\xa0' is used as a string to represent the currency symbol for the Canadian Dollar with a non-breaking space between the symbol and the amount
  }
  return [amount, handleChange];
}

export default function AddNewTransaction() {
  const [amount, setAmount] = useAmountInput();
  const { addTransactionToTheList } = useTransactions();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [previousDate, setPreviousDate] = useState(selectedDate);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isSavingTransaction, setIsSavingTransaction] = useState(false);
  const isAndroid = Platform.OS === 'android';

  const handleAddExpense = async () => {
    if (!amount || !name || !selectedDate || !location) {
      Alert.alert('Add transaction', 'All fields are required.');
      return;
    }

    if (parseStringToFloat(amount) == 0.00) {
      Alert.alert('Add transaction', 'Amount cannot be zero.');
      return;
    }

    setIsSavingTransaction(true);

    await db.addTransaction(name, amount, selectedDate, location)
      .then((result) => {
        addTransactionToTheList(result);
        setAmount('');
        setName('');
        setLocation('');
        setSelectedDate(new Date());
        setPreviousDate(new Date());
        setIsSavingTransaction(false)

        Alert.alert('Add transaction', 'Transaction added successfully!', [
          {
            text: 'Go to Transactions',
            onPress: () => navigation.navigate('Transactions')
          },
          {
            text: 'Add other transaction',
          }
        ]);
      })
      .catch(error => {
        setIsSavingTransaction(false);
        Alert.alert('Error', `Error trying to add new transaction: ${error}`)
      })
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  };

  const iosCancel = () => {
    toggleDatePicker();
    if (previousDate !== selectedDate) {
      setSelectedDate(previousDate)
    }
  }

  const iosConfirm = () => {
    toggleDatePicker();
    setPreviousDate(selectedDate)
  };

  const handleDateChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      setSelectedDate(selectedDate);

      if (isAndroid) toggleDatePicker();
    } else {
      toggleDatePicker();
    }
  };


  if (isSavingTransaction) {
    return (
      <View style={styles.containerSavingExpense}>
        <ActivityIndicator size="large" />
        <Text style={styles.txtSavingExpense}>Saving new transaction...</Text>
      </View>
    );
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Name*:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name for the transaction"
        value={name}
        onChangeText={(text) => setName(text)}
        maxLength={35}
      />

      <Text style={styles.label}>Amount*:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Enter amount"
        value={amount}
        onChangeText={text => setAmount(text)}
        maxLength={17}
      />

      <View>
        <Text style={styles.label}>Date*:</Text>
        {!showDatePicker && (
          <TouchableOpacity onPress={toggleDatePicker}>
            <View style={styles.input}>
              <Text style={styles.dateText}>{formatDateString(selectedDate)}</Text>
            </View>
          </TouchableOpacity>
        )}

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            style={styles.datePicker}
          />
        )}

        {showDatePicker && !isAndroid && (
          <View style={styles.iosDatePickerButtonsContainer}>
            <TouchableOpacity onPress={iosCancel} style={styles.iosButton}>
              <Text style={styles.textCancelButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={iosConfirm} style={styles.iosButton}>
              <Text style={styles.textConfirmButton}>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View>
        <Text style={styles.label}>Location*:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={(text) => setLocation(text)}
          maxLength={35}
        />
      </View>

      <TouchableOpacity onPress={handleAddExpense} style={styles.addExpenseButton}>
        <Text style={styles.textButtonAddExpense}>Add Transaction</Text>
      </TouchableOpacity>

    </View>
  );
};