import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export default function UrunListesi() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teknoloji Ürün Kataloğu</Text>
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
  container: { flex: 1, padding: 16, backgroundColor: '#f1f5f9' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#0f172a', marginBottom: 15 }
});