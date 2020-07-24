import React, {Fragment, useState, useEffect} from 'react';
import {View, TouchableWithoutFeedback, Animated,BackHandler} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Config from '@Config/default';
import LinearGradient from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation';
const {
  Colors: {Primary, Secondary},
} = Config;
function TabIcon({tabs, value, width, tabWidth, navigation}) {
  const value1 = tabs.map(
    (tab, index) => useState(new Animated.Value(index === 0 ? 1 : 0))[0],
  );
  console.log(value1);

  const onpress = (index, routeName) => {
      navigation.navigate(routeName);
  };

  useEffect(() => {
    var index = navigation.state.index;
    console.log(index);
    // do something
    Animated.sequence([
      ...value1.map(value2 =>
        Animated.timing(value2, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ),
      Animated.parallel([
        Animated.spring(value1[index], {
          toValue: 0.7,
          useNativeDriver: true,
        }),
        Animated.spring(value, {
          toValue: -width + tabWidth * index,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [navigation, tabWidth, value, value1, width]);

  console.log(navigation.state.routes[navigation.state.index].routeName);
  return (
    <View style={styles.container2}>
      {navigation.state.routes.map(({routeName}, index) => {
        const activeValue = value1[index];
        const translateY = activeValue.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        });
        const opacity = value.interpolate({
          inputRange: [
            -width + tabWidth * (index - 1),
            -width + tabWidth * index,
            -width + tabWidth * (index + 1),
          ],
          outputRange: [1, 0, 1],
          extrapolate: 'clamp',
        });
        return (
          <Fragment key={index}>
            <TouchableWithoutFeedback onPress={() => onpress(index, routeName)}>
              <Animated.View style={[styles.tab, {opacity: opacity}]}>
                <Icon name={tabs[index].name} size={15} color={'white'} />
              </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={{
                position: 'absolute',
                top: -50,
                width: tabWidth,
                height: tabWidth,
                left: tabWidth * index,
                height: tabWidth,
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{translateY}],
              }}>
              <View>
                <LinearGradient
                  colors={[Primary, Secondary]}
                  end={{x: 0.8, y: 0.5}}
                  start={{x: 0.2, y: 0.8}}
                  style={styles.active}>
                  <Icon name={tabs[index].name} size={15} color={'white'} />
                </LinearGradient>
              </View>
            </Animated.View>
          </Fragment>
        );
      })}
    </View>
  );
}

export default withNavigation(TabIcon);
