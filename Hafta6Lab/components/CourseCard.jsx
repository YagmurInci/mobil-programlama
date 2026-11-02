import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';

export default function CourseCard({ course, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.info}>Gün / Saat: {course.day} - {course.time}</Text>
      <Text style={styles.info}>Sınıf: {course.classroom}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#b9d5f1', padding: 16, borderRadius: 10, marginBottom: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  courseName: { fontSize: 16, fontWeight: 'bold', color: '#0f172a', marginBottom: 6 },
  info: { fontSize: 14, color: '#64748b', marginBottom: 2 }
});