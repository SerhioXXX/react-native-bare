import React, { FC, ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string,
}

const Header: FC<Props> = ({ title }): ReactElement => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'green',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
