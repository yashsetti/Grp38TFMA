import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swap Drobe</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Buy"
          onPress={() => navigation.navigate('BuyItems')}
          style={styles.button}
        />
        <Button
          title="Sell"
          onPress={() => navigation.navigate('SellItems')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    width: '45%',
  },
});

export default HomeScreen;
