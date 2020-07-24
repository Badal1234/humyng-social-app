import React from 'react'
import {View,Text,SafeAreaView} from 'react-native'
import { styles } from './styles'

export default function ScreenHeader({...props}){
    const {name,navigation} = props
    console.log(navigation)
 
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

        </SafeAreaView>
    )
}