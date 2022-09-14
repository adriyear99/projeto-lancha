// Utilidades
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Text } from 'react-native';

// Navegação entre telas
import { useRoute,NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Páginas
import Login from './src/pages/Login'
import Cadastro from './src/pages/Cadastro'
import CadastroLogin from './src/pages/CadastroLogin'
import Home from './src/pages/Home'


export default function App() {

  // Navegador de páginas
  const Stack = createNativeStackNavigator()
  // const navigationRef = useNavigationContainerRef();
  // console.log("Teste:",navigationRef)
  // const routeNameRef = useRef();
  // console.log(navigationRef.getCurrentRoute().name)
  // console.log(routeNameRef)

  // const { navigate } = this.props.navigation
  // console.log(navigate)

  // const route = useRoute()


  // Renderização dos componentes
  return (
    <NavigationContainer>
      {/* screenOptions={{ headerShown: (route.name != "Tela Inicial") }} */}
      <Stack.Navigator initialRouteName="Tela Inicial">
        <Stack.Screen name="Tela Inicial" component={CadastroLogin}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}