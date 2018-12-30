//@flow

import React from 'react'
import { StyleSheet, Text } from 'react-native'

const HelloWorld = () => <Text style={styles.hello}>Hello World</Text>

const styles = StyleSheet.create({
    hello: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#a3a1c4',
    },
})

export default HelloWorld
