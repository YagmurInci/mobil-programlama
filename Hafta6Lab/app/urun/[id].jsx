import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { products } from '../../data/products';

export default function UrunDetailScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Ürün Bulunamadı!</Text>
        <Text style={styles.errorText}>ID ({id}) ile eşleşen ürün yok.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  const isStokta = product.stock > 0;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Detay Sayfası Büyük Ürün Görseli */}
        <Image 
          source={{ uri: product.image }} 
          style={styles.detailImage} 
          resizeMode="cover"
        />

        <View style={styles.detailsPadding}>
          <Text style={styles.label}>Ürün Adı</Text>
          <Text style={styles.value}>{product.name}</Text>

          <Text style={styles.label}>Kategori</Text>
          <Text style={styles.value}>{product.category}</Text>

          <Text style={styles.label}>Fiyat</Text>
          <Text style={[styles.value, styles.priceText]}>{product.price} ₺</Text>

          <Text style={styles.label}>Stok Durumu</Text>
          <Text style={[styles.stockValue, isStokta ? styles.inStock : styles.outOfStock]}>
            {isStokta ? `Stokta var (${product.stock} adet)` : 'Stokta yok'}
          </Text>

          <Text style={styles.label}>Açıklama</Text>
          <Text style={styles.value}>{product.description}</Text>
        </View>
      </View>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Geri Dön</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#9cbee1' },
  card: { backgroundColor: '#b9d5f1', borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0', overflow: 'hidden', paddingBottom: 15 },
  detailImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#9cbee1'
  },
  detailsPadding: { padding: 15 },
  label: { fontSize: 12, fontWeight: '600', color: '#64748b', marginTop: 10 },
  value: { fontSize: 16, color: '#0f172a', marginTop: 2 },
  priceText: { fontWeight: 'bold', color: '#2563eb' },
  stockValue: { fontSize: 15, fontWeight: '600', marginTop: 2 },
  inStock: { color: '#166534' },
  outOfStock: { color: '#dc2626' },
  backButton: { backgroundColor: '#480507', padding: 14, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  backButtonText: { color: '#ffffff', fontSize: 15, fontWeight: 'bold' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorTitle: { fontSize: 20, fontWeight: 'bold', color: '#dc2626', marginBottom: 8 },
  errorText: { fontSize: 14, color: '#64748b', marginBottom: 20 }
});