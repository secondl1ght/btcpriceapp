import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getBTCPrice } from "../api/api";
import { satoshi } from '../satoshi';

export function calcScreen() {
  const [btcprice, setBTCPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [calcValue, setCalcValue] = useState(0);

  const priceCallback = useCallback(
    async function () {
      let price = await getBTCPrice(currency);
      let priceCalc = price * calcValue;
      const options = { style: "currency", currency: currency };
      const numberFormat = new Intl.NumberFormat("en-US", options);
      setBTCPrice(numberFormat.format(priceCalc) + " " + currency);
    },
    [btcprice, currency, calcValue]
  );

  useEffect(() => {
    priceCallback();
  }, [calcValue, currency]);

  return (
    <View style={styles.container}>
      <Text>{btcprice}</Text>
      <TextInput
        autoFocus={true}
        placeholder="Convert any amount of BTC into a fiat value."
        keyboardType="number-pad"
        maxLength={21000000}
        returnKeyLabel="Convert"
        textAlign="Center"
        onChange={(e) => {
          setCalcValue(e.target.value);
        }}
      />
      <Picker
        selectedValue={currency}
        onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="GDP" value="GBP" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>
      <Text>{satoshi() + ' - Satoshi Nakamoto'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
