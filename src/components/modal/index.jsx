import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const CustomModal = ({ modalVisible, selectedItem, onHandleCancel, onHanldeDelete, cancelColor, deleteColor }) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Task Details:</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailMessage}>
            Your about to delete the following task, are you sure?
          </Text>
          <Text style={styles.selectedTask}>{selectedItem?.value}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button color={cancelColor} onPress={onHandleCancel} title="Cancel" />
          <Button color={deleteColor} onPress={onHanldeDelete} title="Delete" />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;