/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from './drawer';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

const Navigator = createStackNavigator({ AppNavigator : { screen: AppNavigator } });
const Container = createAppContainer(Navigator);

class App extends React.Component {

  render() {
    return (
     <Container />
    );
  }
}


export default App;
