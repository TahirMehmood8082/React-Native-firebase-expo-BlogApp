import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title:{
    flex: 1,
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
  },
  mainView: {
    //paddinTop: Platform.OS === "android" ? 40 : 0,
    flex: 1,
    marginTop: 15,
    marginLeft:15,
    marginRight: 15,
  },
  textInput: {
    backgroundColor: 'green',
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
    marginTop: 5,
    borderWidth: 2,
  },
  text: {
    color: '#000',
    fontSize: 20,
    justifyContent: 'center',
  },
  createBtn:{
    backgroundColor: 'orange',
    width: 380,
    borderWidth: 2,
    color: '#000'
  },
  btn: {
    width: 120,
    borderWidth: 2,
  },
  btnTxt: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  
});

export default styles;