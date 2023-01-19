import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const NewsItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: item.image}}
                 style={[styles.image, {
                }]} />
            <View style={styles.content}>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
        borderRadius: 15,
        width: 240,
        height: 240,
        
    },
    image: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    content: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 15,
        right: 70,
        zIndex: 1,
        alignItems: 'flex-start',
    },
    type: {
        fontSize: 22,
        fontWeight: '550',
        color: '#E31E27',
        letterSpacing: 0.092,
        marginBottom: -5,
        textTransform: 'uppercase'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginVertical: 2,
        letterSpacing: -0.408,
        color: 'white'
    }
})
