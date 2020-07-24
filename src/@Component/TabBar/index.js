import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Animated,
  StyleSheet,
} from 'react-native';
import Config from '@Config/default';
const {
  Colors: { Secondary},
} = Config;
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Path} from 'react-native-svg';
import * as shape from 'd3-shape';
import TabIcon from './TabIcon';
const width = Dimensions.get('window').width;
const height = 35;

const tabs = [
  {name: 'home'},
  {name: 'search'},
  {name: 'plus'},
  {name: 'bell'},
  {name: 'user-o'},
];
const tabWidth = width / tabs.length;
const tab = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)
  .curve(shape.curveBasis)([
  {x: width, y: 0},
  {x: width + 5, y: 0},
  {x: width + 10, y: 10},
  {x: width + 30, y: height},
  {x: width + tabWidth - 30, y: height},
  {x: width + tabWidth - 10, y: 10},
  {x: width + tabWidth - 5, y: 0},
  {x: width + tabWidth, y: 0},
]);
const left = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([{x: 0, y: 0}, {x: width, y: 0}]);
const right = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([
  {x: width + tabWidth, y: 0},
  {x: width * 2, y: 0},
  {x: width * 2, y: 0},
  {x: width * 2, y: width * 2},
  {x: 0, y: 0},
]);
const d = `${left} ${tab} ${right}`;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
export default function TabBar({navigation}) {
  console.log(navigation.state)
  const value = useState(new Animated.Value(-width))[0];
  return (
    <>
      <View style={{width: width, height: height}}>
        <AnimatedSvg
          width={width * 2}
          {...{height}}
          style={{transform: [{translateX: value}]}}>
          <Path {...{d}} fill={Secondary} />
        </AnimatedSvg>
        <View style={StyleSheet.absoluteFill}>
          <TabIcon
            tabs={tabs}
            value={value}
            width={width}
            tabWidth={tabWidth}
            navigation={navigation}
          />
        </View>
      </View>

      <SafeAreaView style={styles.container} />
    </>
  );
}
