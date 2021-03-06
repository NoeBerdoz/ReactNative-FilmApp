import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from "../API/TMDBApi";

class FilmItem extends React.Component {
    render() {
        const { film, displayDetailForFilm } = this.props
        return (
            <TouchableOpacity
                onPress={() => displayDetailForFilm(film.id)}
                style={styles.main_container}>
                <Image style={styles.image} source={{uri: getImageFromApi(film.poster_path)}} />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                    <View styles={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                        {/* numberOfLines can shortcut the text if this one is too long, it define a maximal number of lines*/}
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Sorti en {film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },

    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },

    content_container: {
        flex: 1,
        margin: 5,
    },

    header_container: {
        flex: 3,
        flexDirection: 'row',
    },

    title_text: {
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap', // Align text down if name too long
        paddingRight: 5,
        flex: 1,
    },

    vote_text: {
        fontSize: 25,
        color: 'gray',
        fontWeight: 'bold',
        marginRight: 5,
    },

    description_container: {
        flex: 7,
    },

    description_text: {
        fontStyle: 'italic',
        color: 'gray',
    },

    date_container: {
        flex: 1,
    },

    date_text: {
        textAlign: 'right',
        fontSize: 14,
    },
})

export default FilmItem
