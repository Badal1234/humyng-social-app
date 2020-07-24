import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import DesignButton from '@Component/designButton';
import {styles} from './styles';
const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require('../../../../static/index.jpeg')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.time}>Today, 19:00</Text>
            <Text style={styles.name}>Pro league major Week Cup</Text>
            <Text style={styles.prize}>1vs all PrizePool 120$</Text>
          </View>
        </ImageBackground>

        <View style={styles.container2}>
          <View>
            <DesignButton text={'Participate for 1 ticket'} />
          </View>
          <View style={styles.border}>
            <Text style={styles.text}>You have 4 tickets</Text>
            <Text style={styles.text2}>Buy more ></Text>
          </View>
        </View>
      </View>
      <View>
        <View>
          <ScrollView>
            <View>
              <Text>Title of tournamnet</Text>
              <Text>Description of Tournamnet</Text>
            </View>
            <View />
            <View>
              <Text>Prize Pool</Text>
              <Text>Prize Rules</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default WelcomePage;
