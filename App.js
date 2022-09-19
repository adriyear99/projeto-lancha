// Utilidades
import { StatusBar } from 'expo-status-bar'
import { StyleSheet,View,Text } from 'react-native'

// Navegação entre telas
import { useRoute,NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Páginas
import Login from './src/pages/Login'
import Cadastro from './src/pages/Cadastro'
import CadastroLogin from './src/pages/CadastroLogin'
import PessoaEmpresa from './src/pages/PessoaEmpresa'
import Home from './src/pages/Home'


export default function App() {

  // Navegador de páginas
  const Stack = createNativeStackNavigator()

  // Renderização dos componentes
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela Inicial">
        <Stack.Screen name="Tela Inicial" component={CadastroLogin} options={{headerShown: false}}/>
        <Stack.Screen name="Pessoa ou Empresa" component={PessoaEmpresa}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}