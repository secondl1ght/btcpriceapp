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
    if (calcValue !== "") {
      priceCallback();
    } else {
      setBTCPrice("---");
    }
  }, [calcValue, currency]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.price}>
          {btcprice}
        </Text>
        <View
          style={{
            flex: 0.25,
            justifyContent: "center",
            alignSelf: "center",
            paddingTop: 100,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignSelf: "center",
              paddingTop: 50,
            }}
          >
            <TextInput
              autoFocus={true}
              placeholder="21 000 000"
              keyboardType="number-pad"
              maxLength={8}
              returnKeyLabel="Convert"
              style={{
                color: "black",
                fontSize: 20,
                textAlign: "center",
                backgroundColor: "#F7931A",
                padding: 10,
                borderRadius: 5,
                height: 50,
              }}
              onChange={(e) => {
                setCalcValue(e.nativeEvent.text);
              }}
            />
          </View>
          <View style={{ height: 35, paddingTop: 25, paddingBottom: 100 }}>
            <Picker
              selectedValue={currency}
              onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
              mode='dropdown'
            >
              <Picker.Item label="AUD" value="AUD" />
              <Picker.Item label="BRL" value="BRL" />
              <Picker.Item label="CAD" value="CAD" />
              <Picker.Item label="CHF" value="CHF" />
              <Picker.Item label="CLP" value="CLP" />
              <Picker.Item label="CNY" value="CNY" />
              <Picker.Item label="CZK" value="CZK" />
              <Picker.Item label="DKK" value="DKK" />
              <Picker.Item label="EUR" value="EUR" />
              <Picker.Item label="GBP" value="GBP" />
              <Picker.Item label="HKD" value="HKD" />
              <Picker.Item label="HRK" value="HRK" />
              <Picker.Item label="HUF" value="HUF" />
              <Picker.Item label="INR" value="INR" />
              <Picker.Item label="ISK" value="ISK" />
              <Picker.Item label="JPY" value="JPY" />
              <Picker.Item label="KRW" value="KRW" />
              <Picker.Item label="NZD" value="NZD" />
              <Picker.Item label="PLN" value="PLN" />
              <Picker.Item label="RON" value="RON" />
              <Picker.Item label="RUB" value="RUB" />
              <Picker.Item label="SEK" value="SEK" />
              <Picker.Item label="SGD" value="SGD" />
              <Picker.Item label="THB" value="THB" />
              <Picker.Item label="TRY" value="TRY" />
              <Picker.Item label="TWD" value="TWD" />
              <Picker.Item label="USD" value="USD" />
            </Picker>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            flex: 0.25,
            paddingTop: 15,
          }}
        >
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
    backgroundColor: "#3363A8",
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
    backgroundColor: "lightblue",
    borderRadius: 5,
    padding: 5,
  },
});
