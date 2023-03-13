import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');

  const speakText = () => {
    const textToSay = text;
    Speech.speak(textToSay);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textinput1}
        placeholder='Write text here' 
        onChangeText={(text) => setText(text)}
        value={text}
      /> 
      <View style={styles.button}>
        <Button title='Press to hear text' onPress={speakText}/>
      </View>
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
  textinput1: {
    marginTop: 50, 
    fontSize: 18, 
    width: 225, 
    borderColor: 'gray', 
    borderWidth: 1, 
    height: 50,
  },
  button: {
    margin: 10,
  },
});
