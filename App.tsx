import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //data-type
  //string
  const [name, setName] = useState<string>("");

  // //number
  // const [age, setAge] = useState<number>(21);

  // //null, undefined, boolean
  // const test = null;

  // //object 
  // const [person, setPerson] = useState({
  //   name: "Quang",
  //   age: 21
  // });

  // //array
  // const [person2, setPerson2] = useState([{
  //   name: "Quang",
  //   age: 21
  // }])

  return (
    <View style={styles.container}>
      <View>

        {/* <Text style={styles.test1}>{JSON.stringify(person)}</Text> */}
        <TextInput
          onChangeText={value => setName(value)}
          value={name}
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={true}
        // keyboardType='number-pad'
        // maxLength={2}
        // multiline
        />
        <Text style={styles.test1}>{name}</Text>
      </View>

      <Button title='Add me' />

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
    paddingTop: 20,
    paddingHorizontal: 20
  },

  test1: {
    fontSize: 30,
    color: "red"
  },

  test2: {
    color: "yellow"
  },

  textInput: {
    borderWidth: 2,
    borderColor: "black",
    padding: 7,
    borderRadius: 10
  },
});
