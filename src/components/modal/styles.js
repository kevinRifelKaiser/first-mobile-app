import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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