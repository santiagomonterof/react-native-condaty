import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomePanels from './HomePanels';

const HomeScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Buenos días!</Text>
                <Text style={styles.subtitle}>Aquí puedes ver un resumen de los accesos, invitaciones, pendientes, entre otros aspectos de tu condominio.</Text>
                <HomePanels />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b3b3b',
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 15,

    },
    subtitle: {
        color: '#b2b2b2',
        fontSize: 16,
        textAlign: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
});


export default HomeScreen;