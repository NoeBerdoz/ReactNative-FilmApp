import React from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';

class Search extends React.Component {
    render() {
        return (
            <View>
                <TextInput style={ styles.textinput } placeholder="Titre du film"/>
                <Button title="Rechercher" onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        backgroundColor: Colors.light,
    }
});

export default Search
