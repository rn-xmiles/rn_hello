/**
 * jsdoc How does it work in RN?
 * @flow
 * @format
 */

import React, { PureComponent } from 'react'
import { Text } from 'react-native'

type Props = { text: string, children: any }

export default class HelloBlink extends PureComponent<Props> {
    static defaultProps = {
        text: 'HelloBlink default Text',
    }

    constructor(...props) {
        super(...props)

        this.state = { isShowText: true }
        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState((previousState) => {
                return {
                    isShowText: !previousState.isShowText,
                }
            })
        }, 1000)
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        const { isShowText } = this.state
        const { text, children } = this.props
        if (!isShowText) return null
        return (
            <Text>
                {text}
                {children}
            </Text>
        )
    }
}
