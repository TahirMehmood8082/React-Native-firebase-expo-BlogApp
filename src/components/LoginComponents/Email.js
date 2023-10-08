import { View, TextInput } from 'react-native'; // Import Text from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import LoginStyle from '../../ProjectStyles/LoginStyle';

const Email = ({email, setEmail}) => { // Use capitalized name
  return (
    <View style={LoginStyle.emailContainer}>
      <MaterialIcons
        style={{ marginLeft: 8 }}
        name="email"
        size={24}
        color="gray"
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={LoginStyle.emailTextInput}
        placeholder="enter your Email"
      ></TextInput>
    </View>
  );
};

export default Email; // Export with capitalized name
