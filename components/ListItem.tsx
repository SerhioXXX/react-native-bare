import React, { FC, ReactElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Item = {
  id: string,
  text: string,
}
type Props = {
  item: Item
}

const ListItem: FC<Props> = ({ item }): ReactElement => {
  // console.log('ListItem item', item);
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.text}>{`${item.text}::${item.id}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    height: 60,
    padding: 15,
    backgroundColor: 'grey',
    marginVertical: 5,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ListItem;
