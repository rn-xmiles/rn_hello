/**
 * @flow
 */
import React, { PureComponent } from 'react'
import { View } from 'react-native'

export default class FlexDimensionsBasics extends PureComponent {
    render() {
        return (
            // 试试去掉父View中的`flex: 1`。
            // 则父View不再具有尺寸，因此子组件也无法再撑开。
            // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
            // 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，也没有设定flex，
            // 则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
            // @see http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
            // 由于父元素设置了alignItems: center, 所以这个设置alignSelf: 'stretch'才能正常显示
            <View style={{ flex: 1, /* width: 300, 或者 */ alignSelf: 'stretch' }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
            </View>
        )
    }
}
