import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MainMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Mobil Programlama Projeleri</Text>
      <Text style={styles.headerSub}>Lütfen gitmek istediğiniz uygulamayı seçin:</Text>

      <Pressable style={styles.menuButton} onPress={() => router.push('/ariza')}>
        <Text style={styles.menuText}>🛠️ Arıza Takip Sistemi</Text>
      </Pressable>

      <Pressable style={styles.menuButton} onPress={() => router.push('/urun')}>
        <Text style={styles.menuText}>📦 Mini Ürün Kataloğu</Text>
      </Pressable>

      <Pressable style={styles.menuButton} onPress={() => router.push('/ders')}>
        <Text style={styles.menuText}>📚 Öğrenci Ders Programı</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f1f5f9' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#0f172a', textAlign: 'center', marginBottom: 6 },
  headerSub: { fontSize: 14, color: '#64748b', textAlign: 'center', marginBottom: 30 },
  menuButton: { backgroundColor: '#2563eb', padding: 18, borderRadius: 12, alignItems: 'center', marginBottom: 15 },
  menuText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' }
});