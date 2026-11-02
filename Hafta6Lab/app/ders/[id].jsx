import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { courses } from '../../data/courses';

export default function DersDetailScreen() {
  const { id } = useLocalSearchParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorTitle}>Ders Bulunamadı!</Text>
        <Text style={styles.errorText}>ID ({id}) ile eşleşen ders bulunmuyor.</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Ders Adı</Text>
        <Text style={styles.value}>{course.name}</Text>
        <Text style={styles.label}>Gün ve Saat</Text>
        <Text style={styles.value}>{course.day} - {course.time}</Text>
        <Text style={styles.label}>Sınıf / Lab</Text>
        <Text style={styles.value}>{course.classroom}</Text>
        <Text style={styles.label}>Öğretim Elemanı</Text>
        <Text style={styles.value}>{course.instructor}</Text>
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