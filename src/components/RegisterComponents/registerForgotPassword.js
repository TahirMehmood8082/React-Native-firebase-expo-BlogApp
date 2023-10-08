import { View, Text } from 'react-native'; // Import Text from 'react-native'
import registerStyle from '../../ProjectStyles/RegisterStyle'

const ForgotPassword = () => { // Use capitalized name
  return (
    <View style={registerStyle.logged}>
      <Text>keep me logged in</Text>
      <Text style={registerStyle.forgot}>
        Forgot Password
      </Text>
    </View>
  );
};

export default ForgotPassword; // Export with capitalized name