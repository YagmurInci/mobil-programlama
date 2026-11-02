import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function StatusBadge({ status }) {
  const getStyle = () => {
    if (status === 'Tamamlandı' || status === 'Çözüldü' || status === 'Stokta') {
      return styles.success;
    }
    if (status === 'İşlemde') {
      return styles.warning;
    }
    return styles.info;
  };

  return <Text style={[styles.badge, getStyle()]}>{status}</Text>;
}

const styles = StyleSheet.create({
  badge: { fontSize: 11, fontWeight: '700', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6, overflow: 'hidden', textAlign: 'center' },
  success: { backgroundColor: '#dcfce7', color: '#166534' },
  warning: { backgroundColor: '#fef3c7', color: '#d97706' },
  info: { backgroundColor: '#e0f2fe', color: '#0369a1' }
});