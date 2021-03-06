/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import FlexDimensionsBasics from './components/FlexDimensionsBasics'
import HelloBlink from './components/HelloBlink'
import HelloImage from './components/HelloImage'
import HelloWorld from './components/HelloWorld'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

type Props = {}
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <HelloWorld />
                <HelloImage />
                <HelloBlink text={'No Children'} style={styles.bigBlue} />
                <HelloBlink text={'From Singcl:'} style={[styles.bigBlue, styles.green]}>
                    燃烧吧！你的小宇宙
                </HelloBlink>
                <FlexDimensionsBasics />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex-direction 默认是column, 而web 默认是 row
        // 主轴交叉轴相反
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: 'red',
        marginBottom: 5,
    },

    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },

    green: {
        color: 'green',
    },
})
