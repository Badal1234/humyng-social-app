import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import propTypes from 'prop-types';
import Config from '@Config/default';
import {isParticpate} from '../../Api/tournament';
const {
  Colors: {Primary, Secondary},
} = Config;
function UCButton({onPress, text1, text2, tournament_id,status}) {
  const [join, set_join] = useState(false);
  console.log(tournament_id)
  useEffect(() => {
    isParticpate({tournament_id: tournament_id})
      .then(data => set_join(data.participate))
      .catch(err => console.log(err));
  }, [tournament_id,status]);
  console.log(join)

  return (
    <TouchableOpacity onPress={onPress} style={styles.button} disabled={join}>
      <LinearGradient
        colors={['#d02f48', '#714cd1']}
        end={{x: 0.8, y: 0.9}}
        start={{x: 0.8, y: 0.9}}
        style={styles.container}>
        <Text style={styles.text}>{join ? text2 : text1}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

UCButton.propTypes = {
  buttontext: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

export default UCButton;
