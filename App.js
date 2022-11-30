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
import EditarReserva from './src/pages/EditarReserva'
import NovaReserva from './src/pages/NovaReserva'
import VerBarco from './src/pages/VerBarco'
import Perfil from './src/pages/Perfil'
import EditarPerfil from './src/pages/EditarPerfil'


export default function App() {

  // Variáveis globais
  const [tipoUsuario, setTipoUsuario] = useState('empresa')
  const [temConta,setTemConta] = useState(null)
  const [userName, setUserName] = useState('Undefined')
  const [email, setEmail] = useState('lulinha@gmail.com')
  const [userPicture, setUserPicture] = useState('')
  const [barcos,setBarcos] = useState([])
  const [reservas,setReservas] = useState([])
  const [showModal,setShowModal] = useState(false)
  const [dark,setDark] = useState(false)
  const [baseURL,setBaseURL] = useState('http://54.84.178.96:3000')

  // Dados do usuário logado
  const user = {
    tipoUsuario: tipoUsuario,
    setTipoUsuario,
    temConta,
    setTemConta,
    userName: userName,
    setUserName,
    email,
    setEmail,
    userPicture: userPicture,
    setUserPicture,
    barcos: barcos,
    setBarcos,
    reservas: reservas,
    setReservas,
    showModal:showModal,
    setShowModal,
    dark:dark,
    setDark,
    baseURL,
    setBaseURL
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
          <Stack.Screen name="Cadastro" component={Cadastro} options={styles.hideHeader}/>
          <Stack.Screen name="Esqueci minha senha" component={EsqueciMinhaSenha}/>
          <Stack.Screen name="Configurações" component={Settings}/>
          <Stack.Screen name="Agendar" component={Agendar}/>
          <Stack.Screen name="Ver Barco" initialParams={{barco:null}} component={VerBarco} options={styles.hideHeader}/>
          <Stack.Screen name="Editar Reserva" component={EditarReserva}/>
          <Stack.Screen name="Nova Reserva" component={NovaReserva}/>
          <Stack.Screen name="Perfil" component={Perfil}/>
          <Stack.Screen name="Editar Perfil" component={EditarPerfil}/>
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