import 'react-native-gesture-handler';
import React from 'react'
// import Navigation from './Navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from './Components/Search';
import FilmDetail from './Components/FilmDetail';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rechercher" component={Search}/>
        <Stack.Screen name="FilmDetail" component={FilmDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
