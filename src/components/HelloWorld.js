//@flow

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

export default class HelloWorld extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.hello}>Hello World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hello: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#a3a1c4',
    },
})
