import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Components
import Login from './src/pages/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
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
