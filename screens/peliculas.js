import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadMovies } from './actions';
import Header from '../assets/header'; 
import Footer from '../assets/footer'; 
import data from '../data/sample.json';

const Peliculas = () => {
    const titulo = "Peliculas populares";
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        const filtroPeli = data.entries.filter(movie => movie.releaseYear >= 2010 && movie.programType === 'movie');
        const ordenado = filtroPeli.sort((a, b) => a.title.localeCompare(b.title));
        dispatch(loadMovies(ordenado.slice(0, 20)));
    }, [dispatch]);

    return (
        <ScrollView>
            <View>
            <Header titulo={titulo}/> 
                {movies.movies.map(movie => (
                    <TouchableOpacity key={movie.title} style={styles.movieContainer}>
                        <Image source={{ uri: movie.images['Poster Art'].url }} style={styles.poster} />
                        <Text style={styles.movieTitle}>{movie.title}</Text>
                    </TouchableOpacity>
                ))}
                <Footer/> 
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    movieContainer: {
        opacity: 1,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 5,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    poster: {
        width: 100,
        height: 150,
    },
    movieTitle: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default Peliculas;
