import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { SvgUri } from 'react-native-svg';



const {width, height} = Dimensions.get('screen');

const OnboardingItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <SvgUri uri= {item.image}
                 width={220} height={220} />
            <View style={styles.content}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
                
            </View>
        </View>
    )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
        marginVertical: 20,
        
    },
    image: {
        flex: 1,
        marginVertical: 50,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    description: {
        fontSize: 16,
        marginVertical: 12,
        color: '#000000',
        marginHorizontal: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#000000',
    }
})
