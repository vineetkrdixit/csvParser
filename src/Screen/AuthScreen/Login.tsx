import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
  return (
    <View style={styles.mainBody}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  mainBody: {backgroundColor: 'red', flex: 1},
});
