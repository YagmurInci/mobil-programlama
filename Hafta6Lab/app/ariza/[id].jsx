import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { initialTickets } from '../../data/tickets';
import StatusBadge from '../../components/StatusBadge';

export default function ArizaDetailScreen() {
  const { id } = useLocalSearchParams();
  const ticket = initialTickets.find((t) => t.id === id);

  if (!ticket) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Kayıt Bulunamadı!</Text>
        <Text style={styles.errorText}>#{id} numaralı arıza kaydı mevcut değil.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Talep Numarası</Text>
        <Text style={styles.value}>#{ticket.id}</Text>
        <Text style={styles.label}>Arıza Başlığı</Text>
        <Text style={styles.value}>{ticket.title}</Text>
        <Text style={styles.label}>Konum</Text>
        <Text style={styles.value}>{ticket.location}</Text>
        <Text style={styles.label}>Durum</Text>
        <View style={{ marginTop: 4 }}><StatusBadge status={ticket.status} /></View>
        <Text style={styles.label}>Açıklama</Text>
        <Text style={styles.value}>{ticket.description}</Text>
      </View>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Geri Dön</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#9cbee1' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorTitle: { fontSize: 20, fontWeight: 'bold', color: '#dc2626', marginBottom: 8 },
  errorText: { fontSize: 14, color: '#64748b', marginBottom: 20 },
  card: { backgroundColor: '#b9d5f1', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  label: { fontSize: 12, fontWeight: '600', color: '#64748b', marginTop: 12 },
  value: { fontSize: 16, color: '#0f172a', marginTop: 2 },
  backButton: { backgroundColor: '#480507', padding: 14, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  backButtonText: { color: '#ffffff', fontSize: 15, fontWeight: 'bold' }
});