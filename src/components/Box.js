// Utilidades
import { StyleSheet,Text,TouchableOpacity,View,Image } from 'react-native'
import { useState,useContext, useRef, useEffect  } from 'react'

export default function Box({navigation}) {

  return (
      <View style={styles.container}>
          <Text>Barco</Text>
      </View>
  )
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor:'#fff',
      padding:20,
      alignSelf:'center',
      
  },

})



/*
export default function Box({navigation}) {
    const myRef = useRef();
    useEffect(() => {
      const styleObj = {
        borderWidth: 4,
        borderRadius: 4,
        borderColor: "#22D3EE"
      };
      myRef.current.setNativeProps({
        style: styleObj
      });
    }, [myRef]);
    return (
        <Box width="100%" bg="primary.500" p="4" shadow={2} _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white"
          }} ref={myRef}>
              This is a Box
            </Box>
    )
}
*/