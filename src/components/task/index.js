import Item from "./item";
import { FlatList } from "react-native";
import { styles } from "./styles";

const TaskList = ({ tasks, onHandlerModal }) => {
  const renderItem = ({ item }) => (
    <Item item={item} onHandlerModal={onHandlerModal} />
  );

  const keyExtractor = (item) => item.id;

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.listContainer}
    />
  );
};

export default TaskList;