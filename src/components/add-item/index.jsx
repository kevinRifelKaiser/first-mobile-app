import { View, TextInput, Button } from "react-native";
import { styles } from "./styles"

const AddItem = ({
  placeholder,
  task,
  buttonText,
  buttonColor,
  onHandlerChange,
  onHandlerSubmit,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        value={task}
        onChangeText={onHandlerChange}
      />
      <Button
        disabled={!task}
        title={buttonText}
        color={buttonColor}
        onPress={onHandlerSubmit}
      />
    </View>
  );
};

export default AddItem;
