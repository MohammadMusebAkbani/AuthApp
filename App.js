import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {

  const Stack = createNativeStackNavigator() ;


  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='HOME' component={HomeScreen}/>
      <Stack.Screen name='LOGIN' component={LoginScreen}/>
    </Stack.Navigator>

   </NavigationContainer>
  );
}

