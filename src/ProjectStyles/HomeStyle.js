import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeScreenSafeArea: {
    //paddinTop: Platform.OS === "android" ? 40 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  addAAddressLocationModal: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 10,
    backgroundColor: "#AFEEEE",
  },
  addAAddressTxt: {
    fontSize: 13, 
    fontWeight: "500",
  },
  locationModalContent: {
    width: "100%", 
    height: 400,
  },
  locationTxt: {
    fontSize: 16, 
    fontWeight: "500",
  },
  deliveryTxt: {
    marginTop: 5, 
    fontSize: 16, 
    color: "gray",
  },
  pickUpPointBox: {
    width: 140,
    height: 140,
    borderColor: "#D0D0D0",
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pickUpPointTxt: {
    textAlign: "center",
    color: "#0066b2",
    fontWeight: "500",
  },
  pickUpPointAlreadyAddress:{
    width: 140,
    height: 140,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    marginRight: 15,
    marginTop: 10,
  },
  locationItemContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    gap: 3,
  },
  locationItemName:{
    fontSize: 13, 
    fontWeight: "bold",
  },
  locationItemHouseNo: {
    width: 130, 
    fontSize: 13, 
    textAlign: "center",
  },
  locationItemStreet: {
    width: 130, 
    fontSize: 13, 
    textAlign: "center",
  },
  locationItemCity: {
    width: 130, 
    fontSize: 13, 
    textAlign: "center",
  },
  locationTypesMainView: {
    flexDirection: "column", 
    gap: 7, 
    marginBottom: 30,
  },
  locationTypesSubView: {
    flexDirection: "row", 
    alignItems: "center", 
    gap: 5,
  },
  locationTypesTxt: {
    color: "#0066b2", 
    fontWeight: "400", 
  },
  productCategoriesPress:{
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  productCategoriesImg:{
    width: 50, 
    height: 50, 
    resizeMode: "contain",
  },
  productCategoriesTxt:{
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 5,
  },
  SearchInAmazonMainView:{
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  SearchInAmazonPressable:{
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  SearchProductCategoriesMainView: {
    marginHorizontal: 10,
    marginTop: 20,
    width: "45%",
  },
  SearchProductCategoriesDropDownPicker: {
    borderColor: "#B7B7B7",
    height: 30,
  },
  SearchProductCategoriesProducts: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  todayDealTxt:{
    padding: 10, 
    fontSize: 18, 
    fontWeight: "bold",
  },
  todayDealItemPress:{
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  todayDealItemImg:{
    width: 150, 
    height: 150, 
    resizeMode: "contain",
  },
  todayDealUptoMainView:{
    backgroundColor: "#E31837",
    paddingVertical: 5,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 4,
  },
  todayDealUptoText:{
    textAlign: "center",
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  trendingDealsTxt: {
    padding: 10, 
    fontSize: 18, 
    fontWeight: "bold",
  },
  trendingDealsMainView: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  trendingDealsItemPress: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  trendingDealsItemImg: {
    width: 180, 
    height: 180, 
    resizeMode: "contain",
  },
});

export default styles;