// Utilidades
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import AppContext from './src/components/AppContext'

// Navegação entre telas
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Páginas
import Login from './src/pages/Login'
import Cadastro from './src/pages/Cadastro'
import CadastroLogin from './src/pages/CadastroLogin'
import PessoaEmpresa from './src/pages/PessoaEmpresa'
import Home from './src/pages/Home'
import EsqueciMinhaSenha from './src/pages/EsqueciMinhaSenha'
import Settings from './src/pages/Settings'
import Agendar from './src/pages/Agendar'


export default function App() {

  // Variáveis globais
  const [tipoUsuario, setTipoUsuario] = useState('')
  const [userName, setUserName] = useState('')
  const [userPicture, setUserPicture] = useState('')

  // Dados do usuário logado
  const user = {
    tipoUsuario: tipoUsuario,
    setTipoUsuario, 
    userName: userName,
    setUserName,
    userPicture: userPicture,
    setUserPicture
  }

  // Navegador de páginas
  const Stack = createNativeStackNavigator()

  // Renderização dos componentes
  return (
    <AppContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela Inicial">
          <Stack.Screen name="Tela Inicial" component={CadastroLogin} options={styles.hideHeader}/>
          <Stack.Screen name="Pessoa ou Empresa" component={PessoaEmpresa} options={styles.hideLabel}/>
          <Stack.Screen name="Home" component={Home} options={styles.hideHeader}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
          <Stack.Screen name="Esqueci minha senha" component={EsqueciMinhaSenha}/>
          <Stack.Screen name="Configurações" component={Settings}/>
          <Stack.Screen name="Agendar" component={Agendar}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({

  hideHeader: {
    headerShown: false
  },

  hideLabel: {
    showLabel: false
  }

})