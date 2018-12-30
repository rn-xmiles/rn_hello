import React, { PureComponent } from 'react'
import { Image } from 'react-native'

export default class HelloImage extends PureComponent {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        }

        return <Image source={pic} style={{ width: 193, height: 110 }} />
    }
}
