// Utilidades
import { StyleSheet,SafeAreaView,Button,BackHandler,Alert } from 'react-native'
import { useState,useEffect,useContext } from "react"
import DateTimePickerModal from "react-native-modal-datetime-picker"

// Variáveis globais
import AppContext from '../components/AppContext'

// Componentes
import CustomButton from '../components/CustomButton'


export default function Agendar({navigation,route}) {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [dataAtual, setDataAtual] = useState(undefined)

  // Variáveis e métodos globais
  const global = useContext(AppContext)

  useEffect(() => {
    if (global.dataSelecionada != undefined && global.barcoSelecionado != undefined) {
      console.log("Data selecionada: ", global.dataSelecionada)
      navigation.navigate("Detalhes Reserva",{
        screen:"Detalhes Reserva",
        params:global.barcoSelecionado
      })
    }
  }, [global.dataSelecionada,global.barcoSelecionado])

  useEffect(() => {

    if (dataAtual == undefined) {
      setDataAtual(new Date())
    }

    if(global.barcoSelecionado==undefined){
      global.setBarcoSelecionado(route.params.params)
    }
  })

  // Hardware
  useEffect(() => {
    const backAction = () => {
      setDatePickerVisibility(false)
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
    isDatePickerVisible ? setDatePickerVisibility(false) : setDatePickerVisibility(true)

  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (date < dataAtual) {
      Alert.alert("Erro!","Data selecionada deve ser maior que a atual", [
        {
          text: "OK",
          onPress: () => null,
          style: "cancel"
        }
      ]);
      setDatePickerVisibility(false);

    } else {
      global.setDataSelecionada(date)
      setDatePickerVisibility(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        text="Escolher Data"
        onPress={showDatePicker}
        style={{ height: 100, width: 300, backgroundColor: "#4B7E94" }}
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
        alignItems:'center',
        justifyContent:'center'
    }

})