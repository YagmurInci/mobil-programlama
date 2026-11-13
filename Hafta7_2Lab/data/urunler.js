// =====================================================================
// YEREL ÜRÜN VERİSİ
// =====================================================================
// Bu labda ürünler internetten gelmiyor; hepsi bu dosyadaki dizide
// duruyor. Fiyatı "1.200 TL" gibi metin olarak değil, 1200 sayısı olarak
// tutuyorum ki sepette çarpma / toplama yapabileyim. "TL" yazısı sadece
// ekranda gösterirken ekleniyor (bkz. utils/para.js).
//
// gorsel: require(...) ile assets klasöründeki yerel fotoğraf bağlanır.
// stok: sepete konabilecek en fazla adedi sınırlar (0 ise eklenemez).
export const urunler = [
  {
    id: 'P101',
    ad: 'Kablosuz kulaklık',
    fiyat: 1200,
    stok: 10,
    aciklama:
      'Kütüphanede ders çalışırken gürültüyü azaltan, 30 saat pil ömrü olan kulak üstü Bluetooth kulaklık.',
    gorsel: require('../assets/kulaklik.png'),
  },
  {
    id: 'P102',
    ad: 'Günlük sırt çantası',
    fiyat: 800,
    stok: 6,
    aciklama:
      '15.6 inç laptop bölmeli, su itici kumaştan üretilmiş, kampüste gün boyu rahat taşınan sırt çantası.',
    gorsel: require('../assets/canta.png'),
  },
  {
    id: 'P103',
    ad: 'Masa lambası',
    fiyat: 600,
    stok: 0,
    aciklama:
      'Üç kademeli ışık ayarı olan, yurt odası ve çalışma masası için katlanabilir LED masa lambası.',
    gorsel: require('../assets/lamba.png'),
  },
  {
    id: 'P104',
    ad: 'Çelik termos',
    fiyat: 350,
    stok: 15,
    aciklama:
      'Sabah dersine kahveni sıcak götüren, 500 ml hacimli, sızdırmaz kapaklı çelik termos.',
    gorsel: require('../assets/termos.png'),
  },
  {
    id: 'P105',
    ad: 'Spiralli defter',
    fiyat: 180,
    stok: 3,
    aciklama:
      'Ders notları için 120 yaprak, kareli, sert kapaklı A4 spiralli defter.',
    gorsel: require('../assets/defter.png'),
  },
];

// Kimliğe göre tek ürünü bulur; yoksa undefined döner.
export function urunBul(id) {
  return urunler.find((urun) => urun.id === id);
}
