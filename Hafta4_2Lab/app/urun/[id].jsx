import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { products } from '../../data/products';
import StatusBadge from '../../components/StatusBadge';

export default function UrunDetay() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>⚠️ Aradığınız ürün bulunamadı (ID: {id})</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}><Text style={styles.backText}>Geri Dön</Text></Pressable>
      </View>
    );
  }

  const stokDurumu = product.stock > 0 ? 'Stokta' : 'Stokta yok';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price} ₺</Text>
      <View style={styles.row}><Text style={styles.label}>Stok Durumu:</Text><StatusBadge status={stokDurumu} /></View>
      <Text style={styles.label}>Stok Adedi: <Text style={styles.val}>{product.stock} adet</Text></Text>
      <Text style={styles.label}>Kategori: <Text style={styles.val}>{product.category}</Text></Text>
      <Text style={styles.label}>Açıklama:</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Ürün Listesine Dön</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f1f5f9' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorText: { fontSize: 16, color: '#dc2626', marginBottom: 20, fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0f172a', marginBottom: 5 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#2563eb', marginBottom: 15 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10 },
  label: { fontSize: 15, fontWeight: '600', color: '#334155', marginBottom: 6 },
  val: { fontWeight: 'normal', color: '#64748b' },
  desc: { fontSize: 14, color: '#475569', backgroundColor: '#fff', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#cbd5e1', marginBottom: 20 },
  backButton: { backgroundColor: '#475569', padding: 14, borderRadius: 8, alignItems: 'center' },
  backText: { color: '#fff', fontWeight: 'bold' }
});