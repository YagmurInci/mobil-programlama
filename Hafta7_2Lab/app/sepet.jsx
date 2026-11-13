import { router } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AdetSecici from '../components/AdetSecici';
import SepetOzeti from '../components/SepetOzeti';
import { Renkler } from '../constants/Renkler';
import { useSepet } from '../context/SepetContext';
import { fiyatYaz } from '../utils/para';

// =====================================================================
// SEPET EKRANI
// =====================================================================
export default function SepetEkrani() {
  // Sepet ve güncelleme fonksiyonlarının hepsi ortak Provider'dan geliyor;
  // bu ekranın kendine ait bir sayacı yok.
  const { sepet, adetArtir, adetAzalt, urunKaldir, sepetiBosalt } = useSepet();

  // Toplamları ayrı state'te tutmuyorum; sepet değişince yeniden hesaplanır.
  const toplamAdet = sepet.reduce((toplam, s) => toplam + s.adet, 0);
  const toplamTutar = sepet.reduce((toplam, s) => toplam + s.fiyat * s.adet, 0);

  // Ürünler ekranına dön: geri gidilebiliyorsa en başa, değilse ana sayfa.
  function urunlereDon() {
    if (router.canDismiss()) {
      router.dismissAll();
    } else {
      router.replace('/');
    }
  }

  // Sepet boşsa mesaj + ürünlere dönüş düğmesi
  if (sepet.length === 0) {
    return (
      <SafeAreaView style={[styles.ekran, styles.bos]} edges={['bottom', 'left', 'right']}>
        <Text style={styles.bosIkon}>🛒</Text>
        <Text style={styles.bosBaslik}>Sepetiniz boş</Text>
        <Text style={styles.bosMetin}>
          Ürünler sayfasından beğendiğin ürünleri sepete ekleyebilirsin.
        </Text>
        <Pressable
          onPress={urunlereDon}
          accessibilityRole="button"
          accessibilityLabel="Ürün listesine dön"
          style={styles.anaDugme}
        >
          <Text style={styles.anaDugmeYazi}>Ürünlere dön</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.ekran} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={sepet}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.liste}
        ItemSeparatorComponent={() => <View style={styles.aralik} />}
        renderItem={({ item }) => (
          <View style={styles.satir}>
            <View style={styles.satirUst}>
              <Image source={item.gorsel} style={styles.gorsel} />
              <View style={styles.bilgi}>
                <Text style={styles.ad} numberOfLines={2}>
                  {item.ad}
                </Text>
                <Text style={styles.birim}>Birim fiyat: {fiyatYaz(item.fiyat)}</Text>
                <Text style={styles.satirToplam}>
                  Satır toplamı: {fiyatYaz(item.fiyat * item.adet)}
                </Text>
              </View>
            </View>

            <View style={styles.satirAlt}>
              {/* Artı / eksi ortak sepet fonksiyonlarını çağırır */}
              <AdetSecici
                adet={item.adet}
                onArtir={() => adetArtir(item.id)}
                onAzalt={() => adetAzalt(item.id)}
                azaltKapali={item.adet <= 1}
                artirKapali={item.adet >= item.stok}
              />
              <Pressable
                onPress={() => urunKaldir(item.id)}
                accessibilityRole="button"
                accessibilityLabel={`${item.ad} ürününü sepetten kaldır`}
                style={styles.kaldirDugme}
              >
                <Text style={styles.kaldirYazi}>Kaldır</Text>
              </Pressable>
            </View>

            {item.adet >= item.stok && (
              <Text style={styles.stokUyari}>
                Stok sınırına ulaşıldı (en fazla {item.stok} adet).
              </Text>
            )}
          </View>
        )}
      />

      {/* Alt bölüm: özet ve sepeti boşalt */}
      <View style={styles.alt}>
        <SepetOzeti toplamAdet={toplamAdet} toplamTutar={toplamTutar} />
        <Pressable
          onPress={sepetiBosalt}
          accessibilityRole="button"
          accessibilityLabel="Sepetteki bütün ürünleri kaldır"
          style={styles.bosaltDugme}
        >
          <Text style={styles.bosaltYazi}>Sepeti boşalt</Text>
        </Pressable>
      </View>
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
  },
  aralik: {
    height: 12,
  },
  satir: {
    backgroundColor: Renkler.kart,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Renkler.cizgi,
    padding: 12,
    gap: 12,
  },
  satirUst: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  gorsel: {
    width: 68,
    height: 68,
    borderRadius: 12,
  },
  bilgi: {
    flex: 1,
    gap: 3,
  },
  ad: {
    fontSize: 16,
    fontWeight: '700',
    color: Renkler.baslik,
  },
  birim: {
    fontSize: 13,
    color: Renkler.metin,
  },
  satirToplam: {
    fontSize: 14,
    fontWeight: '700',
    color: Renkler.ana,
  },
  satirAlt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  kaldirDugme: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: Renkler.hataZemin,
  },
  kaldirYazi: {
    color: Renkler.hata,
    fontSize: 14,
    fontWeight: '700',
  },
  stokUyari: {
    fontSize: 12,
    color: Renkler.hata,
    fontWeight: '600',
  },
  alt: {
    padding: 16,
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: Renkler.cizgi,
    backgroundColor: Renkler.kart,
  },
  bosaltDugme: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Renkler.hata,
    paddingVertical: 11,
    alignItems: 'center',
  },
  bosaltYazi: {
    color: Renkler.hata,
    fontSize: 15,
    fontWeight: '700',
  },
  bos: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 8,
  },
  bosIkon: {
    fontSize: 54,
  },
  bosBaslik: {
    fontSize: 20,
    fontWeight: '800',
    color: Renkler.baslik,
  },
  bosMetin: {
    fontSize: 15,
    color: Renkler.metin,
    textAlign: 'center',
    marginBottom: 10,
  },
  anaDugme: {
    backgroundColor: Renkler.ana,
    borderRadius: 14,
    paddingVertical: 13,
    paddingHorizontal: 26,
  },
  anaDugmeYazi: {
    color: Renkler.beyaz,
    fontSize: 16,
    fontWeight: '700',
  },
});
