import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { initialTickets } from '../../data/tickets';
import TicketCard from '../../components/TicketCard';

export default function ArizaListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Bildirilen Arızalar</Text>
      <FlatList
        data={initialTickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TicketCard ticket={item} onPress={() => router.push(`/ariza/${item.id}`)} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#9cbee1' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#1e293b' }
});