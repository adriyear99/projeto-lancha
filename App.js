// Utilidades
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import AppContext from './src/components/AppContext'

// Navegação entre telas
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// API
import { createServer } from "miragejs"

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

// Simulando API
if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/barcos", () => {
      return {
        barcos: [
          {
            id:1,
            foto:'foto 1',
            nome:'Barco 1',
            consumo:15,
            idade:3,
            cooler:true,
            capacidade: {
              pessoas:8,
              peso:967
            }
          },
          {
            id:2,
            foto:'foto 2',
            nome:'Barco 2',
            consumo:15,
            idade:3,
            cooler:true,
            capacidade: {
              pessoas:8,
              peso:967
            }
          },
          {
            id:3,
            foto:'foto 3',
            nome:'Barco 3',
            consumo:15,
            idade:3,
            cooler:true,
            capacidade: {
              pessoas:8,
              peso:967
            }
          },
          {
            id:4,
            foto:'foto 4',
            nome:'Barco 4',
            consumo:15,
            idade:3,
            cooler:true,
            capacidade: {
              pessoas:8,
              peso:967
            }
          },
          {
            id:5,
            foto:'foto 5',
            nome:'Barco 5',
            consumo:15,
            idade:3,
            cooler:true,
            capacidade: {
              pessoas:8,
              peso:967
            }
          },
          {
            id:6,
            foto:'foto 6',
            nome:'Barco 6',
            consumo:15,
            idade:3,
            cooler:true,
            capacidade: {
              pessoas:8,
              peso:967
            }
          },
          {
            id:7,
            foto:'foto 7',
            nome:'Barco 7',
            consumo:15,
            idade:3,
            cooler:true,
            capacidade: {
              pessoas:8,
              peso:967
            }
          },
          {
            id:8,
            foto:'foto 8',
            nome:'Barco 8',
            consumo:15,
            idade:3,
            cooler:true,
            capacidade: {
              pessoas:8,
              peso:967
            }
          }
        ]
      }
    })
  },
})


export default function App() {

  // Variáveis globais
  const [tipoUsuario, setTipoUsuario] = useState('empresa')
  const [userName, setUserName] = useState('Undefined')
  const [userPicture, setUserPicture] = useState('')
  const [barcos,setBarcos] = useState([])
  const [showModal,setShowModal] = useState(false)
  const [dark,setDark] = useState(false)

  // Dados do usuário logado
  const user = {
    tipoUsuario: tipoUsuario,
    setTipoUsuario, 
    userName: userName,
    setUserName,
    userPicture: userPicture,
    setUserPicture,
    barcos: barcos,
    setBarcos,
    showModal:showModal,
    setShowModal,
    dark:dark,
    setDark
  }

  // Navegador de páginas
  const Stack = createNativeStackNavigator()

  // Renderização dos componentes
  return (
    <AppContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Ver Barco">
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