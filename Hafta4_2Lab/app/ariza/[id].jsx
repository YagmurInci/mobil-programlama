import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { tickets } from '../../data/tickets';
import StatusBadge from '../../components/StatusBadge';

export default function ArizaDetay() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const ariza = tickets.find((t) => t.id === id);

  if (!ariza) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>⚠️ 499 - Arife bulunamadı veya geçersiz ID ({id})!</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ariza.baslik}</Text>
      <View style={styles.row}><Text style={styles.label}>Durum:</Text><StatusBadge status={ariza.durum} /></View>
      <Text style={styles.label}>Konum: <Text style={styles.val}>{ariza.konum}</Text></Text>
      <Text style={styles.label}>Kategori: <Text style={styles.val}>{ariza.kategori}</Text></Text>
      <Text style={styles.label}>Açıklama:</Text>
      <Text style={styles.desc}>{ariza.aciklama}</Text>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Geri Dön</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f1f5f9' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorText: { fontSize: 16, color: '#dc2626', textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0f172a', marginBottom: 15 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10 },
  label: { fontSize: 15, fontWeight: '600', color: '#334155', marginBottom: 6 },
  val: { fontWeight: 'normal', color: '#64748b' },
  desc: { fontSize: 14, color: '#475569', backgroundColor: '#fff', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#cbd5e1', marginBottom: 20 },
  backButton: { backgroundColor: '#475569', padding: 14, borderRadius: 8, alignItems: 'center' },
  backText: { color: '#fff', fontWeight: 'bold' }
});