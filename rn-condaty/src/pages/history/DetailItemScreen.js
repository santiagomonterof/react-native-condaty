

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailItemScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.responsive}>
                <View style={styles.top}>
                    <Image source={require('../../../assets/profile-picture.jpeg')} style={{ width: 80, height: 80, borderRadius: 100, marginTop: 30 }} />
                    <Text style={styles.tenant}>Inquilino</Text>
                    <Text style={styles.name}>{item.title}</Text>
                </View>
                <View style={styles.center}>
                    <View style={styles.delete}>
                        <Icon name="delete" size={25} color="gray" />
                        <Text style={styles.delete_text}>Eliminar</Text>
                    </View>
                    <View style={styles.edit}>
                        <Icon name="edit" size={25} color="gray" />
                        <Text style={styles.edit_text}>Editar</Text>
                    </View>

                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottom_title}>Información de contacto</Text>
                    <Text style={styles.info}>Celular</Text>
                    <Text style={styles.data}>+591 76005423</Text>
                    <Text style={styles.info}>C.I.</Text>
                    <Text style={styles.data}>1234567 SC</Text>
                    <Text style={styles.info}>Dirección</Text>
                    <Text style={styles.data}>MZ40, casa 7, calle 4</Text>
                    <Text style={styles.info}>Correo electrónico</Text>
                    <Text style={styles.data}>armandofp@gmail.com</Text>
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b3b3b',
    },
    responsive: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#212121',
        marginHorizontal: 35,
        marginVertical: 30,
        borderRadius: 10,
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tenant: {
        color: '#00ff9d',
        fontSize: 10,
        marginTop: 2,
        marginBottom: 10,

    },
    name: {
        color: 'white',
        fontSize: 18
    },
    center: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        width: '100%',
        height: 70,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    delete: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    delete_text: {
        color: 'gray',
        fontSize: 12,
        marginLeft: 5,
        marginTop: 5,
    },
    edit: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    edit_text: {
        color: 'gray',
        fontSize: 12,
        marginLeft: 5,
        marginTop: 5,
    },
    bottom: {
        width: '100%',
        paddingHorizontal: 50,
    },

    bottom_title: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    info: {
        color: 'white',
        fontSize: 12,
    },
    data: {
        color: 'gray',
        fontSize: 10,
        marginBottom: 10,
    },



});


export default DetailItemScreen;