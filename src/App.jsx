import { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { AddItem, TaskList, CustomModal } from "./components";
import { colors } from "./constants/theme/colors";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onHandlerChange = (text) => {
    console.log(text);
    setTask(text);
  };

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
      },
    ]);
    setTask("");
  };

  const onHandlerModal = (item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
  };

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null);
  };

  const onHanldeDelete = () => {
    setTasks((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== selectedItem.id)
    );
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <AddItem
        buttonColor={colors.primary}
        buttonText="Add"
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder="Add a new task"
        task={task}
      />
      <TaskList tasks={tasks} onHandlerModal={onHandlerModal} />
      <CustomModal
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        onHandleCancel={onHandleCancel}
        onHanldeDelete={onHanldeDelete}
        cancelColor={colors.cancelButton}
        deleteColor={colors.deleteButton}
      />
    </View>
  );
};

export default App;
