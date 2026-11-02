import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function CourseCard({ course, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{course.dersAdi}</Text>
        <Text style={styles.time}>{course.gun} - {course.saat}</Text>
      </View>
      <Text style={styles.sub}>Sınıf: {course.sinif} | Eğitmen: {course.ogretimElemani}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff', padding: 14, borderRadius: 10, borderWidth: 1, borderColor: '#cbd5e1', marginBottom: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  time: { fontSize: 13, fontWeight: '600', color: '#2563eb' },
  sub: { fontSize: 13, color: '#64748b', marginTop: 6 }
});