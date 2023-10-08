import { View, Text } from 'react-native'; // Import Text from 'react-native'
import LoginStyle from '../../ProjectStyles/LoginStyle';

const ForgotPassword = () => { // Use capitalized name
  return (
    <View style={LoginStyle.logged}>
          <Text>keep me logged in</Text>
          <Text style={LoginStyle.forgot}>
            Forgot Password
          </Text>
    </View>
  );
};

export default ForgotPassword; // Export with capitalized name