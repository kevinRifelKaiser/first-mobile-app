import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    width: '75%',
    borderBottomColor: '#2a9d8f',
    borderBottomWidth: 1,
    height: 40,
    color: '#212121',
  },
  listContainer: {
    marginHorizontal: 20,
    marginTop: 40
  },
  itemContainer: {
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
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  detailsContainer: {
    marginVertical: 20,
    paddingVertical: 10
  },
  detailMessage: {
    marginBottom: 20,
    fontSize: 15
  },
  selectedTask: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  }
});