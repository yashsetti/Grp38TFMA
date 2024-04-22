import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Item from './Item';

const MenCatalog = () => {
  // Logic to fetch or display men's catalog items
  const items = [
    {
      id: 1,
      imageUrl: 'C:/Users/tejas/Downloads/SwapDrobe/assets/Mens/men1.jpg',
      title: 'Men\'s Shirt',
      availableSizes: ['S', 'M', 'L', 'XL'],
      prices: {
        S: 20,
        M: 25,
        L: 30,
        XL: 35
      }
    },
    {
      id: 2,
      imageUrl: 'C:/Users/tejas/Downloads/SwapDrobe/assets/Mens/men3.jpg',
      title: 'Women\'s Dress',
      availableSizes: ['XS', 'S', 'M', 'L'],
      prices: {
        XS: 40,
        S: 45,
        M: 50,
        L: 55
      }
    },
    {
      id: 3,
      imageUrl: 'C:/Users/tejas/Downloads/SwapDrobe/assets/Mens/men1.jpg',
      title: 'Men\'s Jeans',
      availableSizes: ['28', '30', '32', '34'],
      prices: {
        28: 45,
        30: 50,
        32: 55,
        34: 60
      }
    },
    {
      id: 4,
      imageUrl: 'C:/Users/tejas/Downloads/SwapDrobe/assets/Mens/men1.jpg',
      title: 'Women\'s Skirt',
      availableSizes: ['S', 'M', 'L'],
      prices: {
        S: 30,
        M: 35,
        L: 40
      }
    },
    {
      id: 5,
      imageUrl: 'C:/Users/tejas/Downloads/SwapDrobe/assets/Mens/men1.jpg',
      title: 'Men\'s T-Shirt',
      availableSizes: ['S', 'M', 'L'],
      prices: {
        S: 15,
        M: 20,
        L: 25
      }
    },
    // {
    //   id: 6,
    //   imageUrl: 'https://example.com/item6.jpg',
    //   title: 'Women\'s Blouse',
    //   availableSizes: ['S', 'M', 'L'],
    //   prices: {
    //     S: 25,
    //     M: 30,
    //     L: 35
    //   }
    // },
    // {
    //   id: 7,
    //   imageUrl: 'https://example.com/item7.jpg',
    //   title: 'Men\'s Jacket',
    //   availableSizes: ['S', 'M', 'L', 'XL'],
    //   prices: {
    //     S: 60,
    //     M: 65,
    //     L: 70,
    //     XL: 75
    //   }
    // },
    // {
    //   id: 8,
    //   imageUrl: 'https://example.com/item8.jpg',
    //   title: 'Women\'s Coat',
    //   availableSizes: ['S', 'M', 'L', 'XL'],
    //   prices: {
    //     S: 70,
    //     M: 75,
    //     L: 80,
    //     XL: 85
    //   }
    // },
    // {
    //   id: 9,
    //   imageUrl: 'https://example.com/item9.jpg',
    //   title: 'Men\'s Shorts',
    //   availableSizes: ['S', 'M', 'L'],
    //   prices: {
    //     S: 25,
    //     M: 30,
    //     L: 35
    //   }
    // },
    // {
    //   id: 10,
    //   imageUrl: 'https://example.com/item10.jpg',
    //   title: 'Women\'s Jeans',
    //   availableSizes: ['24', '26', '28', '30'],
    //   prices: {
    //     24: 50,
    //     26: 55,
    //     28: 60,
    //     30: 65
    //   }
    // }
  ];  

  const handleAddToCart = (item, size) => {
    // Implement your logic to add item to cart
    console.log(`Added item "${item.title}" with size "${size}" to cart`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {items.map((item) => (
        <Item key={item.id} item={item} onAddToCart={handleAddToCart} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20, // Add padding to allow scrolling past the last item
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MenCatalog;
