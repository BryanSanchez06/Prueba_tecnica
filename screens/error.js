import React from 'react';
import { View, Image,Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../assets/header';
import Footer from '../assets/footer';

const Error = () => {
    const titulo = "Error";
    return (
        <View>
            <Header titulo={titulo} />

        <View style={styles.container}>

            <Image style={styles.image} source={require('../assets/erro.jpg')} />

        </View>

            <Footer/>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        padding: 116,
        alignItems: 'center',
    },
    popularTitles: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
    },

});

export default Error;