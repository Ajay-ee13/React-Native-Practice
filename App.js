import React from "react";
import { useState, useEffect } from "react";
import { Text, View, Alert, ActivityIndicator } from "react-native";
import Styles from "./App.styles";


const App = () => {
  return(
    <View style={Styles.root}>
      <Text style={Styles.title} >Which of these is the glass</Text>
    </View>
  )

};

export default App;
