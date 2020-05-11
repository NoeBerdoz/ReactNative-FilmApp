import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem';


import {Colors} from 'react-native/Libraries/NewAppScreen';

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={ styles.textinput } placeholder="Titre du film"/>
                <Button title="Rechercher" onPress={() => {}}/>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop:20
    },
    textinput: {
        backgroundColor: Colors.light,
    }
});

export default Search
