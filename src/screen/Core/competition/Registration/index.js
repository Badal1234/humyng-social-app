import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import {moderateScale} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import ToogleButton from '@Component/ToogleButton';
import Button from '@Component/Button';
import Config from '@Config/default';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {Storage} from 'aws-amplify';
import * as competitionActions from '@Actions/competition.action';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular, danceScript, galada, extralight},
} = Config;

const currencyList = ['INR', 'USD', 'EUR'];

const RegistrationScreen = ({
  isError,
  isLoading,
  isSuccess,
  RegisterTournament,
  username,
}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [prize, set_prize] = useState(false);
  const [visible, set_visible] = useState(false);
  const [currency, set_currency] = useState('INR');
  const [payment, set_payment] = useState(false);
  const [prizeAmount, set_prizeAmount] = useState('');
  const [firstName, set_firstName] = useState('');
  const [firstAmount, setfirstAmount] = useState('');
  const [secondName, setsecondName] = useState('');
  const [secondAmount, setsecondAmount] = useState('');
  const [thirdName, setthirdName] = useState('');
  const [thirdAmount, setThirdAmount] = useState('');
  const [loading, set_loading] = useState(false);
  const [blob, set_blob] = useState(null);
  const [name, set_name] = useState('');
  const [title, set_title] = useState('');
  const [description, set_description] = useState('');
  const [rule, set_rule] = useState('');
  const [payment_info, set_payment_info] = useState('');

  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  useEffect(() => {
    console.log(isError);
    console.log(isSuccess);
  });

  const submit = async () => {
    const key = await uploadToFirebase(blob);

    RegisterTournament({
      name: name,
      title: title,
      description: description,
      time: date,
      rule: rule,
      prize_pool: prize,
      prize_amount: prizeAmount,
      currency: currency,
      payment_info: payment_info,
      prize: [
        {first_prize_name: firstName, first_prize_amount: firstAmount},
        {second_prize_name: secondName, second_prize_amount: secondAmount},
        {third_prize_name: thirdName, third_prize_amount: thirdAmount},
      ],
      poster_key: key,
    });
  };
  console.log(prize);
  const chooseGallry = () => {
    ImagePicker.launchImageLibrary(options, async response => {
      // Same code as in above section!
      console.log('Response = ', response);

      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        // console.log(response.uri);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        const file = response.uri.substring(response.uri.lastIndexOf('/') + 1);
        const blob = await fetch(response.uri).then(uri => uri.blob());
        set_blob(blob);
      }
    });
  };

  const uploadToFirebase = blob1 => {
    console.log(blob1);
    return new Promise((resolve, reject) => {
      Storage.put(
        `/competition/${username}/${new Date().toISOString()}.jpeg`,
        blob1,
        {
          level: 'protected',
          contentType: 'image/jpeg',
        },
      )
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  const pick = async () => {
    try {
      request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
        .then(async result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              console.log(
                'The permission has not been requested / is denied but requestable',
              );
              break;
            case RESULTS.GRANTED:
              console.log('The permission is granted');
              chooseGallry();
              break;
            case RESULTS.BLOCKED:
              console.log(
                'The permission is denied and not requestable anymore',
              );
              break;
          }
        })
        .catch(error => {
          // …
        });
    } catch {}
  };

  const prizePool = () => {
    return (
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Prize Amount'}
            placeholderTextColor={'#ddccef'}
            onChangeText={text => set_prizeAmount(text)}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.input,
            {
              height: moderateScale(50),
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={() => set_visible(true)}>
          <Text style={styles.prize}>{currency}</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.prize} />
          {/*  <View>
            <ToogleButton set_prize={set_payment} />
          </View>
       */}
        </View>
        <View>{payment ? usPayment() : selfPayment()}</View>
        {prizeDistribute()}
      </View>
    );
  };

  const prizeDistribute = () => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {width: moderateScale(120)}]}
            placeholder={'1st Prize Name'}
            placeholderTextColor={'#ddccef'}
            keyboardType={'numeric'}
            onChangeText={text => set_firstName(text)}
          />
          <TextInput
            style={[
              styles.input,
              {width: moderateScale(120), marginLeft: moderateScale(50)},
            ]}
            placeholder={'Prize Amount'}
            placeholderTextColor={'#ddccef'}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {width: moderateScale(120)}]}
            placeholder={'2nd Prize Name '}
            placeholderTextColor={'#ddccef'}
            keyboardType={'numeric'}
          />
          <TextInput
            style={[
              styles.input,
              {width: moderateScale(120), marginLeft: moderateScale(50)},
            ]}
            placeholder={'Prize Amount'}
            placeholderTextColor={'#ddccef'}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {width: moderateScale(120)}]}
            placeholder={'3rd Prize Name'}
            placeholderTextColor={'#ddccef'}
            keyboardType={'numeric'}
          />
          <TextInput
            style={[
              styles.input,
              {width: moderateScale(120), marginLeft: moderateScale(50)},
            ]}
            placeholder={'Prize Amount'}
            placeholderTextColor={'#ddccef'}
            keyboardType={'numeric'}
            onChangeText={text => setThirdAmount(text)}
          />
        </View>
      </View>
    );
  };

  const selfPayment = () => {
    return (
      <View>
        <View>
          <TextInput
            style={[styles.input, {height: moderateScale(120)}]}
            placeholder={'Mention Payment Information'}
            placeholderTextColor={'#ddccef'}
            multiline={true}
            onChangeText={text => set_payment_info(text)}
          />
        </View>
      </View>
    );
  };
  const usPayment = () => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Player Amount'}
          placeholderTextColor={'#ddccef'}
        />
      </View>
    );
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
    console.log(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: moderateScale(20),
          backgroundColor: Primary,
        }}>
        <Text style={styles.header}>Registration</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.poster} onPress={pick}>
          <Icon name={'upload'} color={'#874dc6'} size={24} />
          <Text style={styles.text}>Upload Your Poster</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Match Name'}
          placeholderTextColor={'#ddccef'}
          onChangeText={text => set_name(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Match Title'}
          placeholderTextColor={'#ddccef'}
          onChangeText={text => set_title(text)}
        />
      </View>
      <View>
        <TextInput
          style={[styles.input, {height: moderateScale(120)}]}
          placeholder={'Match Description'}
          placeholderTextColor={'#ddccef'}
          multiline={true}
          onChangeText={text => set_description(text)}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.input,
          {height: moderateScale(50), justifyContent: 'center'},
        ]}
        onPress={showDatepicker}>
        <Text style={styles.text}>Match Date</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.input,
          {height: moderateScale(50), justifyContent: 'center'},
        ]}
        onPress={showTimepicker}>
        <Text style={styles.text}>Match Time</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Match  Rules'}
          multiline={true}
          placeholderTextColor={'#ddccef'}
          onChangeText={text => set_rule(text)}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.prize}>Prize Pool</Text>
        <View>
          <ToogleButton set_prize={set_prize} />
        </View>
      </View>
      <View>{prize ? prizePool() : null}</View>
      <View style={{marginTop: moderateScale(20)}}>
        <Button text={'submit'} onPress={submit} />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Modal
        isVisible={visible}
        onBackButtonPress={() => set_visible(!visible)}
        onBackdropPress={() => set_visible(!visible)}>
        <View style={styles.modal}>
          <ScrollView>
            {currencyList.map(item => (
              <TouchableOpacity>
                <Text style={styles.currency}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.tournament.isLoading,
    isError: state.tournament.isError,
    isSuccess: state.tournament.isSuccess,
    username: state.auth.username,
  };
};
const mapDispatchToProp = dispatch => ({
  RegisterTournament: userData =>
    dispatch(competitionActions.RegisterTournament(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(RegistrationScreen);
