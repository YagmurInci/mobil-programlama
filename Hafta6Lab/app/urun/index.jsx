import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export default function UrunListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Teknoloji Ürün Kataloğu</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => router.push(`/urun/${item.id}`)} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#9cbee1' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#1e293b' }
});