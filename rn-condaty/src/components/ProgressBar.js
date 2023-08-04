import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';


const NewProgressBar = ({ progress, color }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.container_bar}>
                    <ProgressBar
                        progress={progress}
                        width={null}
                        color={color}
                        style={{
                            backgroundColor: 'gray',
                            borderWidth: 1,
                            borderColor: 'black',
                        }}
                    />
                </View>
                <View style={styles.container_text}>
                    <Text style={[styles.text, { color, fontWeight: 'bold' }]}>
                        {Math.round(progress * 100)}
                    </Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container_bar: {
        flex: 1,
        borderRadius: 10,
    },
    container_text: {
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
    },

});


export default NewProgressBar;