import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const hello = async () => {
  alert('Hello World');
}
async function hello2() {
  alert('Hello World');
  const foo = await true;
}

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text onPress={hello}>One!</Text>
      <Text onPress={hello2}>Two!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
