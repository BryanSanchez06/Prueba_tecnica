import React from 'react';
import { View, Image,Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../assets/header';
import Footer from '../assets/footer';

const Loading = () => {
    const titulo = "Cargando...";
    return (
        <View>
        <Header titulo={titulo} />

        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/loading.gif')} />
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
    image: {
        width: 270,
        height: 150,
        resizeMode: 'cover',
    },
    popularTitles: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        
    },

});

export default Loading;
