import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen"
//import CrudScreen from '../screens/CrudScreen'
import Posts from '../screens/Posts'
import Post1 from '../screens/Post1'
import CreateBlog from "../components/Blogs/create";
import Bloglist from "../components/Blogs/bloglist";
import BlogView from "../components/Blogs/show";
import BlogEdit from "../components/Blogs/edit";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Posts"
          component={Posts}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Post1"
          component={Post1}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Create"
          component={CreateBlog}
          options={{ headerShown: true, title: 'Create Post' , 
          headerStyle: {
            backgroundColor: 'green', 
          },
          headerTitleAlign: 'center', 
        }}
        />
        <Stack.Screen
          name="List"
          component={Bloglist}
          options={{ headerShown: true, title: 'Blogs List', 
          headerStyle: {
            backgroundColor: 'green', 
          },
          headerTitleAlign: 'center', 
        }}
        />
        <Stack.Screen
          name="Show"
          component={BlogView}
          options={{ headerShown: true, title: 'Post Detail' , 
          headerStyle: {
            backgroundColor: 'green', 
          },
          headerTitleAlign: 'center', 
        }}
        />
        <Stack.Screen
          name="Edit"
          component={BlogEdit}
          options={{ headerShown: true, title: 'Edit Post' , 
          headerStyle: {
            backgroundColor: 'green', 
          },
          headerTitleAlign: 'center', 
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});