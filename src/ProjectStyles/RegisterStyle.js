import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  registerBtn: {
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
  registerBtnTxt: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",  
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  emailTextInput: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    fontSize: 16,
  },
  logged: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgot: {
    color: "#007FFF",
    fontWeight: "500",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  nameText: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    fontSize: 16,
  },
  passwordView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  passwordPlaceholder: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    fontSize: 16,
  },
  titleText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42",
  },
  alreadyAccTxt: {
    textAlign: "center",
    color: "gray", 
    fontSize: 16,
  },
  logoImg: {
    white: 150,
    height: 100,
  },
});

export default styles;