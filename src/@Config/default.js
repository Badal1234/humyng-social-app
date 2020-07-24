import {Platform} from 'react-native';

import {name, version} from '../../package.json';

const env = process.env.NODE_ENV;

const setEnv = env === 'development';

export default {
  //CACHE KEY FOR THE APP
  UCCaccheKeyStore: 'UCLibReduxStore',
  key: 'OYzoL53p_hXc9DkZm7oHHbQhaqRuuq9x5IjHb6vWJ7Y',
  //LNCORE PATH
  BASE_PATH: setEnv
    ? 'https://u2mer2n3nb.execute-api.ap-south-1.amazonaws.com/dev'
    : 'https://u2mer2n3nb.execute-api.ap-south-1.amazonaws.com/dev',

  USER_AGENT: `${name}/${version} Dalvik/${version} (Unix; U; ${
    Platform.OS === 'ios' ? 'Ios' : 'Android'
  } ;  Build/)`,

  Colors: {
    Primary: '#0a0a28',
    Secondary: '#161669',
    Black: '#131313',
    DarkGrey: '#696969',
    LightGrey: '#969696',
    LightWhite: '#E5E5E5',
  },
  font: {
    PrimaryF: 'Mitr-SemiBold',
    light: 'Mitr-Light',
    medium: 'Mitr-Medium',
    regular: 'Mitr-Regular',
    extralight: 'Mitr-ExtraLight',
    danceScript: 'DancingScript-VariableFont_wght',
    galada: 'Galada-Regular',
    great: 'GreatVibes-Regular',
    indie: 'IndieFlower-Regular',
    icon: 'Ionicons',
    kalam: 'Kalam-Regular',
    lobster: 'Lobster-Regular',
    quicksand: 'Quicksand-VariableFont_wght',
  },
};
