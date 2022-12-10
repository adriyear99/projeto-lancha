// Utilidades
import { StyleSheet,SafeAreaView,Button,BackHandler,Alert } from 'react-native'
import { useState,useEffect,useContext } from "react"
import DateTimePickerModal from "react-native-modal-datetime-picker"

// Variáveis globais
import AppContext from '../components/AppContext'


export default function Agendar({navigation}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [data, setData] = useState(undefined)
  const [dataAtual, setDataAtual] = useState(undefined)

  // Variáveis e métodos globais
  const global = useContext(AppContext)

  useEffect(() => {
    if (dataAtual == undefined) {
      setDataAtual(new Date())
    }

    if (data != undefined) {
      console.log("Data selecionada: ", data)
      navigation.navigate("Detalhes Reserva",{
        screen:"Detalhes Reserva",
        params:global.barcoSelecionado
    })

    }
  }, [data])

  // Hardware
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home")
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const showDatePicker = () => {
    console.log(isDatePickerVisible)
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (date < dataAtual) {
      console.log("erroooooooooooo")
    } else {
      console.log("sucessooooo")
      setData(date);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles.botao}
        title="Show Date Picker"
        onPress={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#fff',
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },

    botao: {
      width:'80%',
      borderRadius:50
    }

})