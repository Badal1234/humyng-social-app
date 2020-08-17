import React, {useState} from 'react';
import {View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
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
  const [textHeight, set_textHeight] = useState(12);
  const [more, set_status] = useState(true);
  const renderPrizePool = data => {
    return (
      <View>
        <View>
          <Text style={styles.prize}>Prize Pool</Text>
          <Text style={styles.rule}>Prize Rule</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {data.map(item => renderPrize(item))}
        </View>
      </View>
    );
  };
  const renderPrize = item => {
    return (
      <View style={styles.prizeContainer}>
        <View />
        <Text style={styles.position}>{item.position}</Text>
        <Text style={styles.position}>{item.prize}</Text>
      </View>
    );
  };
  const setMore = size => {
    set_status(!more);
    set_textHeight(size);
  };
  const text = 'This game is made by our developer and gamer friends';
  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.title}>Only One Win!</Text>
      </View>
      <View
        style={styles.data}
        onLayout={e => console.log(e.nativeEvent.layout.height)}>
        <Text style={styles.description}>
          {`${text.substring(0, textHeight)}`}
          {text.length >= 12 ? (
            <Text
              style={styles.more}
              onPress={() => (more ? setMore(text.length) : setMore(12))}>
              {more ? '...more' : '...less'}
            </Text>
          ) : null}
        </Text>
      </View>
      <TouchableOpacity style={styles.game}>
        <Image style={styles.logo} />
        <TouchableOpacity>
          <Text style={styles.info}>Clash Of Clan</Text>
          <Text style={styles.info}>Download it from GooglePlay</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      {renderPrizePool(data)}
      <View>
        <View>
          <Text style={styles.prize}>Tournament Rules</Text>
          <Text style={styles.description}>
            Each player should play with honesty
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InfoScreen;
