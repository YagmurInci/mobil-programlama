import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import StatusBadge from './StatusBadge.jsx';

export default function TicketCard({ ticket, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{ticket.baslik}</Text>
        <StatusBadge status={ticket.durum} />
      </View>
      <Text style={styles.sub}>Konum: {ticket.konum} | Kategori: {ticket.kategori}</Text>
      <Text style={styles.hint}>Detay için dokunun...</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff', padding: 14, borderRadius: 10, borderWidth: 1, borderColor: '#cbd5e1', marginBottom: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  sub: { fontSize: 13, color: '#64748b', marginTop: 6 },
  hint: { fontSize: 11, color: '#94a3b8', marginTop: 4, fontStyle: 'italic' }
});