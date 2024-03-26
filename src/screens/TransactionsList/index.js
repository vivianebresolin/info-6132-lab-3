import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from "./styles";

export default function TransactionsList({ navigation }) {
  const transactionsData = [
    { id: 1, name: 'Transaction 1', amount: 100, date: '2024-03-26' },
    { id: 2, name: 'Transaction 2', amount: 150, date: '2024-03-25' },
    { id: 3, name: 'Transaction 3', amount: 200, date: '2024-03-24' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
    >
      <Text style={{ fontSize: 16 }}>{item.name}</Text>
      <Text style={{ fontSize: 14 }}>Amount: ${item.amount}</Text>
      <Text style={{ fontSize: 14 }}>Date: {item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={transactionsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}