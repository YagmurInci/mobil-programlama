import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DurumMesaji from '../components/DurumMesaji';
import UrunKarti from '../components/UrunKarti';
import { Renkler } from '../constants/Renkler';
import { useSepet } from '../context/SepetContext';
import { urunler } from '../data/urunler';

// =====================================================================
// ANA EKRAN: ÜRÜN LİSTESİ VE ARAMA
// =====================================================================
export default function UrunlerEkrani() {
  // Arama kutusuna yazılan metin
  const [arama, setArama] = useState('');
  // Son sepete ekleme denemesinin sonucu (başarılı / engellendi)
  const [durum, setDurum] = useState(null);

  // Ortak sepetten sadece ekleme fonksiyonunu alıyorum
  const { sepeteEkle } = useSepet();

  // Ada göre filtreleme. Türkçe büyük/küçük harf (İ-i, I-ı) doğru
  // eşleşsin diye toLocaleLowerCase('tr-TR') kullanıyorum.
  const aranan = arama.trim().toLocaleLowerCase('tr-TR');
  const gorunenUrunler = urunler.filter((urun) =>
    urun.ad.toLocaleLowerCase('tr-TR').includes(aranan)
  );

  return (
    // Stack başlığı açık olduğu için üst güvenli alanı başlık karşılıyor;
    // burada alt, sol ve sağ kenarları koruyorum.
    <SafeAreaView style={styles.ekran} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={gorunenUrunler}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.liste}
        keyboardShouldPersistTaps="handled"
        ItemSeparatorComponent={() => <View style={styles.aralik} />}
        ListHeaderComponent={
          <View style={styles.ust}>
            <Text style={styles.karsilama}>Yağmur&apos;un Kampüs Marketi</Text>
            <Text style={styles.altYazi}>
              Kampüs hayatı için ihtiyacın olan her şey tek yerde.
            </Text>

            <TextInput
              value={arama}
              onChangeText={setArama}
              placeholder="Ürün adına göre ara..."
              placeholderTextColor={Renkler.soluk}
              accessibilityLabel="Ürün arama kutusu"
              autoCorrect={false}
              clearButtonMode="while-editing"
              style={styles.aramaKutusu}
            />

            <DurumMesaji durum={durum} />
          </View>
        }
        renderItem={({ item }) => (
          <UrunKarti
            urun={item}
            // Her kart kendi ürününün kimliğini gönderir
            onDetay={() =>
              router.push({ pathname: '/urun/[id]', params: { id: item.id } })
            }
            // Basılınca çalışır: ilgili ürünü 1 adet ekler
            onSepeteEkle={() => setDurum(sepeteEkle(item, 1))}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.bosMesaj}>Aramanıza uygun ürün bulunamadı</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: Renkler.zemin,
  },
  liste: {
    padding: 16,
    paddingBottom: 28,
  },
  ust: {
    gap: 10,
    marginBottom: 16,
  },
  karsilama: {
    fontSize: 22,
    fontWeight: '800',
    color: Renkler.baslik,
  },
  altYazi: {
    fontSize: 14,
    color: Renkler.metin,
  },
  aramaKutusu: {
    backgroundColor: Renkler.kart,
    borderWidth: 1,
    borderColor: Renkler.cizgi,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 15,
    color: Renkler.baslik,
    marginTop: 4,
  },
  aralik: {
    height: 12,
  },
  bosMesaj: {
    textAlign: 'center',
    color: Renkler.metin,
    fontSize: 15,
    marginTop: 36,
  },
});
