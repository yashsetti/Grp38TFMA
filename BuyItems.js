import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BuyItems = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate(category+'Catalog');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Category:</Text>
      <View style={styles.buttonContainer}>
      <Button
          title="Men"
          onPress={() => navigation.navigate('MenCatalog', { category: 'men' })}
          style={styles.button}
        />
        <Button
          title="Women"
          onPress={() => navigation.navigate('WomenCatalog')}
          style={styles.button}
        />
        <Button
          title="Kids"
          onPress={() => navigation.navigate('KidsCatalog')}
          style={styles.button}
        />
        <Button
          title="Clearance"
          onPress={() => navigation.navigate('ClearanceCatalog')}
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

export default BuyItems;
