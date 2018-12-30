//@flow

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelloWorld = () => (
    <View>
        <Text style={styles.hello}>Hello World</Text>
    </View>
)

const styles = StyleSheet.create({
    hello: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#a3a1c4',
    },
})

export default HelloWorld
