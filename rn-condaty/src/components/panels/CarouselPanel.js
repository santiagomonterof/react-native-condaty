import React, { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

const carouselData = require('../../../assets/carousel.json');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

export default function CarouselPanel() {
    const flatListRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewRef = useRef(({ changed }) => {
        if (changed[0].isViewable) {
            setCurrentIndex(changed[0].index);
        }
    });


    const scrollToIndex = (index) => {
        flatListRef.current?.scrollToIndex({ animated: true, index });
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => console.log('clicked')} activeOpacity={1}>
                <Image source={{ uri: item.url }} style={styles.image} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={carouselData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={flatListRef}
                style={styles.carousel}
                viewabilityConfig={viewConfigRef}
                onViewableItemsChanged={onViewRef.current}
            />

            <View style={styles.dot_view}>
                {carouselData.map((_, index) => (
                    <TouchableOpacity
                        key={index.toString()}
                        style={[
                            styles.circle,
                            { backgroundColor: index === currentIndex ? '#00ff9d' : 'grey' },
                        ]}
                        onPress={() => scrollToIndex(index)}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3b3b3b',
    },

    image: {
        width: 176.8,
        height: 120,
        resizeMode: 'cover',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    dot_view: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginHorizontal: 5,
    },
});