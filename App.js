// Utilidades
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import AppContext from './src/components/AppContext'

// Navegação entre telas
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Páginas
import TelaInicial from './src/pages/TelaInicial'
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
import VerReservas from './src/pages/VerReservas'
import Perfil from './src/pages/Perfil'
import EditarPerfil from './src/pages/EditarPerfil'


export default function App() {

  // Variáveis globais
  const [tipoUsuario, setTipoUsuario] = useState(undefined)
  const [temConta,setTemConta] = useState(null)
  const [usuarioLogado,setUsuarioLogado] = useState(false)
  const [userName, setUserName] = useState(null)
  const [userId, setUserId] = useState(1)
  const [email, setEmail] = useState('lulinha@gmail.com')
  const [userPicture, setUserPicture] = useState('')
  const [barcos,setBarcos] = useState([])
  const [reservas,setReservas] = useState([])
  const [modalOpen,openModal] = useState(false)
  const [dark,setDark] = useState(false)
  const [baseURL,setBaseURL] = useState('http://54.84.178.96:3000')

  // Dados do usuário logado
  const user = {
    tipoUsuario: tipoUsuario,
    setTipoUsuario,
    temConta,
    setTemConta,
    usuarioLogado,
    setUsuarioLogado,
    userId: userId,
    setUserId,
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
    modalOpen,
    openModal,
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
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Tela Inicial" component={TelaInicial} options={styles.hideHeader}/>
          <Stack.Screen name="Cadastro ou Login" component={CadastroLogin} options={styles.hideHeader}/>
          <Stack.Screen name="Pessoa ou Empresa" component={PessoaEmpresa} options={styles.hideLabel}/>
          <Stack.Screen name="Home" component={Home} options={styles.hideHeader}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={styles.hideHeader}/>
          <Stack.Screen name="Esqueci minha senha" component={EsqueciMinhaSenha}/>
          <Stack.Screen name="Configurações" component={Settings}/>
          <Stack.Screen name="Agendar" component={Agendar}/>
          <Stack.Screen name="Ver Barco" initialParams={null} component={VerBarco} options={styles.hideHeader}/>
          <Stack.Screen name="Ver Reservas" component={VerReservas}/>
          <Stack.Screen name="Editar Reserva" component={EditarReserva}/>
          <Stack.Screen name="Nova Reserva" initialParams={null} component={NovaReserva}/>
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