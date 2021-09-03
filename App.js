import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBTCPrice } from './api';
import {Picker} from '@react-native-picker/picker';

export default function App() {

  const [btcprice, setBTCPrice] = useState('');
  const [currency, setCurrency] = useState('USD');

  const priceCallback = useCallback(async function() {
    let price = await getBTCPrice(currency);
    const options = { style: 'currency', currency: currency };
    const numberFormat = new Intl.NumberFormat('en-US', options);
    setBTCPrice(numberFormat.format(price) + currency);
  }, [btcprice, currency]);

  useEffect(() => {priceCallback()}, []);

  return (
    <View style={styles.container}>
      <Text>{btcprice}</Text>
      <Picker
      selectedValue={currency}
      onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}>
      <Picker.Item label="USD" value="USD" />
      <Picker.Item label="GDP" value="GBP" />
      <Picker.Item label="EUR" value="EUR" />
      </Picker>
      <Button title='Get Price' onPress={priceCallback}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
