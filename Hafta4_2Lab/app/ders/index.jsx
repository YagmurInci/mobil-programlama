import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { courses } from '../../data/courses';
import CourseCard from '../../components/CourseCard';

export default function DersListesi() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Haftalık Ders Programı</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseCard course={item} onPress={() => router.push(`/ders/${item.id}`)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f1f5f9' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#0f172a', marginBottom: 15 }
});