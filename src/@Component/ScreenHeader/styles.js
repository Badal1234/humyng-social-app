import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet} from 'react-native';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font:{PrimarF}
} = Config;


export const styles = StyleSheet.create({
    name:{
        fontFamily:'Marcellus-Regular',
        fontSize:40,
        fontWeight:'900'
    },
    container:{
        marginLeft:moderateScale(20),
        marginTop:moderateScale(20)
    }
})