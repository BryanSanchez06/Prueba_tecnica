import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.socialMedia}>
                <View style={styles.socialMedia}>
                    <TouchableOpacity onPress={() => handleFacebookPress()}>
                        <Image source={require('./social/facebook.png')} style={styles.logo} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleInstagramPress()}>
                        <Image source={require('./social/instagram.png')} style={styles.logo} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTwitterPress()}>
                        <Image source={require('./social/twitter.png')} style={styles.logo} />
                    </TouchableOpacity>
                </View>

                <Text>                                </Text>

                <TouchableOpacity onPress={() => handleAppStorePress()}>
                    <Image source={require('./store/app-store.png')} style={styles.logo} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePlayStorePress()}>
                    <Image source={require('./store/google.png')} style={styles.logo} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleWindowsStorePress()}>
                    <Image source={require('./store/win-store.png')} style={styles.logo} />
                </TouchableOpacity>
            </View>
            <View style={styles.footerLinks}>
            <View>
                <Text style={styles.link}>
                    <TouchableOpacity onPress={() => handleHomePress()}>
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={styles.link}>
                    <TouchableOpacity onPress={() => handleTermsPress()}>
                        <Text style={styles.buttonText}>Términos y condiciones</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={styles.link}>
                    <TouchableOpacity onPress={() => handlePrivacyPress()}>
                        <Text style={styles.buttonText}>Políticas de privacidad</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View>

                <Text style={styles.link}>
                    <TouchableOpacity onPress={() => handleHelpPress()}>
                        <Text style={styles.buttonText}>Ayuda</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={styles.link}>
                    <TouchableOpacity onPress={() => handleAccountPress()}>
                        <Text style={styles.buttonText}>Administrar cuenta</Text>
                    </TouchableOpacity>
                </Text>
                </View>
            </View>
        </View>
    );
};

export default footer;

const styles = {
    footer: {
        backgroundColor: 'black',
        padding: 20,
        allignItems: 'end',
    },
    socialMedia: {
        
        colorbackground: 'black',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    downloadSites: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    footerLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    link: {
        color: 'white',
    },
    buttonText: {
        color: 'white',
    },
};
