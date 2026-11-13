import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AdetSecici from '../../components/AdetSecici';
import DurumMesaji from '../../components/DurumMesaji';
import { Renkler } from '../../constants/Renkler';
import { useSepet } from '../../context/SepetContext';
import { urunBul } from '../../data/urunler';
import { fiyatYaz } from '../../utils/para';

// =====================================================================
// ÜRÜN DETAYI
// =====================================================================
// Tek dosya, bütün ürünler: adresteki [id] parametresini okuyup ürün
// dizisinde o kimliğe sahip ürünü buluyorum.
export default function UrunDetayEkrani() {
  const { id } = useLocalSearchParams();
  const urun = urunBul(id);

  // Sepete eklenecek adet (bu ekrana özel yerel sayaç)
  const [adet, setAdet] = useState(1);
  const [durum, setDurum] = useState(null);

  const { sepet, sepeteEkle } = useSepet();

  // Kimlik hiçbir ürünle eşleşmezse açıklama + geri dönüş seçeneği
  if (!urun) {
    return (
      <SafeAreaView style={[styles.ekran, styles.orta]} edges={['bottom', 'left', 'right']}>
        <Text style={styles.hataBaslik}>Ürün bulunamadı</Text>
        <Text style={styles.hataMetin}>
          &quot;{String(id)}&quot; kimliğine sahip bir ürün yok.
        </Text>
        <Pressable
          onPress={() => router.replace('/')}
          accessibilityRole="button"
          accessibilityLabel="Ürün listesine dön"
          style={styles.anaDugme}
        >
          <Text style={styles.anaDugmeYazi}>Ürünlere dön</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const stokYok = urun.stok < 1;
  // Bu üründen sepette şu an kaç tane var?
  const sepettekiSatir = sepet.find((satir) => satir.id === urun.id);
  const sepettekiAdet = sepettekiSatir ? sepettekiSatir.adet : 0;

  function ekle() {
    const sonuc = sepeteEkle(urun, adet);
    setDurum(sonuc);
    if (sonuc.basarili) setAdet(1);
  }

  return (
    <SafeAreaView style={styles.ekran} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.icerik}>
        <Image source={urun.gorsel} style={styles.gorsel} />

        <View style={styles.baslikSatiri}>
          <Text style={styles.ad}>{urun.ad}</Text>
          <Text style={styles.kimlik}>{urun.id}</Text>
        </View>

        <Text style={styles.fiyat}>{fiyatYaz(urun.fiyat)}</Text>

        <Text style={[styles.stok, stokYok && styles.stokYok]}>
          {stokYok ? 'Stokta yok' : `Stokta ${urun.stok} adet var`}
          {sepettekiAdet > 0 ? ` • Sepetinde ${sepettekiAdet} adet` : ''}
        </Text>

        <Text style={styles.aciklama}>{urun.aciklama}</Text>

        {!stokYok && (
          <View style={styles.adetSatiri}>
            <Text style={styles.adetEtiket}>Adet</Text>
            <AdetSecici
              adet={adet}
              onArtir={() => setAdet((onceki) => Math.min(onceki + 1, urun.stok))}
              onAzalt={() => setAdet((onceki) => Math.max(onceki - 1, 1))}
              azaltKapali={adet <= 1}
              artirKapali={adet >= urun.stok}
            />
          </View>
        )}

        <DurumMesaji
          durum={
            stokYok
              ? { basarili: false, mesaj: 'Bu ürün tükendi, sepete eklenemez.' }
              : durum
          }
        />

        <Pressable
          onPress={ekle}
          disabled={stokYok}
          accessibilityRole="button"
          accessibilityLabel={
            stokYok ? 'Ürün stokta yok, eklenemez' : `${adet} adet ${urun.ad} sepete ekle`
          }
          accessibilityState={{ disabled: stokYok }}
          style={[styles.anaDugme, stokYok && styles.anaDugmeKapali]}
        >
          <Text style={[styles.anaDugmeYazi, stokYok && styles.anaDugmeYaziKapali]}>
            {stokYok ? 'Tükendi' : `Sepete ekle • ${fiyatYaz(urun.fiyat * adet)}`}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('/sepet')}
          accessibilityRole="button"
          accessibilityLabel="Sepete git"
          style={styles.ikinciDugme}
        >
          <Text style={styles.ikinciDugmeYazi}>Sepete git</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: Renkler.zemin,
  },
  orta: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 10,
  },
  icerik: {
    padding: 16,
    gap: 12,
    paddingBottom: 28,
  },
  gorsel: {
    width: '100%',
    height: 260,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  baslikSatiri: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 4,
  },
  ad: {
    flex: 1,
    fontSize: 22,
    fontWeight: '800',
    color: Renkler.baslik,
  },
  kimlik: {
    fontSize: 12,
    fontWeight: '700',
    color: Renkler.ana,
    backgroundColor: Renkler.anaAcik,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  fiyat: {
    fontSize: 24,
    fontWeight: '800',
    color: Renkler.ana,
  },
  stok: {
    fontSize: 14,
    fontWeight: '600',
    color: Renkler.basari,
  },
  stokYok: {
    color: Renkler.hata,
  },
  aciklama: {
    fontSize: 15,
    lineHeight: 22,
    color: Renkler.metin,
  },
  adetSatiri: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Renkler.kart,
    borderWidth: 1,
    borderColor: Renkler.cizgi,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  adetEtiket: {
    fontSize: 15,
    fontWeight: '700',
    color: Renkler.baslik,
  },
  anaDugme: {
    backgroundColor: Renkler.ana,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  anaDugmeKapali: {
    backgroundColor: '#E9E3E1',
  },
  anaDugmeYazi: {
    color: Renkler.beyaz,
    fontSize: 16,
    fontWeight: '700',
  },
  anaDugmeYaziKapali: {
    color: Renkler.soluk,
  },
  ikinciDugme: {
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: Renkler.ana,
    paddingVertical: 12,
    alignItems: 'center',
  },
  ikinciDugmeYazi: {
    color: Renkler.ana,
    fontSize: 15,
    fontWeight: '700',
  },
  hataBaslik: {
    fontSize: 20,
    fontWeight: '800',
    color: Renkler.baslik,
  },
  hataMetin: {
    fontSize: 15,
    color: Renkler.metin,
    textAlign: 'center',
    marginBottom: 8,
  },
});
