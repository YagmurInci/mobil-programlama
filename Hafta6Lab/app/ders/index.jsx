import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { courses } from '../../data/courses';
import CourseCard from '../../components/CourseCard';

export default function DersListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Haftalık Ders Programı</Text>
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
  container: { flex: 1, padding: 16, backgroundColor: '#9cbee1' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#480507' }
});