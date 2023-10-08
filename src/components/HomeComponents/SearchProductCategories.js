import { View } from 'react-native'
import React from 'react'
import ProductItem from "../../components/ProductItem";
import DropDownPicker from "react-native-dropdown-picker";
import homeStyle from '../../ProjectStyles/HomeStyle'


const SearchProductCategories = (
    {
      open,
      category,
      items,
      setOpen,
      setCategory,
      setItems,
      onGenderOpen,
      products
    }) => {
  return (
    <>
      <View
            style={
              [
                homeStyle.SearchProductCategoriesMainView,
                {marginBottom: open ? 50 : 15}
              ]
            }
          >
            <DropDownPicker
              style={
                [
                  homeStyle.SearchProductCategoriesDropDownPicker,
                  {marginBottom: open ? 120 : 15}
                ] 
              }
              open={open}
              value={category} //genderValue
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              placeholder="choose category"
              //placeholderStyle={styles.placeholderStyles}
              onOpen={onGenderOpen}
              // onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
            />
      </View>

      <View  style={homeStyle.SearchProductCategoriesProducts}>
        {products
          ?.filter((item) => item.category === category)
          .map((item, index) => (
            <ProductItem item={item} key={index} />
          ))}
      </View>
    </>
  )
}

export default SearchProductCategories 