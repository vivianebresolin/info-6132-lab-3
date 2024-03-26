import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { transactionsData } from '../../data/mockData';
import styles from "./styles";

export default function TransactionsList({ navigation }) {
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