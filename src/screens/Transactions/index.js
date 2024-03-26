import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionsList from '../../screens/TransactionsList';
import TransactionDetail from '../../screens/TransactionDetail';
import styles from "./styles";

const Stack = createNativeStackNavigator();

export default function Transactions() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transactions List" component={TransactionsList} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetail} options={{ headerTitle: '' }} />
    </Stack.Navigator>
  );
}