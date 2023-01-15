import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity, Pressable } from 'react-native';

export default function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text)
  }

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);
    setTask('');
  }

  console.warn('tasks', tasks);

  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.itemContainer} key={item.id}>
        <Text style={styles.itemList}>{item.value}</Text>
      </TouchableOpacity>
  )

  const keyExtractor = (item) => item.id;

  const onHandlerModal = (item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
  }

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null);
  }

  const onHanldeDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedItem.id));
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder='add a new task'
          autoCapitalize='none'
          autoComplete='off'
          autoCorrect={false}
          value={task}
          onChangeText={onHandlerChange}
        />
        <Button disabled={!task} title='Add' color='#2a9d8f' onPress={onHandlerSubmit}/>
      </View>
      <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <Modal animationType='slide' visible={modalVisible} >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Details:</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailMessage}>Your about to delete the following task, are you sure?</Text>
            <Text style={styles.selectedTask}>{selectedItem?.value}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Button color="#6c757d" onPress={onHandleCancel} title='Cancel' />
            <Button color="#dc3545" onPress={onHanldeDelete} title='Delete'/>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
