import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import DetailItemScreen from './DetailItemScreen';
import dataYesterday from '../../../assets/dataYesterday.json';
import dataJuly19 from '../../../assets/dataJuly19.json';

const Stack = createStackNavigator();

const QrsScreen = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#3b3b3b',
            },
            headerTintColor: 'white',
        }}>
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DetailItemScreen" component={DetailItemScreen} options={{ title: '' }} />
        </Stack.Navigator>
    );
};

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <View style={styles.search_container}>
                    <TextInput
                        style={styles.search_input}
                        placeholder="Buscar..."
                        placeholderTextColor="#b2b2b2"
                    />
                    <Icon
                        name="search"
                        size={20}
                        color="#b2b2b2"
                        style={styles.search_icon}
                    />
                </View>
                <View style={styles.filter_container}>
                    <TouchableOpacity onPress={() => console.log('Icono 1 presionado')}>
                        <Icon name="filter-alt" size={30} color="#b2b2b2" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Icono 1 presionado')}>
                        <Icon name="insert-drive-file" size={25} color="#b2b2b2" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={[styles.list_title, { color: 'white' }]}>Ayer</Text>
            <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 5, padding: 5 }}>
                <FlatList
                    data={dataYesterday}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DetailItemScreen', { item })}
                        >
                            <View style={styles.list_item}>
                                <View style={styles.item_container}>
                                    <View style={styles.item_icon}>
                                        <Icon name="qr-code-scanner" size={20} color="black" />
                                    </View>
                                    <View style={styles.item_text_container}>
                                        <Text style={[styles.item_title, { color: 'white' }]}>{item.title}</Text>
                                        <Text style={styles.item_subtitle}>{item.subtitle}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Text style={[styles.list_title, { color: 'white' }]}>19 de julio</Text>
            <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 5, padding: 5 }}>
                <FlatList
                    data={dataJuly19}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DetailItemScreen', { item })}
                        >
                            <View style={styles.list_item}>
                                <View style={styles.item_container}>
                                    <View style={styles.item_icon}>
                                        <Icon name="qr-code-scanner" size={20} color="black" />
                                    </View>
                                    <View style={styles.item_text_container}>
                                        <Text style={[styles.item_title, { color: 'white' }]}>{item.title}</Text>
                                        <Text style={styles.item_subtitle}>{item.subtitle}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#3b3b3b',
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    search_container: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#3b3b3b',
    },
    search_input: {
        paddingVertical: 8,
        paddingLeft: 5,
    },
    search_icon: {
        marginLeft: 'auto',
    },
    filter_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    list_title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    list_item: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    item_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item_text_container: {
        flex: 1,
        paddingHorizontal: 8,
    },
    item_title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    item_subtitle: {
        fontSize: 14,
        color: 'gray',
    },
    item_icon: {
        backgroundColor: '#00ff9d',
        borderRadius: 100,
        padding: 5,
    },
    icon: {
        marginHorizontal: 4,
    },
});

export default QrsScreen;