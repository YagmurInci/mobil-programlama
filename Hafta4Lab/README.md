# 🛠️ Hafta 4 Lab: Bilgi İşlem Teknik Destek Paneli

Bu proje, **Mobil Programlama** dersi 4. hafta laboratuvar çalışması kapsamında geliştirilmiştir. Üniversite Bilgi İşlem Daire Başkanlığı için tasarlanmış kapsamlı bir **Teknik Destek ve Arıza Yönetim Paneli** uygulamasıdır. `FlatList` ile liste yönetimi, dinamik filtreleme, ekran boyutuna duyarlı (responsive) özet kartları ve etkileşimli durum güncelleme mekanizmalarını içerir.

---

## 📸 Ekran Görüntüleri

> **Not:** Uygulamanın ekran görüntülerini `Hafta4Lab/screenshots/` klasörüne aşağıdaki dosya adlarıyla ekleyebilirsiniz.

| 1. Teknik Destek Paneli | 2. Filtreleme & Durum Güncelleme |
| :---: | :---: |
| <img src="./screenshots/1-teknik-destek-paneli.jpeg" width="320" alt="Teknik Destek Paneli Ana Görünüm" /><br><sub><b>Şekil 1: Özet Kartları ve Talep Listesi</b></sub> | <img src="./screenshots/2-filtreleme-ve-durum.jpeg" width="320" alt="Filtreleme ve Durum Değişikliği" /><br><sub><b>Şekil 2: Filtrelenmiş Talepler ve Buton Etkileşimi</b></sub> |

---

## 🚀 Proje Özellikleri

### 1. Dinamik Özet İstatistik Kartları (KPIs)
- **Toplam Talep:** Sistemdeki tüm arıza bildirimlerinin sayısı.
- **Açık Talep:** Henüz müdahale edilmemiş talepler (Kırmızı renk vurgusu `#dc2626`).
- **İşlemde:** Teknik ekip tarafından üzerinde çalışılan talepler (Mavi renk `#2563eb`).
- **Tamamlanan:** Çözüme ulaştırılmış talepler (Yeşil renk `#16a34a`).
- **Duyarlı (Responsive) Izgara:** `useWindowDimensions` kancası ile ekran genişliği 600px ve üzerindeyse 4 sütun, mobil ekranlarda 2 sütun düzenine otomatik uyarlanır.

### 2. Duruma Göre Filtreleme
- Kullanıcılar **Tümü**, **Açık**, **İşlemde** ve **Tamamlandı** sekmelerine basarak listeyi anlık olarak filtreleyebilir.

### 3. İnteraktif Durum Yaşam Döngüsü (State Management)
- Her talep kartı üzerinde duruma özel aksiyon butonu bulunur:
  - `Açık` durumundaki talep için: **"İşleme Al →"** butonu (durumu `İşlemde` yapar).
  - `İşlemde` durumundaki talep için: **"Tamamla ✓"** butonu (durumu `Tamamlandı` yapar).
  - `Tamamlandı` durumundaki talep için: Buton gizlenir ve yeşil **"İşlem tamamlandı"** ibaresi gösterilir.
- Durum değiştikçe en üstteki özet sayaçları reaktif olarak güncellenir.

### 4. Boş Liste Görünümü (`ListEmptyComponent`)
- Seçilen filtrede kayıt olmaması durumunda kullanıcıya bilgilendirici "Kayıt bulunamadı" mesajı gösterilir.

---

## 🛠️ Kullanılan Teknolojiler ve Kancalar (Hooks)

- **React & React Native:** `0.86.3` / `19.2.3`
- **Expo SDK:** `~57.0.28`
- **Kullanılan Kancalar:**
  - `useState`: Talep verileri (`talepler`) ve aktif filtre (`aktifFiltre`) durumları.
  - `useWindowDimensions`: Cihaz genişliğine göre dinamik kart genişliği hesaplama.
- **Temel Bileşenler:**
  - `FlatList`: Performanslı liste görünümü ve `ListHeaderComponent` entegrasyonu.
  - `SafeAreaProvider` & `SafeAreaView`: Cihaz çentiği ve güvenli alan yönetimi.
  - `StatusBar`: Durum çubuğu stil kontrolü.
  - `Pressable`: Filtre ve durum güncelleme butonları.

---

## 📂 Dosya Yapısı

```
Hafta4Lab/
├── App.js              # Teknik Destek Paneli ana bileşeni
├── index.js            # Expo kök kayıt dosyası
├── assets/             # Uygulama ikon ve görselleri
├── screenshots/        # Ekran görüntüleri klasörü
│   └── .gitkeep
├── app.json            # Expo yapılandırması
├── package.json        # Proje bağımlılıkları
└── README.md           # Proje dokümantasyonu
```

---

## 💻 Kurulum ve Çalıştırma

Projeyi çalıştırmak için:

1. **Klasöre gidin:**
   ```bash
   cd Hafta4Lab
   ```

2. **Paketleri yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirici modunu başlatın:**
   ```bash
   npx expo start
   ```

4. **Çalıştırma Seçenekleri:**
   - Android cihaz/emülatör: `a`
   - iOS simülatör: `i`
   - Web tarayıcı: `w`
