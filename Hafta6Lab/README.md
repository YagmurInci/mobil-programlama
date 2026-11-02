# 🧭 Hafta 6 Lab: Expo Router ile Çok Sayfalı Gezinme ve Dinamik Rotalama

Bu proje, **Mobil Programlama** dersi 6. hafta laboratuvar çalışması kapsamında geliştirilmiştir. Modern **Expo Router** (dosya tabanlı yönlendirme - file-based routing) mimarisi kullanılarak geliştirilmiş, dinamik parametreli rotalara (`[id]`) ve özel Stack navigasyonuna sahip **3 farklı mini uygulamayı** barındıran modüler bir mobil projedir.

---

## 📸 Ekran Görüntüleri

> **Not:** Ekran görüntülerinizi `Hafta6Lab/screenshots/` klasörüne aşağıdaki dosya adlarıyla ekleyebilirsiniz.

### 1. Ana Menü
| Ana Menü Arayüzü |
| :---: |
| <img src="./screenshots/1-ana-menu.png" width="320" alt="Hafta 6 Ana Menü" /><br><sub><b>Şekil 1: 3 Laboratuvar Uygulamasına Geçiş Sağlayan Ana Menü</b></sub> |

### 2. Uygulama 1: Arıza Takip Sistemi
| Arıza Listesi | Arıza Detay Sayfası |
| :---: | :---: |
| <img src="./screenshots/2-ariza-listesi.png" width="300" alt="Arıza Listesi Ekranı" /><br><sub><b>Şekil 2.1: Bildirilen Arızalar Listesi</b></sub> | <img src="./screenshots/3-ariza-detay.png" width="300" alt="Arıza Detayı Ekranı" /><br><sub><b>Şekil 2.2: Dinamik Arıza Detayı & Durum Rozeti</b></sub> |

### 3. Uygulama 2: Mini Ürün Kataloğu
| Ürün Kataloğu | Ürün Detay Sayfası |
| :---: | :---: |
| <img src="./screenshots/4-urun-katalogu.png" width="300" alt="Ürün Kataloğu Ekranı" /><br><sub><b>Şekil 3.1: Teknoloji Ürünleri Kataloğu</b></sub> | <img src="./screenshots/5-urun-detay.png" width="300" alt="Ürün Detayı Ekranı" /><br><sub><b>Şekil 3.2: Ürün Fiyat, Stok ve Özellik Detayı</b></sub> |

### 4. Uygulama 3: Öğrenci Ders Programı
| Ders Programı | Ders Detay Sayfası |
| :---: | :---: |
| <img src="./screenshots/6-ders-programi.png" width="300" alt="Ders Programı Ekranı" /><br><sub><b>Şekil 4.1: Haftalık Ders Programı</b></sub> | <img src="./screenshots/7-ders-detay.png" width="300" alt="Ders Detayı Ekranı" /><br><sub><b>Şekil 4.2: Derslik, Saat ve Öğretim Görevlisi Detayı</b></sub> |

---

## 🚀 Proje Mimarisi ve Modülleri

### 🌟 Ana Menü (`app/index.jsx`)
Kullanıcıyı karşılayan ana gezinme ekranıdır. 3 farklı modüle yönlendiren butonlar içerir.

### 🛠️ 1. Modül: Arıza Takip Sistemi (`/ariza`)
- **Liste Ekranı (`app/ariza/index.jsx`):** Kayıtlı destek taleplerini listeler. Her bir kart arıza ID'si, konumu ve durum rozetini gösterir.
- **Dinamik Detay Ekranı (`app/ariza/[id].jsx`):** `useLocalSearchParams` kancası ile URL'den gelen `id` parametresini okur ve ilgili kaydın konum, durum ve açıklama bilgilerini gösterir.
- **Hata Yönetimi:** Geçersiz bir ID girilirse *"Kayıt Bulunamadı!"* uyarısı ve *"Geri Dön"* butonu sunar.

### 📦 2. Modül: Mini Ürün Kataloğu (`/urun`)
- **Liste Ekranı (`app/urun/index.jsx`):** Elektronik ve teknoloji ürünlerini başlık, fiyat ve stok rozetleriyle listeler.
- **Dinamik Detay Ekranı (`app/urun/[id].jsx`):** Seçilen ürünün teknik özellikleri, stok durumu ve açıklamalarını görüntüler.

### 📚 3. Modül: Öğrenci Ders Programı (`/ders`)
- **Liste Ekranı (`app/ders/index.jsx`):** Haftalık ders takvimini gün, saat ve derslik bilgileriyle sunar.
- **Dinamik Detay Ekranı (`app/ders/[id].jsx`):** Ders içeriği, öğretim görevlisi ve AKTS kredi bilgilerini listeler.

---

## 🛠️ Kullanılan Teknolojiler ve Yönlendirme (Routing)

- **Expo Router:** `~58.0.29` (Dosya tabanlı Stack navigasyon)
- **React & React Native:** `0.88.1` / `19.3.0`
- **Gezinme Yöntemleri:**
  - `router.push('/rota')`: Yeni ekrana geçiş
  - `router.back()`: Bir önceki ekrana dönme
  - `useLocalSearchParams()`: Dinamik parametreleri okuma
- **Navigasyon Tasarımı (`app/_layout.jsx`):**
  - Bordo (`#480507`) zeminli özel Stack Header
  - Beyaz başlık metinleri ve geri dönüş butonları

---

## 📂 Dosya Yapısı

```
Hafta6Lab/
├── app/
│   ├── _layout.jsx             # Kök Stack navigasyon yapılandırması
│   ├── index.jsx               # Ana Menü ekranı
│   ├── ariza/
│   │   ├── index.jsx           # Arıza listesi ekranı
│   │   └── [id].jsx            # Dinamik arıza detayı
│   ├── urun/
│   │   ├── index.jsx           # Ürün kataloğu ekranı
│   │   └── [id].jsx            # Dinamik ürün detayı
│   └── ders/
│       ├── index.jsx           # Ders programı ekranı
│       └── [id].jsx            # Dinamik ders detayı
├── components/
│   ├── TicketCard.jsx          # Arıza kartı bileşeni
│   ├── ProductCard.jsx         # Ürün kartı bileşeni
│   ├── CourseCard.jsx          # Ders kartı bileşeni
│   └── StatusBadge.jsx         # Durum rozeti bileşeni
├── data/
│   ├── tickets.js              # Arıza mock verileri
│   ├── products.js             # Ürün mock verileri
│   └── courses.js              # Ders mock verileri
├── screenshots/                # Ekran görüntüleri klasörü
│   └── .gitkeep
├── app.json                    # Expo konfigürasyonu
├── package.json                # Bağımlılıklar
└── README.md                   # Proje dokümantasyonu
```

---

## 💻 Kurulum ve Çalıştırma

Projeyi çalıştırmak için:

1. **Dizine geçin:**
   ```bash
   cd Hafta6Lab
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Uygulamayı başlatın:**
   ```bash
   npx expo start
   ```

4. **Kullanım:** Terminal üzerinden `a` (Android) veya `w` (Web) seçerek sayfalar arası geçişleri test edebilirsiniz.
