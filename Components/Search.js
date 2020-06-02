import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import FilmDetail from './FilmDetail';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.page = 0
        this.totalPages = 0
        this.state = {
            films: [],
            isLoading: false // Dont default show the loading circle
        }
        this.searchedText = ""
    }

    _loadFilms() {
        this.setState({ isLoading: true }) // Lauching loading circle
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    films: [ ...this.state.films, ...data.results ], // ... = clone
                    isLoading: false // Ending lauching circle
                })

            })
        }
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    _searchedFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        }, () => {
            // J'utilise la paramètre length sur mon tableau de films pour vérifier qu'il y a bien 0 film
            console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
            this._loadFilms()
        })

    }

    _displayDetailForFilm = (idFilm) => {
        console.log("display film with id " + idFilm);
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput onSubmitEditing={() => this._searchedFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder="Titre du film"/>
                <Button title='Rechercher' onPress={() => this._searchedFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachThreashold={0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilms()
                        }
                        console.log("onEndReached")
                    }}
                    renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm}/>}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Search
