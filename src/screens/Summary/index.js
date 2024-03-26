import { Text, View } from "react-native";
import { transactionsData } from "../../data/mockData";
import { formatAmount } from '../../utils/utils';
import styles from "./styles";

export default function Summary() {
  const totalTransactions = transactionsData.length;
  const totalAmount = transactionsData.reduce((acc, curr) => acc + curr.amount, 0);
  const highestTransaction = transactionsData.reduce((prev, curr) => (prev.amount > curr.amount ? prev : curr));
  const lowestTransaction = transactionsData.reduce((prev, curr) => (prev.amount < curr.amount ? prev : curr));

  return (
    <View style={styles.container}>
      <View style={styles.summaryItem}>
        <Text style={styles.fontSize}>Transactions:</Text>
        <Text style={styles.value}>{totalTransactions}</Text>
      </View>

      <View style={styles.summaryItem}>
        <Text style={styles.fontSize}>Balance:</Text>
        <Text style={styles.value}>{formatAmount(totalAmount)}</Text>
      </View>

      <View style={[styles.summaryItem, styles.itemsWithLabelInBold]}>
        <Text style={styles.labelInBold}>High Spending:</Text>
        <View style={styles.itemSecondLine}>
          <Text style={styles.fontSize}>{highestTransaction.name}</Text>
          <Text style={styles.value}>{formatAmount(highestTransaction.amount)}</Text>
        </View>
      </View>

      <View style={[styles.summaryItem, styles.itemsWithLabelInBold]}>
        <Text style={styles.labelInBold}>Low Spending:</Text>
        <View style={styles.itemSecondLine}>
          <Text style={styles.fontSize}>{lowestTransaction.name}</Text>
          <Text style={styles.value}>{formatAmount(lowestTransaction.amount)}</Text>
        </View>
      </View>
    </View>
  );
}