import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Switch,
  ScrollView,
  Alert,
  StyleSheet,
  StatusBar,
  Modal
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';

function TeknikDestekEkrani() {
  // 1. FORM DURUMLARI (STATE)
  const [adSoyad, setAdSoyad] = useState('');
  const [birim, setBirim] = useState('');
  const [baslik, setBaslik] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [kategori, setKategori] = useState('');
  const [oncelik, setOncelik] = useState('Orta');
  const [acil, setAcil] = useState(false);

  // 2. LİSTE VE ETKİLEŞİM DURUMLARI
  const [talepler, setTalepler] = useState([]);
  const [seciliTalep, setSeciliTalep] = useState(null); // Detay modalı için
  const [detayModalAcik, setDetayModalAcik] = useState(false);

  // 3. SEÇENEKLER
  const kategoriler = [
    'Bilgisayar',
    'Yazıcı',
    'İnternet',
    'Yazılım'
  ];

  const oncelikler = [
    'Düşük',
    'Orta',
    'Yüksek'
  ];

  const durumSecenekleri = ['Bekliyor', 'İşlemde', 'Tamamlandı'];

  // 4. FORM TEMİZLEME
  const formuTemizle = () => {
    setAdSoyad('');
    setBirim('');
    setBaslik('');
    setAciklama('');
    setKategori('');
    setOncelik('Orta');
    setAcil(false);
  };

  // 5. TALEP OLUŞTURMA (G1, G2, G3, G4, G8)
  const talepOlustur = () => {
    if (!adSoyad.trim() || !birim.trim() || !baslik.trim()) {
      Alert.alert('Eksik Bilgi', 'Lütfen zorunlu alanları doldurunuz.');
      return;
    }

    if (baslik.trim().length === 0 || aciklama.trim().length === 0) {
      Alert.alert('Geçersiz Alan', 'Başlık veya açıklama yalnızca boşluk olamaz.');
      return;
    }

    if (aciklama.trim().length < 10) {
      Alert.alert('Geçersiz Açıklama', 'Arıza açıklaması en az 10 karakter olmalıdır.');
      return;
    }

    if (!kategori) {
      Alert.alert('Kategori Eksik', 'Lütfen en az 3 arıza kategorisinden birini seçiniz.');
      return;
    }

    const yeniTalep = {
      id: 'TLP-' + Date.now(),
      adSoyad: adSoyad.trim(),
      birim: birim.trim(),
      baslik: baslik.trim(),
      aciklama: aciklama.trim(),
      kategori: kategori,
      oncelik: oncelik,
      acil: acil,
      durum: 'Bekliyor', // G7 için varsayılan
      tarih: new Date().toLocaleString('tr-TR')
    };

    setTalepler([yeniTalep, ...talepler]);
    formuTemizle();
    Alert.alert('İşlem Başarılı', 'Teknik destek talebiniz listeye eklendi.');
  };

  // 6. UZUN BASMA İLE SİLME (G6)
  const talepSilOnayi = (id, baslikAdi) => {
    Alert.alert(
      'Kayıt Sil',
      `"${baslikAdi}" başlıklı talebi silmek istediğinize emin misiniz?`,
      [
        { text: 'Vazgeç', style: 'cancel' },
        {
          text: 'Sil',
          style: 'destructive',
          onPress: () => {
            setTalepler(talepler.filter((item) => item.id !== id));
            Alert.alert('Başarılı', 'Talep başarıyla silindi.');
          }
        }
      ]
    );
  };

  // 7. DURUM DEĞİŞTİRME (G7)
  const durumDegistir = (id, yeniDurum) => {
    setTalepler(
      talepler.map((item) =>
        item.id === id ? { ...item, durum: yeniDurum } : item
      )
    );
    if (seciliTalep && seciliTalep.id === id) {
      setSeciliTalep({ ...seciliTalep, durum: yeniDurum });
    }
  };

  // ÖZGÜN ÖZELLİK: Tamamlanan talep sayısını anlık hesaplama
  const tamamlananSayisi = talepler.filter(item => item.durum === 'Tamamlandı').length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f1f5f9" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        
        {/* UYGULAMA BAŞLIĞI */}
        <View style={styles.header}>
          <Text style={styles.title}>Teknik Destek Sistemi</Text>
          <Text style={styles.subtitle}>Arıza Bildirim ve Yönetim Paneli</Text>
          <Text style={styles.description}>
            Taleplerinizi oluşturun, durumlarını güncelleyin ve takip edin.
          </Text>
        </View>

        {/* ÖZGÜN ÖZELLİK ÖZET KARTI */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Canlı Talep Özeti</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statsText}>Toplam Talep: {talepler.length}</Text>
            <Text style={[styles.statsText, { color: '#166534' }]}>
              Tamamlanan: {tamamlananSayisi}
            </Text>
          </View>
        </View>

        {/* KULLANICI BİLGİLERİ */}
        <Text style={styles.sectionTitle}>Kullanıcı Bilgileri</Text>
        
        <Text style={styles.label}>Ad Soyad *</Text>
        <TextInput
          style={styles.input}
          placeholder="Adınızı ve soyadınızı giriniz"
          placeholderTextColor="#94a3b8"
          value={adSoyad}
          onChangeText={setAdSoyad}
          autoCapitalize="words"
        />

        <Text style={styles.label}>Birim *</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn: Öğrenci İşleri"
          placeholderTextColor="#94a3b8"
          value={birim}
          onChangeText={setBirim}
        />

        {/* ARIZA BİLGİLERİ */}
        <Text style={styles.sectionTitle}>Arıza Bilgileri</Text>

        <Text style={styles.label}>Arıza Başlığı *</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn: Bilgisayar açılmıyor"
          placeholderTextColor="#94a3b8"
          value={baslik}
          onChangeText={setBaslik}
        />

        <Text style={styles.label}>Arıza Açıklaması * (En az 10 karakter)</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Yaşadığınız sorunu detaylı açıklayınız"
          placeholderTextColor="#94a3b8"
          value={aciklama}
          onChangeText={setAciklama}
          multiline={true}
          textAlignVertical="top"
        />

        {/* KATEGORİ SEÇİMİ (En az 3 kategori - G2) */}
        <Text style={styles.label}>Arıza Kategorisi * (En az 3 seçenek)</Text>
        <View style={styles.optionsContainer}>
          {kategoriler.map((item) => (
            <Pressable
              key={item}
              onPress={() => setKategori(item)}
              style={[
                styles.optionButton,
                kategori === item && styles.selectedOption
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  kategori === item && styles.selectedOptionText
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* ÖNCELİK SEÇİMİ */}
        <Text style={styles.label}>Öncelik Seviyesi</Text>
        <View style={styles.optionsContainer}>
          {oncelikler.map((item) => (
            <Pressable
              key={item}
              onPress={() => setOncelik(item)}
              style={[
                styles.optionButton,
                oncelik === item && styles.selectedOption
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  oncelik === item && styles.selectedOptionText
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* ACİL MÜDAHALE */}
        <View style={styles.switchContainer}>
          <View style={styles.switchLabelArea}>
            <Text style={styles.switchText}>Acil Müdahale Talebi</Text>
            <Text style={styles.switchHint}>Sorun acil müdahale gerektiriyorsa etkinleştiriniz.</Text>
          </View>
          <Switch
            value={acil}
            onValueChange={setAcil}
            trackColor={{ false: '#cbd5e1', true: '#93c5fd' }}
            thumbColor={acil ? '#2563eb' : '#f8fafc'}
          />
        </View>

        {/* BUTONLAR */}
        <Pressable style={styles.submitButton} onPress={talepOlustur}>
          <Text style={styles.submitButtonText}>Talep Oluştur</Text>
        </Pressable>

        <Pressable style={styles.clearButton} onPress={formuTemizle}>
          <Text style={styles.clearButtonText}>Formu Temizle</Text>
        </Pressable>

        {/* TALEP LİSTESİ (G4, G5, G6, G7) */}
        <Text style={styles.sectionTitle}>Talep Listesi ({talepler.length})</Text>
        
        {talepler.length === 0 ? (
          <Text style={styles.emptyText}>Henüz oluşturulmuş bir teknik destek talebi yok.</Text>
        ) : (
          talepler.map((item) => (
            <Pressable
              key={item.id}
              style={styles.card}
              onPress={() => {
                setSeciliTalep(item);
                setDetayModalAcik(true);
              }}
              onLongPress={() => talepSilOnayi(item.id, item.baslik)}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardId}>{item.id}</Text>
                <Text style={[
                  styles.badge,
                  item.durum === 'Bekliyor' && styles.badgeBekliyor,
                  item.durum === 'İşlemde' && styles.badgeIslemde,
                  item.durum === 'Tamamlandı' && styles.badgeTamamlandi,
                ]}>
                  {item.durum}
                </Text>
              </View>

              <Text style={styles.cardTitle}>{item.baslik}</Text>
              <Text style={styles.cardSub}>Kategori: {item.kategori} | Birim: {item.birim}</Text>
              <Text style={styles.cardHint}>💡 Detay için dokun, silmek için uzun bas.</Text>
            </Pressable>
          ))
        )}

        <Text style={styles.footer}>Üniversite Bilgi İşlem - Teknik Destek</Text>
      </ScrollView>

      {/* DETAY VE DURUM GÜNCELLEME MODALI (G5, G7) */}
      <Modal
        visible={detayModalAcik}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDetayModalAcik(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Talep Detayı</Text>
            
            {seciliTalep && (
              <ScrollView>
                <Text style={styles.resultLabel}>Talep Numarası</Text>
                <Text style={styles.resultValue}>{seciliTalep.id}</Text>

                <Text style={styles.resultLabel}>Talep Sahibi</Text>
                <Text style={styles.resultValue}>{seciliTalep.adSoyad} ({seciliTalep.birim})</Text>

                <Text style={styles.resultLabel}>Arıza Başlığı</Text>
                <Text style={styles.resultValue}>{seciliTalep.baslik}</Text>

                <Text style={styles.resultLabel}>Açıklama</Text>
                <Text style={styles.resultValue}>{seciliTalep.aciklama}</Text>

                <Text style={styles.resultLabel}>Kategori & Öncelik</Text>
                <Text style={styles.resultValue}>{seciliTalep.kategori} - {seciliTalep.oncelik} {seciliTalep.acil ? '(ACİL)' : ''}</Text>

                <Text style={styles.resultLabel}>Durumu Değiştir (G7)</Text>
                <View style={styles.optionsContainer}>
                  {durumSecenekleri.map((durumSecenegi) => (
                    <Pressable
                      key={durumSecenegi}
                      onPress={() => durumDegistir(seciliTalep.id, durumSecenegi)}
                      style={[
                        styles.optionButton,
                        seciliTalep.durum === durumSecenegi && styles.selectedOption
                      ]}
                    >
                      <Text style={[
                        styles.optionText,
                        seciliTalep.durum === durumSecenegi && styles.selectedOptionText
                      ]}>
                        {durumSecenegi}
                      </Text>
                    </Pressable>
                  ))}
                </View>

                <Text style={styles.resultLabel}>Oluşturulma Tarihi</Text>
                <Text style={styles.resultValue}>{seciliTalep.tarih}</Text>
              </ScrollView>
            )}

            <Pressable
              style={styles.closeModalButton}
              onPress={() => setDetayModalAcik(false)}
            >
              <Text style={styles.closeModalText}>Kapat</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <TeknikDestekEkrani />
    </SafeAreaProvider>
  );
}

// 8. STİLLER
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  scroll: { flex: 1 },
  content: { padding: 20, paddingBottom: 45 },
  header: { marginBottom: 12 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#0f172a' },
  subtitle: { fontSize: 18, fontWeight: '600', color: '#2563eb', marginTop: 8 },
  description: { fontSize: 14, color: '#64748b', marginTop: 8, lineHeight: 21 },
  
  statsCard: {
    backgroundColor: '#eff6ff',
    borderWidth: 1,
    borderColor: '#bfdbfe',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },
  statsTitle: { fontSize: 15, fontWeight: 'bold', color: '#1e40af', marginBottom: 4 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statsText: { fontSize: 14, fontWeight: '600', color: '#334155' },

  sectionTitle: { fontSize: 19, fontWeight: 'bold', color: '#1e293b', marginTop: 24, marginBottom: 10 },
  label: { fontSize: 14, fontWeight: '600', color: '#334155', marginTop: 12, marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 10, backgroundColor: '#ffffff', padding: 13, fontSize: 15, color: '#0f172a' },
  textArea: { minHeight: 110 },
  
  optionsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  optionButton: { paddingVertical: 10, paddingHorizontal: 14, backgroundColor: '#e2e8f0', borderRadius: 8, borderWidth: 1, borderColor: '#cbd5e1' },
  selectedOption: { backgroundColor: '#2563eb', borderColor: '#2563eb' },
  optionText: { color: '#334155', fontSize: 14, fontWeight: '500' },
  selectedOptionText: { color: '#ffffff' },

  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 22, padding: 14, backgroundColor: '#ffffff', borderRadius: 10, gap: 10 },
  switchLabelArea: { flex: 1 },
  switchText: { fontSize: 15, fontWeight: '600', color: '#334155' },
  switchHint: { fontSize: 12, color: '#64748b', marginTop: 4 },

  submitButton: { backgroundColor: '#2563eb', padding: 16, borderRadius: 10, marginTop: 25, alignItems: 'center' },
  submitButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  clearButton: { backgroundColor: '#ffffff', padding: 14, borderRadius: 10, marginTop: 10, alignItems: 'center', borderWidth: 1, borderColor: '#cbd5e1' },
  clearButtonText: { color: '#475569', fontSize: 15, fontWeight: '600' },

  card: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e2e8f0', padding: 15, borderRadius: 12, marginTop: 12 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  cardId: { fontSize: 12, fontWeight: 'bold', color: '#64748b' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#0f172a', marginBottom: 4 },
  cardSub: { fontSize: 13, color: '#475569' },
  cardHint: { fontSize: 11, color: '#94a3b8', marginTop: 8, fontStyle: 'italic' },
  emptyText: { fontSize: 14, color: '#64748b', fontStyle: 'italic', marginTop: 5 },

  badge: { fontSize: 11, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6, overflow: 'hidden' },
  badgeBekliyor: { backgroundColor: '#fef3c7', color: '#92400e' },
  badgeIslemde: { backgroundColor: '#e0f2fe', color: '#0369a1' },
  badgeTamamlandi: { backgroundColor: '#dcfce7', color: '#166534' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  modalContent: { backgroundColor: '#ffffff', borderRadius: 14, padding: 20, maxHeight: '80%' },
  modalHeader: { fontSize: 20, fontWeight: 'bold', color: '#0f172a', marginBottom: 15 },
  resultLabel: { fontSize: 12, fontWeight: '600', color: '#475569', marginTop: 10 },
  resultValue: { fontSize: 15, color: '#0f172a', marginTop: 2 },
  closeModalButton: { backgroundColor: '#0f172a', padding: 14, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  closeModalText: { color: '#ffffff', fontSize: 15, fontWeight: 'bold' },

  footer: { textAlign: 'center', fontSize: 12, color: '#94a3b8', marginTop: 30 }
});