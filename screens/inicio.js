import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../assets/header';
import Footer from '../assets/footer';

const Inicio = () => {
    const titulo = "Inicio";
    const navigation = useNavigation();

    const handleButtonPress = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View>
            <Header titulo={titulo} />

            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Peliculas')}>
                <Image style={styles.image} source={require('../assets/peliculas_series.jpg')} />
                <Text style={styles.titulos}>Peliculas populares</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => handleButtonPress('Series')}>
                <Image style={styles.image} source={require('../assets/peliculas_series.jpg')} />
                <Text style={styles.titulos}>Series populares</Text>
            </TouchableOpacity>

            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 150,
        marginVertical: 10,
        alignSelf: 'center',
        marginTop: 50,
    },
    titulos: {
        color: 'black',
        fontSize: 18,
    },
    button2: {
        width: 150,
        height: 150,
        marginVertical: 10,
        alignSelf: 'center',
        marginVertical: 62,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default Inicio;