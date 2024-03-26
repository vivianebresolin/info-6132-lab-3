import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Transactions from './src/screens/Transactions';
import Summary from './src/screens/Summary';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Transactions"
          component={Transactions}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => {
              return (
                <FontAwesome5 name="exchange-alt" size={24} color={color} />
              );
            }
          }}
        />
        <Tab.Screen
          name="Summary"
          component={Summary}
          options={{
            tabBarIcon: ({ color }) => {
              return (
                <FontAwesome5 name="file-alt" size={24} color={color} />
              );
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
