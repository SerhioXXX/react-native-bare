import React, { SetStateAction, useState } from 'react';
import { Platform, View, StyleSheet, FlatList, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Text, useColorScheme } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

const instructions = Platform.select({
  ios: 'Platform iOS : Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const HomeScreen = () => {

  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDarkMode ====> ', useColorScheme());

  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Model S' },
    { id: uuidv4(), text: 'Model 3' },
    { id: uuidv4(), text: 'Model X' },
    { id: uuidv4(), text: 'Model Y' },
  ]);
  const [text, setText] = useState('');
  const onChangeText = (textValue: SetStateAction<string>) => {
    setText(textValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Elise!" />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        animated={true}
        backgroundColor="pink"
      />
      <TextInput
        placeholder="Add model ..."
        onChangeText={onChangeText}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          TouchableOpacity
        </Text>
      </TouchableOpacity>
      <View>
        <FlatList
          data={items}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Text style={styles.instructions}>
        {instructions}
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#4f6d7a',
    // paddingTop: 60,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btnText: {
    fontSize: 23,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'pink',
    padding: 8,
    margin: 4,
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});

export default HomeScreen;
