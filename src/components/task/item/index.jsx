import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

const Item = ({ item, onHandlerModal }) => {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => onHandlerModal(item)}
      style={styles.itemContainer}
      key={item.id}
    >
      <BouncyCheckbox
        size={20}
        fillColor="#15514A"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#15514A" }}
        innerIconStyle={{ borderWidth: 1 }}
        onPress={() => setIsChecked(!isChecked)}
      />
      <Text style={isChecked?styles.itemListChecked:styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  );
};

export default Item;
