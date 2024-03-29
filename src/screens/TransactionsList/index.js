import { View, FlatList } from 'react-native';
import styles from "./styles";
import ListItem from '../../components/ListItem';
import { useTransactions } from '../../context/transactionsContext';

export default function TransactionsList({ navigation }) {
  const { transactions } = useTransactions();

  const renderItem = ({ item }) => (
    <ListItem listItem={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}