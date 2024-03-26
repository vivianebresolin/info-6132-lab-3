import { TouchableOpacity, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { formatAmount, formatDate } from '../../utils/utils';
import styles from "./styles";

export default function ListItem({ listItem, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Transaction Detail', { transaction: listItem })}
      style={styles.itemContainer}
    >
      <View style={styles.itemView}>
        <View style={styles.viewData}>
          <View style={styles.viewNameAmount}>
            <Text style={styles.name}>{listItem.name}</Text>
            <Text style={styles.amount}>{formatAmount(listItem.amount)}</Text>
          </View>
          <Text style={styles.date}>{formatDate(listItem.date)}</Text>
        </View>
        <FontAwesome name="chevron-right" size={24} color={'#6cb4ae'} />
      </View>
    </TouchableOpacity>
  );
}