import {InputToolbar,Composer,Actions,Send} from 'react-native-gifted-chat'
import React from 'react'
import {styles} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {View} from 'react-native'

const renderOptions = () => {
  return (
    <View style={styles.option}>


    </View>
  )
}
export const renderComposer = (props) =>(
    <Composer {...props}     
       textInputStyle={styles.input}/>
   
)

export const renderAction =(props)=>(
  <Actions {...props} 
  icon={()=><Icon name={'plus'} size = {24} color={'black'}/>}
  onPressActionButton={renderOptions} />
)

export const renderSend = (props) =>(
  <Send {...props} disabled={false} containerStyle={styles.send} >
    <Icon name={'paper-plane'} size={24} />

  </Send>

)