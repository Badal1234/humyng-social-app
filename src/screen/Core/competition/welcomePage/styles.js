import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular, danceScript, galada, extralight},
} = Config;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  border: {
    borderWidth: 0.5,
    borderColor: LightGrey,
    height: moderateScale(35),
    width: '90%',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Primary,
    flex: 1,
  },
  container2: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: light,
    marginLeft: moderateScale(10),
  },
  text2: {
    color: 'white',
    opacity: 0.6,
    marginRight: moderateScale(5),
  },
  image: {
    width: width,
    height: height / 2 - moderateScale(100),
  },
  time: {
    color: 'white',
    fontFamily: PrimaryF,
  },
  name: {
    color: 'white',
    fontFamily: PrimaryF,
  },
  prize: {
    color: 'white',
    fontFamily: PrimaryF,
    opacity: 0.6,
  },
  textcontainer: {
    marginTop: moderateScale(width / 2 - 50),
    marginLeft: moderateScale(20),
  },
  headerCotainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  tabTextContainerStyle: {
    marginRight: moderateScale(10),
    marginLeft: moderateScale(10),
  },
  tabTextContainerActiveStyle: {
    borderWidth: 1,
    borderBottomColor: DarkGrey,
  },
  tabTextStyle: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
    opacity: 0.4,
    fontFamily: regular,
  },
  tabTextActiveStyle: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
    opacity: 0.9,
    fontFamily: regular,
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContiner: {
    height: height,
    padding: 10,
  },
  contentText: {
    fontSize: 13,
  },
  title: {
    color: 'white',
    fontFamily: regular,
    fontSize: moderateScale(25),
  },
  description: {
    color: '#a2afa6',
    fontFamily: light,
  },
  info: {
    color: 'white',
    fontFamily: regular,
  },
  logo: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  game: {
    flexDirection: 'row',
    borderBottomColor: '#874dc6',
    borderBottomWidth: 0.6,
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
    paddingBottom: moderateScale(10),
  },
  prize: {
    fontFamily: regular,
    fontSize: moderateScale(24),
    color: 'white',
  },
  rule: {
    color: 'white',
    opacity: 0.6,
    fontFamily: light,
  },
  prizeContainer: {
    backgroundColor: '#334761',
    height: moderateScale(40),
    marginBottom: moderateScale(5),
    width: '85%',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  position: {
    color: 'white',
    fontSize: moderateScale(16),
    marginRight: moderateScale(20),
    fontFamily: regular,
  },
  data: {
    flexDirection: 'row',
    borderBottomColor: '#874dc6',
    borderWidth: 2,
    marginTop: moderateScale(5),
  },
  more: {
    color: '#f1f3f2',
    fontSize: moderateScale(18),
  },
  playerName: {
    color: '#e1e5e2',
    fontFamily: light,
  },
  gameid: {
    color: '#c0c1bf',
    fontFamily: light,
  },
  playercontainer: {
    backgroundColor: '#7c42b3',
    borderRadius: moderateScale(5),
    borderWidth: 1,
    shadowColor: 'white',
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 200,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(70),
    width: '90%',
    marginBottom: moderateScale(20),
  },
  icon: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  adContainer: {
    width: moderateScale(width - 50),
  },
  infoContainer: {
    marginLeft: moderateScale(20),
  },
  titleContainer: {
    borderWidth: 2,
    borderBottomColor: '#874dc6',
  },
  contentText:{
    fontFamily:regular
  }
});
