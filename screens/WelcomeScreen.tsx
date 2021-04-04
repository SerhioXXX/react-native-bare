import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class WelcomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {`
          Elise! Who is Elise?
          Dresses beautifully.  Speaks beautifully
          And knows perfectly the Latin alphabet
          Well, we, with such mugs, will take it and go to Elise

          Shurik is with us, Sergey is with us
          He's a great guy even though he's gay
          And Boris and Kolya also dressed in a strange way.
          And what comes next is just a Trumpet (h-h-h)
          This is not love, this is a hard fight (but we like it)
          But that’s all later, and now we’ll all go to Elise’s.
          And who is this girl and where does she live?
          What if she doesn't smoke, what if she doesn't drink?
          Well, we will take it with such a company, and we will go to    
          `}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
