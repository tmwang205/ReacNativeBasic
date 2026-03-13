import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //data-type
  //string
  const [name, setName] = useState<string>("Xin chào bạn");

  //number
  const [age, setAge] = useState<number>(21);

  //null, undefined, boolean
  const test = null;

  //object 
  const [person, setPerson] = useState({
    name: "Quang",
    age: 21
  });

  //array
  const [person2, setPerson2] = useState([{
    name: "Quang",
    age: 21
  }])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.test1}>{name}</Text>
        <Text style={styles.test1}>{JSON.stringify(person)}</Text>
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
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  test1: {
    fontSize: 30,
    color: "red"
  },

  test2: {
    color: "yellow"
  },
});
