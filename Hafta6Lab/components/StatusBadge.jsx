import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function StatusBadge({ status }) {
  const getBadgeStyle = () => {
    switch (status) {
      case 'Bekliyor': return styles.bekliyor; // Turuncu
      case 'İşlemde': return styles.islemde;   // Mavi
      case 'Çözüldü': return styles.cozuldu;   // Yeşil
      default: return styles.defaultBadge;
    }
  };

  return (
    <View style={[styles.badge, getBadgeStyle()]}>
      <Text style={styles.badgeText}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-start' },
  bekliyor: { backgroundColor: '#ffedd5' },
  islemde: { backgroundColor: '#e0f2fe' },
  cozuldu: { backgroundColor: '#dcfce7' },
  defaultBadge: { backgroundColor: '#f1f5f9' },
  badgeText: { fontSize: 12, fontWeight: 'bold', color: '#334155' }
});