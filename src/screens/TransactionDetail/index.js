import { View, Text } from 'react-native';
import { formatAmount, formatDate } from '../../utils/utils';
import styles from "./styles";

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.viewAmount}>
        <Text style={styles.amount}>{formatAmount(transaction.amount)}</Text>
        <Text style={[styles.fontSize, styles.name]}>{transaction.name}</Text>
        <Text style={styles.fontSize}>{transaction.location}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 15, paddingHorizontal: 10 }}>
        <Text style={styles.fontSize}>Transaction Date:</Text>
        <Text style={[styles.fontSize, styles.date]}>{formatDate(transaction.date)}</Text>
      </View>
    </View>
  );
}