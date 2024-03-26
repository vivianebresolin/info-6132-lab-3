import { View, FlatList } from 'react-native';
import { transactionsData } from '../../data/mockData';
import styles from "./styles";
import ListItem from '../../components/ListItem';

export default function TransactionsList({ navigation }) {
  const renderItem = ({ item }) => (
    <ListItem listItem={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}