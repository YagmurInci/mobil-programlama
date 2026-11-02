import React from 'react';
import { Text, Pressable, StyleSheet, View, Image } from 'react-native';

export default function ProductCard({ product, onPress }) {
  const isStokta = product.stock > 0;

  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* Ürün Görseli */}
      <Image 
        source={{ uri: product.image }} 
        style={styles.productImage} 
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price} ₺</Text>
        </View>
        <Text style={styles.category}>Kategori: {product.category}</Text>
        <Text style={[styles.stock, isStokta ? styles.inStock : styles.outOfStock]}>
          {isStokta ? `Stokta (${product.stock} adet)` : 'Stokta yok'}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#b9d5f1', 
    borderRadius: 10, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: '#e2e8f0',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center'
  },
  productImage: {
    width: 80,
    height: 80,
    backgroundColor: '#f1f5f9'
  },
  infoContainer: {
    flex: 1,
    padding: 12
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  price: { fontSize: 15, fontWeight: 'bold', color: '#2563eb' },
  category: { fontSize: 13, color: '#64748b', marginBottom: 6 },
  stock: { fontSize: 12, fontWeight: '600' },
  inStock: { color: '#166534' },
  outOfStock: { color: '#dc2626' }
});