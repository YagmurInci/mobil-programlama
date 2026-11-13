import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Renkler } from '../constants/Renkler';
import { fiyatYaz } from '../utils/para';

// =====================================================================
// ÜRÜN KARTI
// =====================================================================
// Tek bir ürünü gösteren, listede tekrar tekrar kullanılan kart.
// Sepeti kendi içinde oluşturmaz; sadece kendisine gönderilen onDetay ve
// onSepeteEkle fonksiyonlarını çağırır. Detay açma ve sepete ekleme için
// iki ayrı dokunma alanı var.
export default function UrunKarti({ urun, onDetay, onSepeteEkle }) {
  const stokYok = urun.stok < 1;

  return (
    <View style={styles.kart}>
      {/* 1. dokunma alanı: fotoğraf + bilgiler -> detay sayfası */}
      <Pressable
        onPress={onDetay}
        accessibilityRole="button"
        accessibilityLabel={`${urun.ad} detayını aç`}
        style={styles.bilgiAlani}
      >
        <Image source={urun.gorsel} style={styles.gorsel} />
        <View style={styles.metinler}>
          <Text style={styles.ad} numberOfLines={2}>
            {urun.ad}
          </Text>
          <Text style={styles.fiyat}>{fiyatYaz(urun.fiyat)}</Text>
          <Text style={[styles.stok, stokYok && styles.stokYok]}>
            {stokYok ? 'Stokta yok' : `Stokta ${urun.stok} adet`}
          </Text>
        </View>
      </Pressable>

      {/* 2. dokunma alanı: sepete ekle (stok 0 ise kapalı) */}
      <Pressable
        onPress={onSepeteEkle}
        disabled={stokYok}
        accessibilityRole="button"
        accessibilityLabel={
          stokYok ? `${urun.ad} stokta yok, eklenemez` : `${urun.ad} ürününü sepete ekle`
        }
        accessibilityState={{ disabled: stokYok }}
        style={[styles.ekleDugme, stokYok && styles.ekleDugmeKapali]}
      >
        <Text style={[styles.ekleYazi, stokYok && styles.ekleYaziKapali]}>
          {stokYok ? 'Tükendi' : '+ Sepete ekle'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  kart: {
    backgroundColor: Renkler.kart,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Renkler.cizgi,
    padding: 12,
    gap: 12,
  },
  bilgiAlani: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  gorsel: {
    width: 88,
    height: 88,
    borderRadius: 14,
  },
  metinler: {
    flex: 1,
    gap: 4,
  },
  ad: {
    fontSize: 16,
    fontWeight: '700',
    color: Renkler.baslik,
  },
  fiyat: {
    fontSize: 18,
    fontWeight: '800',
    color: Renkler.ana,
  },
  stok: {
    fontSize: 13,
    color: Renkler.basari,
    fontWeight: '600',
  },
  stokYok: {
    color: Renkler.hata,
  },
  ekleDugme: {
    backgroundColor: Renkler.ana,
    borderRadius: 12,
    paddingVertical: 11,
    alignItems: 'center',
  },
  ekleDugmeKapali: {
    backgroundColor: '#E9E3E1',
  },
  ekleYazi: {
    color: Renkler.beyaz,
    fontSize: 15,
    fontWeight: '700',
  },
  ekleYaziKapali: {
    color: Renkler.soluk,
  },
});
