import { Text, View } from "react-native";
import styles from "./styles";

export default function Summary() {
  const transactionsData = [
    { id: 1, name: 'Transaction 1', amount: 100 },
    { id: 2, name: 'Transaction 2', amount: 150 },
    { id: 3, name: 'Transaction 3', amount: 200 },
  ];

  const totalTransactions = transactionsData.length;
  const totalAmount = transactionsData.reduce((acc, curr) => acc + curr.amount, 0);
  const highestTransaction = transactionsData.reduce((prev, curr) => (prev.amount > curr.amount ? prev : curr));
  const lowestTransaction = transactionsData.reduce((prev, curr) => (prev.amount < curr.amount ? prev : curr));

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 16 }}>Transactions: {totalTransactions}</Text>
      <Text style={{ fontSize: 16 }}>Balance: ${totalAmount}</Text>
      <Text style={{ fontSize: 16 }}>High Spending: {highestTransaction.name} (${highestTransaction.amount})</Text>
      <Text style={{ fontSize: 16 }}>Low Spending: {lowestTransaction.name} (${lowestTransaction.amount})</Text>
    </View>
  );
}