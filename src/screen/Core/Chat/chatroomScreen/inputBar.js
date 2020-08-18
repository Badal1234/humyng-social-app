import {InputToolbar,Composer,Actions,Send} from 'react-native-gifted-chat'
import React from 'react'
import {styles} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
export const renderComposer = (props) =>(
    <Composer {...props}     
       textInputStyle={styles.input}/>
   
)

export const renderAction =(props)=>(
  <Actions />
)

export const renderSend = (props) =>(
  <Send {...props} disabled={false} containerStyle={styles.send} >
    <Icon name={'paper-plane'} size={24} />

  </Send>

)