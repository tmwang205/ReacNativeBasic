import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Tôi là người mới</Text>
      </View>
      <Text style={styles.test1}>Hello world with
        <Text style={styles.test2}>Quang</Text>
      </Text>
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

  test1: {
    fontSize: 30,
    color: "red"
  },

  test2: {
    color: "yellow"
  },
});
