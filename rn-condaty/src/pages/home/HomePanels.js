import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProgressBar from '../../components/ProgressBar';
import CarouselPanel from '../../components/panels/CarouselPanel';


const HomePanels = () => {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <View style={[styles.row, styles.row_acces]}>
                    <View style={styles.row_info}>
                        <View style={styles.row_icon}>
                            <Icon name="send-to-mobile" size={20} color="#05EF55" />
                        </View>
                        <View style={styles.row_text}>
                            <Text style={[styles.row_text_title, { color: '#05EF55' }]}>67 accesos</Text>
                            <Text style={[styles.row_text_subtitle, { color: '#3b3b3b' }]}>en los últimos 7 días</Text>
                        </View>
                    </View>
                    <Text style={styles.acces_title}>Resumen de accesos</Text>
                    <View style={styles.acces_data}>
                        <View style={styles.acces_row}>
                            <Text style={styles.acces_text}>Completados</Text>
                            <Text style={styles.acces_number}>67</Text>
                        </View>
                        <View style={styles.acces_row}>
                            <Text style={styles.acces_text}>Cancelados</Text>
                            <Text style={styles.acces_number}>5</Text>
                        </View>
                        <View style={styles.acces_row}>
                            <Text style={styles.acces_text}>Pendientes</Text>
                            <Text style={styles.acces_number}>4</Text>
                        </View>
                        <View style={styles.acces_row}>
                            <Text style={styles.acces_text}>Pedidos</Text>
                            <Text style={styles.acces_number}>15</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.row, styles.row_photos]}>
                    <CarouselPanel />
                </View>
            </View>
            <View style={styles.column}>
                <View style={[styles.row, styles.row_invitations]}>
                    <View style={styles.row_info}>
                        <View style={styles.row_icon}>
                            <Icon name="qr-code-2" size={20} color="#F47575" />
                        </View>
                        <View style={styles.row_text}>
                            <Text style={[styles.row_text_title, { color: '#F47575' }]}>2 invitaciones</Text>
                            <Text style={[styles.row_text_subtitle, { color: '#3b3b3b' }]}>en los últimos 7 días</Text>
                        </View>
                    </View>
                    <Text style={styles.progress_text}>Individual</Text>
                    <ProgressBar progress={0.28} color={'#F47575'} />
                    <Text style={styles.progress_text}>Grupal</Text>
                    <ProgressBar progress={0.06} color={'#F47575'} />
                </View>
                <View style={[styles.row, styles.row_reservations]}>
                    <View style={styles.row_info}>
                        <View style={styles.row_icon}>
                            <Icon name="date-range" size={20} color="#0094FF" />
                        </View>
                        <View style={styles.row_text}>
                            <Text style={[styles.row_text_title, { color: '#0094FF' }]}>2 reservaciones</Text>
                            <Text style={[styles.row_text_subtitle, { color: '#3b3b3b' }]}>en los últimos 7 días</Text>
                        </View>
                    </View>
                    <Text style={styles.progress_text}>Club House</Text>
                    <ProgressBar progress={1} color={'#0094FF'} />
                    <Text style={styles.progress_text}>Piscina</Text>
                    <ProgressBar progress={0.04} color={'#0094FF'} />
                </View>
                <View style={[styles.row, styles.row_mettings]}>
                    <View style={styles.row_info}>
                        <View style={styles.row_icon}>
                            <Icon name="class" size={20} color="#CCFF00" />
                        </View>
                        <View style={styles.row_text}>
                            <Text style={[styles.row_text_title, { color: '#CCFF00' }]}>Crear Reunión</Text>
                            <Text style={[styles.row_text_subtitle, { color: '#3b3b3b' }]}>No tienes reuniones</Text>
                        </View>
                    </View>
                    <Text style={styles.progress_text}>General</Text>
                    <ProgressBar progress={0.7} color={'#CCFF00'} />
                    <Text style={styles.progress_text}>Directiva</Text>
                    <ProgressBar progress={0.14} color={'#CCFF00'} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 30,
        width: '100%',
    },
    column: {
        width: '50%',
        alignItems: 'center',
    },
    row: {
        width: '90%',
        height: 125,
        backgroundColor: 'black',
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
    },
    progress_text: {
        color: 'white',
        fontSize: 9,
    },
    row_info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    row_icon: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#3b3b3b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row_text: {
        marginLeft: 10,
    },
    row_text_title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    row_text_subtitle: {
        fontSize: 8,
    },


    row_acces: {
        height: 265,
    },
    acces_title: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    acces_data: {
        width: '100%',
    },
    acces_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    acces_text: {
        color: '#3b3b3b',
        fontSize: 9,
    },
    acces_number: {
        color: '#00ff9d',
        fontSize: 9,
    },

    row_photos: {
        width: '90%',
        height: 140,
        padding: 0,
    },


});

export default HomePanels;

