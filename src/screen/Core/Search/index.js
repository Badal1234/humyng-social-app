import React from 'react';
import {View, Text,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './styles'
export default function Home() {
  return (
    <View>
        <View style={styles.searchcont}>
          <View style={{justifyContent:'center'}}>
          <Icon name={'search'} size={18}/>
          </View>
          <TextInput style={styles.search} placeholder={'search'}/>
          

        </View>
        <View>

        </View>
 
    </View>
  );
}


