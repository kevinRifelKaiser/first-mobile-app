import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const App = () => {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onHandlerChange = (text) => {
    console.log(text);
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

  // console.warn('tasks', tasks);

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

export default App;