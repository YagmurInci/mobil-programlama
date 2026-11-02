import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import StatusBadge from './StatusBadge';

export default function ProductCard({ product, onPress }) {
  const stokDurumu = product.stock > 0 ? 'Stokta' : 'Stokta yok';

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price} ₺</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.sub}>Kategori: {product.category}</Text>
        <StatusBadge status={stokDurumu} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff', padding: 14, borderRadius: 10, borderWidth: 1, borderColor: '#cbd5e1', marginBottom: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  price: { fontSize: 15, fontWeight: 'bold', color: '#2563eb' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  sub: { fontSize: 13, color: '#64748b' }
});