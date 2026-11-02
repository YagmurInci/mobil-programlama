import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Hafta 6 Lab Uygulamaları</Text>
      
      <Pressable style={styles.button} onPress={() => router.push('/ariza')}>
        <Text style={styles.buttonText}>🔧 Arıza Takip Sistemi (Uygulama 1)</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/urun')}>
        <Text style={styles.buttonText}>📦 Mini Ürün Kataloğu (Uygulama 2)</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/ders')}>
        <Text style={styles.buttonText}>📚 Öğrenci Ders Programı (Uygulama 3)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#9cbee1' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#3b1e1e' },
  button: { backgroundColor: '#480507', padding: 16, borderRadius: 10, marginBottom: 15, alignItems: 'center' },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});