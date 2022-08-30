import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1)
  const [text, setText] = useState('Guess a number between 1-100 \n')
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState(1);


  const guessChecker = () => {
    setGuesses(guesses + 1);
    if (Number(guess) == Number(randomNumber)) {
      Alert.alert("You guessed the number in " + guesses + " guesses");
      setText('Guess a number between 1-100 \n');
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
      setGuesses(1);
    }
    else if (Number(guess) < Number(randomNumber)) {
      setText("Your guess " + guess + " is too low\n");
    }
    else if (Number(guess) > Number(randomNumber)) {
      setText("Your guess " + guess + " is too high\n");
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        style={{width: 80, borderColor: 'black', borderWidth: 0.5}}
        keyboardType='numeric'
        onChangeText={guess => setGuess(guess)}
        value={guess}
      />
      <Button onPress={guessChecker} title="MAKE GUESS"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});