import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('screen')

const Pagination = ({ data, scrollX, index}) => {
    return (
        <View style={styles.container}>
            {data.map((_, i) => {

                const dotWidth = scrollX.interpolate({
                    inputRange: [(i - 1) * width, i * width, (i + 1) * width],
                    outputRange: [12, 30, 10],
                    extrapolate: 'clamp',
                })

                const backgroundColor = scrollX.interpolate({
                    inputRange: [(i - 1) * width, i * width, (i + 1) * width],
                    outputRange: ['#ccc', '#fff', '#ccc'],
                    extrapolate: 'clamp',
                })

                return <Animated.View key={i.toString()} style={[styles.lines, { width: dotWidth, backgroundColor },
                i === index && styles.active
                ]} />
            })}
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: -25,
        flexDirection: 'row',
        right: -60,
        width: '100%',
        justifyContent: 'center',
    },
    lines: {
        width: 15,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#e5e5e5',
    },
    active: {
        backgroundColor: '#E31E27',
    }
})
