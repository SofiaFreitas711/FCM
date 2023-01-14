import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const ImageComponent = (props) => {
    const [largeImage, setLargeImage] = useState(false)

    return (
        <View style={styles.container}>
            {
                !largeImage ?
                    <View style={styles.smallContainer}>
                        <Image
                            source={{ uri: props.image }}
                            style={styles.smallImage}
                        />
                        <TouchableOpacity style={styles.zoomInButton} onPress={() => setLargeImage(true)}>
                            <Icon
                                name="arrowsalt"
                                size={20}
                                color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                    : 
                    <View style={styles.largeContainer}>
                        <Image
                            source={{ uri: props.image }}
                            style={styles.largeImage}
                        />
                        <TouchableOpacity style={styles.zoomOutButton} onPress={() => setLargeImage(false)}>
                            <Icon
                                name="shrink"
                                size={35}
                                color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    smallContainer: {
        position: 'absolute',
        right: 25,
        top: 55,
    },
    smallImage: {
        width: 140,
        height: 105,
        shadowOffset: { width: 0, height: 4 }, shadowColor: "rgba(0, 0, 0, 0.25)", shadowRadius: 4, shadowOpacity: 1,
        borderRadius: 11,
    },
    zoomInButton: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        position: "absolute",
        right: 0,
        bottom: 0,
        padding: 5,
        borderBottomRightRadius: 11,
    },
    largeContainer: {
        position: 'absolute',
        right: 50,
        top: 75,
        zIndex: 1,
    },
    largeImage: {
        width: 280,
        height: 205,
        shadowOffset: { width: 0, height: 4 }, shadowColor: "rgba(0, 0, 0, 0.25)", shadowRadius: 4, shadowOpacity: 1,
        borderRadius: 11,
    },
    zoomOutButton: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        position: "absolute",
        right: 0,
        bottom: 0,
        padding: 5,
        borderBottomRightRadius: 11,
    },
});

export default ImageComponent;