import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { getBTCPrice } from "../api/api";
import { Picker } from "react-native";
import { satoshi } from "../satoshi";
import "intl";
import "intl/locale-data/jsonp/en";

export function priceScreen() {
  const [btcprice, setBTCPrice] = useState("Loading...");
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);

  const priceCallback = useCallback(
    async function () {
      setLoading(true);
      let price = await getBTCPrice(currency);
      const options = { style: "currency", currency: currency };
      const numberFormat = new Intl.NumberFormat("en-US", options);
      setLoading(false);
      setBTCPrice(numberFormat.format(price));
    },
    [btcprice, currency]
  );

  useEffect(() => {
    priceCallback();
  }, [currency]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1.5, justifyContent: "center" }}>
        <Text style={styles.price}>{btcprice}</Text>
        <View style={{ flex: 0.25, justifyContent: "center", paddingTop: 100 }}>
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
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
        <Button
          title="Get Price"
          onPress={priceCallback}
          color="#F7931A"
          disabled={loading ? true : false}
        />
      </View>
      <View style={{ paddingBottom: 75 }}>
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
