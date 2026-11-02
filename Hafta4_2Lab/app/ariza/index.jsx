import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { tickets } from '../../data/tickets';
import TicketCard from '../../components/TicketCard';

export default function ArizaListesi() {
  const router = useRouter();
  const [liste, setListe] = useState(tickets);
  const [baslik, setBaslik] = useState('');
  const [konum, setKonum] = useState('');

  const yeniEkle = () => {
    if (!baslik || !konum) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }
    const yeni = {
      id: String(Date.now()),
      baslik,
      konum,
      durum: 'Bekliyor',
      aciklama: 'Kullanıcı tarafından yeni oluşturulan arıza kaydı.',
      kategori: 'Genel',
      oncelik: 'Orta',
      adSoyad: 'Öğrenci',
      birim: 'Kampüs'
    };
    setListe([yeni, ...liste]);
    setBaslik('');
    setKonum('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Yeni Arıza Bildir</Text>
      <TextInput style={styles.input} placeholder="Arıza Başlığı" value={baslik} onChangeText={setBaslik} placeholderTextColor="#94a3b8" />
      <TextInput style={styles.input} placeholder="Konum / Lab" value={konum} onChangeText={setKonum} placeholderTextColor="#94a3b8" />
      <Pressable style={styles.button} onPress={yeniEkle}><Text style={styles.buttonText}>Kayıt Ekle</Text></Pressable>

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Arıza Listesi ({liste.length})</Text>
      <FlatList
        data={liste}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TicketCard ticket={item} onPress={() => router.push(`/ariza/${item.id}`)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f1f5f9' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1e293b', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, backgroundColor: '#fff', padding: 10, marginBottom: 8, fontSize: 14 },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});