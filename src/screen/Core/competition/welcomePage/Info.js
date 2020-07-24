import React, {useEffect} from 'react';
import {View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import ExpandbleView from '@Component/ExpandView';
const data = [
  {
    position: '1st',
    prize: '60',
  },
  {
    position: '2nd',
    prize: '30',
  },
  {
    position: '3rd',
    prize: '15',
  },
];
const InfoScreen = () => {
  const renderPrize = item => {
    return (
      <View style={styles.prizeContainer}>
        <View></View>
    <Text style={styles.position}>{item.position}</Text>
       <Text style={styles.position}>{item.prize}</Text>
      </View>
    );
  };
  return (
    <View>
      <View>
        <Text style={styles.title}>Only One Win!</Text>
      </View>
      <ExpandbleView onLayout={e => console.log(e.nativeEvent.layout.height)}>
        <Text style={styles.description}>
          cybywvbwfhy vbvefuvbef vubvevfuvbef veub efub vueb eub uvbeufb e
        </Text>
      </ExpandbleView>
      <TouchableOpacity style={styles.game}>
        <Image style={styles.logo} />
        <TouchableOpacity>
          <Text style={styles.info}>Clash Of Clan</Text>
          <Text style={styles.info}>Download it from GooglePlay</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View>
        <View>
        <Text style={styles.prize}>Prize Pool</Text>
        <Text style={styles.rule}>Prize Rule</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>{data.map(item => renderPrize(item))}</View>
      </View>
    </View>
  );
};

export default InfoScreen;
