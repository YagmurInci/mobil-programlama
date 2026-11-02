import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { courses } from '../../data/courses';

export default function DersDetay() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>⚠️ Hatalı Ders ID: {id}. Böyle bir ders bulunamadı!</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}><Text style={styles.backText}>Geri Dön</Text></Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.dersAdi}</Text>
      <Text style={styles.label}>Gün & Saat: <Text style={styles.val}>{course.gun} - {course.saat}</Text></Text>
      <Text style={styles.label}>Sınıf / Lab: <Text style={styles.val}>{course.sinif}</Text></Text>
      <Text style={styles.label}>Öğretim Elemanı: <Text style={styles.val}>{course.ogretimElemani}</Text></Text>
      <Text style={styles.label}>Ders Açıklaması:</Text>
      <Text style={styles.desc}>{course.aciklama}</Text>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Ders Listesine Dön</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f1f5f9' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorText: { fontSize: 16, color: '#dc2626', marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0f172a', marginBottom: 15 },
  label: { fontSize: 15, fontWeight: '600', color: '#334155', marginBottom: 8 },
  val: { fontWeight: 'normal', color: '#64748b' },
  desc: { fontSize: 14, color: '#475569', backgroundColor: '#fff', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#cbd5e1', marginBottom: 20 },
  backButton: { backgroundColor: '#475569', padding: 14, borderRadius: 8, alignItems: 'center' },
  backText: { color: '#fff', fontWeight: 'bold' }
});