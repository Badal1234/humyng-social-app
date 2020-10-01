import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {walletDetails} from '../../../Api/wallet';
const WalletScreen = ({navigation}) => {
  const [wallet_data, set_data] = useState({});
  useEffect(() => {
    walletDetails()
      .then(data => set_data(data))
      .catch(err => console.log(err));
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View>
          <Text style={styles.text1}>Balance</Text>
  <Text style={styles.text2}>{wallet_data.wallet_amount}</Text>
        </View>
        <View>
          <Text style={styles.text1}>Earnings</Text>
          <Text style={styles.text2}>{wallet_data.earning_amount}</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.text1}>Withdraw Earnings</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddMoney')}>
        <Text style={styles.text1}>Add money to Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletScreen;
