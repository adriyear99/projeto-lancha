import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Navegação entre telas
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Páginas
import Login from './src/pages/Login'
import CadastroLogin from './src/pages/CadastroLogin'
import Home from './src/pages/Home'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="CadastroLogin">
        <Stack.Screen name="CadastroLogin" component={CadastroLogin}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    // <View style={styles.container}>
    //   <CadastroLogin/>
    //   {/* <Login/> */}
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18
  },
});
