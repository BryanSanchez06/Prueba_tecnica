import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Cuevana UTT</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textos}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textos}>Comienza tu prueba gratis</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <Text style={styles.popularTitles}>{props.titulo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 20,
    },
    logo: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        color: "white",
        fontSize: 16,
    },
    textos: {
        color: "white",
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
        marginTop: 20,
        marginBottom: 10,
    },
    popularTitles: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Header;
