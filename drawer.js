import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import NavBarItem from './NavBarItem';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class NotificationScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Notification Screen</Text>
        </View>
      );
    }
  }

// Route = {
//     Home: { screen: HomeScreen },
//     Notification: { screen: NotificationScreen }
// }

const AppNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Notification: { screen: NotificationScreen }
}, {
    drawerWidth:300,
    drawerPosition:'left',
    initialRouteName:'Home',
    toggleDrawer: 'DrawerToggle'
});

AppNavigator.navigationOptions = ({ navigation }) => ({
    headerStyle : {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle : {
      color: 'white',
      },
    headerLeft:<NavBarItem
    iconName="bars"
    onPress={() =>  navigation.toggleDrawer()}
    />
    });


export default AppNavigator;