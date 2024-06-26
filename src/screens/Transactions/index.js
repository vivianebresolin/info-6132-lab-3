import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionsList from '../../screens/TransactionsList';
import TransactionDetail from '../../screens/TransactionDetail';

const Stack = createNativeStackNavigator();

export default function Transactions() {

  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }} >
      <Stack.Screen name="Transactions List" component={TransactionsList} />
      <Stack.Screen name="Transaction Detail" component={TransactionDetail} />
    </Stack.Navigator>
  );
}