import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import StatusBadge from './StatusBadge';

export default function TicketCard({ ticket, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.title}>{ticket.title}</Text>
        <StatusBadge status={ticket.status} />
      </View>
      <Text style={styles.location}>Konum: {ticket.location}</Text>
      <Text style={styles.idText}>ID: #{ticket.id}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#b9d5f1', padding: 15, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#0f172a', flex: 1 },
  location: { fontSize: 14, color: '#64748b', marginBottom: 4 },
  idText: { fontSize: 12, color: '#94a3b8' }
});