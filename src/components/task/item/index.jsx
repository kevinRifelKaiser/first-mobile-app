import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles';

const Item = ({ item, onHandlerModal }) => {
  return (
    <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.itemContainer} key={item.id}>
        <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  );
}

export default Item;