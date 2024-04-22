import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Picker from 'react-native-picker';

const Item = ({ item, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(item.availableSizes[0]);

  const handleAddToCart = () => {
    onAddToCart(item, selectedSize);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />

      <Text style={styles.title}>{item.title}</Text>
      {/* <Picker
        selectedValue={selectedSize}
        style={styles.sizePicker}
        onValueChange={(itemValue) => setSelectedSize(itemValue)}
      >
        {item.availableSizes.map((size) => (
          <Picker.Item key={size} label={size} value={size} />
        ))}
      </Picker> */}
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sizePicker: {
    width: 100,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Item;
