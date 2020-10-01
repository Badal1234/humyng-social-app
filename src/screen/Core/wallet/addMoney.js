import React, {useState,useEffect} from 'react';
import {View, Text, TextInput,FlatList,TouchableOpacity,Alert} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {addMoney,paymentVerify} from '../../../Api/wallet'
import RazorpayCheckout from 'react-native-razorpay';

const AddMoney = () => {
  const numbers = [1,2,3,4,5,6,7,8,9,'button',0]
  const [amount, set_amount] = useState([]);

  const checkout = ({order_id, currency, amount1}) => {
    var options = {
      description: 'Add Money To Wallet',
     // image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: 'rzp_test_0eAquAvAWKjVly',
      amount: amount1,
      name: 'Arcrena',
      order_id: order_id, //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log(data)
        // handle success
        paymentVerify(data).then((a)=>console.log(a)).catch((err)=>console.log(err))
       
      })
      .catch(error => {
        set_start(false);
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };


  const submit = () => {
    console.log(Number(amount.join(''))+1)
    if(Number(amount.join('')) <= 10){
      Alert.alert('Amount Can not Be less Than 10')
    }else{
      addMoney({amount: Number(amount.join('')), currency: 'INR'})
      .then(({data})=>{
        console.log(data)
        checkout({
          order_id: data.id,
          currency: data.currency,
          amount1: data.amount,
        })
       }).catch(err=>console.log(err))

    }
  }

  const renderNumber = (item) => {
    return(
      <TouchableOpacity>
        {item === 'button'?
        <TouchableOpacity style={styles.pad} onPress={()=>submit()}>
          <Icon name={'check-circle'} size={40} color={'green'}/>
        </TouchableOpacity>
        
        :<Text style={styles.pad} onPress={()=>set_amount([...amount,item])}>{item}</Text>}
        
      </TouchableOpacity>
    )
     

  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Amount</Text>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View >
  <Text style={styles.input}>INR {amount.join('')}</Text>
          </View>
          <View>
            <FlatList data={numbers} renderItem={({item})=>renderNumber(item)} numColumns={3}/>
            <View>
              <Text style={styles.pad}>0</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddMoney;
