import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "react-native";
import { getBTCPrice } from "../api/api";
import { satoshi } from "../satoshi";
import "intl";
import "intl/locale-data/jsonp/en";

export function calcScreen() {
  const [btcprice, setBTCPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [calcValue, setCalcValue] = useState(0);

  const priceCallback = useCallback(
    async function () {
      let price = await getBTCPrice(currency);
      let priceCalc = parseFloat(price) * parseFloat(calcValue);
      const options = { style: "currency", currency: currency };
      const numberFormat = new Intl.NumberFormat("en-US", options);
      setBTCPrice(numberFormat.format(priceCalc));
    },
    [btcprice, currency, calcValue]
  );

  useEffect(() => {
    priceCallback();
  }, [calcValue, currency]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.price}>
          {btcprice} {currency}
        </Text>
        <View
          style={{
            flex: 0.25,
            justifyContent: "center",
            alignSelf: "center",
            paddingTop: 100,
          }}
        >
          <TextInput
            autoFocus={true}
            placeholder="21 000 000"
            keyboardType="number-pad"
            maxLength={21000000}
            returnKeyLabel="Convert"
            style={{
              color: "black",
              fontSize: 20,
              textAlign: "center",
              backgroundColor: "#F7931A",
              padding: 10,
              borderRadius: 5,
            }}
            onChange={(e) => {
              setCalcValue(e.nativeEvent.text);
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
        </View>
        <Text style={{ textAlign: "center", flex: 0.25, paddingTop: 15 }}>
          Convert any amount of BTC into a fiat value.
        </Text>

        <Text style={styles.sat}>{satoshi() + " - Satoshi Nakamoto"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 35,
    textAlign: "center",
    backgroundColor: "lightgreen",
    borderRadius: 5,
  },
  sat: {
    textAlign: "center",
    fontStyle: "italic",
    color: "black",
    backgroundColor: "antiquewhite",
  },
});
