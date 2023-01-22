import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#2a9d8f',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  itemList: {
    color: 'white',
    fontWeight: 'bold'
  },
  itemListChecked: {
    textDecorationLine: 'line-through',
    color: 'white',
    fontWeight: 'bold'
  }
});