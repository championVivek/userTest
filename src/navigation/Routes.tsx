import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddUserScreen from '../screens/AddUsers/AddUserScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import UsersScreen from '../screens/UsersScreen';

export type RootStackParams = {
  home: any;
  users: any;
  addUser: any;
}

const Stack = createStackNavigator<RootStackParams>();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'home'} screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'white'
        },
      }}>
        <Stack.Screen name="home" options={{ title: 'Home' }} component={HomeScreen} />
        <Stack.Screen name="users" options={{ title: 'All User' }} component={UsersScreen} />
        <Stack.Screen name="addUser" options={{ title: 'Add Users' }} component={AddUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack