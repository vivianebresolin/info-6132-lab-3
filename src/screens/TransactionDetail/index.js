import { View, Text } from 'react-native';
import styles from "./styles";

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Transaction Detail</Text>
      <Text style={{ fontSize: 16 }}>Name: {transaction.name}</Text>
      <Text style={{ fontSize: 16 }}>Amount: ${transaction.amount}</Text>
      <Text style={{ fontSize: 16 }}>Date: {transaction.date}</Text>
    </View>
  );
}