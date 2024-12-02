import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';

import {NavigationContainer} from '@react-navigation/native';
import RootStackParamList from './RouteTypes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          // headerStyle: {backgroundColor: 'tomato'},
          headerShown: false,
        }}>
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
