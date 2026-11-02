# 📋 Hafta 5 Lab: Gelişmiş Arıza Yönetim & Canlı İstatistik Paneli

Bu proje, **Mobil Programlama** dersi 5. hafta laboratuvar çalışması kapsamında geliştirilmiştir. Kullanıcıdan alınan form girdilerini dinamik bir liste yapısıyla buluşturan, **Modal ile detay inceleme**, **uzun basma (long-press) ile silme** ve **canlı istatistik takibi** özelliklerine sahip tam teşekküllü bir teknik destek sistemidir.

---

## 📸 Ekran Görüntüleri

> **Not:** Ekran görüntülerinizi `Hafta5Lab/screenshots/` klasörüne aşağıdaki dosya adlarıyla ekleyebilirsiniz.

| 1. Form & Canlı Liste | 2. Talep Detay Modalı | 3. Uzun Basma Silme Onayı |
| :---: | :---: | :---: |
| <img src="./screenshots/1-form-ve-liste.png" width="240" alt="Form ve Talep Listesi" /><br><sub><b>Şekil 1: Giriş Formu & Talep Listesi</b></sub> | <img src="./screenshots/2-talep-detay-modal.png" width="240" alt="Talep Detay Modalı" /><br><sub><b>Şekil 2: Modal ile Durum Değiştirme</b></sub> | <img src="./screenshots/3-kayit-silme-onayi.png" width="240" alt="Silme Onay Diyaloğu" /><br><sub><b>Şekil 3: Uzun Basma ile Silme Uyarısı</b></sub> |

---

## 🚀 Proje Özellikleri

### 1. Canlı Talep Özeti (Real-time Analytics)
- Formun hemen üstünde anlık reaktif özet kartı yer alır:
  - **Toplam Talep Sayısı:** Eklenen ve silinen taleplere göre dinamik güncellenir.
  - **Tamamlanan Talep Sayısı:** Durumu "Tamamlandı" olarak işaretlenen talepleri filtreleyerek anlık hesaplar.

### 2. Gelişmiş Form ve Doğrulama Kuralları
- **Zorunlu Alan Kontrolleri:** Ad Soyad, Birim ve Başlık alanlarının boş bırakılmasını veya yalnızca boşluk girilmesini engeller.
- **Karakter Sayısı Kontrolü:** Arıza açıklamasının en az **10 karakter** olması denetlenir.
- **Kategori ve Öncelik:** Kullanıcı en az bir kategori ve öncelik düzeyi belirler.
- **Yeni Kayıt Önceliği:** Oluşturulan yeni talep, listenin en başına (`[yeniTalep, ...talepler]`) eklenir.

### 3. Etkileşimli Talep Kartları & Jestler (Gestures)
- **Kısa Dokunma (`onPress`):** Kart tıklandığında ilgili talebin tüm ayrıntılarını içeren **Detay Modalı** açılır.
- **Uzun Basma (`onLongPress`):** Kullanıcı kart üzerine basılı tuttuğunda `Alert.alert` onay penceresi açılarak kazara silmeler önlenir.

### 4. Modal Üzerinden Durum Güncelleme
- Modal penceresinde talebin numarası, sahibi, açıklaması ve oluşturulma tarihi listelenir.
- Kullanıcı tek dokunuşla durumu **Bekliyor**, **İşlemde** veya **Tamamlandı** olarak güncelleyebilir; güncelleme ana listeye ve canlı istatistiğe anında yansır.

### 5. Durum Rozetleri (Status Badges)
- 🟡 **Bekliyor:** Sarı uyarı tonu
- 🔵 **İşlemde:** Açık mavi bilgilendirme tonu
- 🟢 **Tamamlandı:** Canlı yeşil başarı tonu

---

## 🛠️ Kullanılan Teknolojiler ve Bileşenler

- **React & React Native:** `0.88.1` / `19.3.0`
- **Expo SDK:** `~58.0.22`
- **Bileşenler ve API'ler:**
  - `Modal`: Açılır detay ve düzenleme penceresi
  - `ScrollView`: Kaydırılabilir dikey arayüz
  - `TextInput`: Metin girişleri
  - `Switch`: Acil durum seçimi
  - `Alert`: Onay ve doğrulama diyalogları
  - `Pressable`: Dokunma ve uzun basma jestleri

---

## 📂 Dosya Yapısı

```
Hafta5Lab/
├── App.js              # Teknik Destek ve Yönetim Paneli ana bileşeni
├── index.js            # Kök kayıt dosyası
├── assets/             # İkon ve görseller
├── screenshots/        # Ekran görüntüleri klasörü
│   └── .gitkeep
├── app.json            # Expo yapılandırması
├── package.json        # Paket bağımlılıkları
└── README.md           # Proje dokümantasyonu
```

---

## 💻 Kurulum ve Çalıştırma

Projeyi çalıştırmak için:

1. **Dizine geçin:**
   ```bash
   cd Hafta5Lab
   ```

2. **Bağımlılıkları kurun:**
   ```bash
   npm install
   ```

3. **Uygulamayı başlatın:**
   ```bash
   npx expo start
   ```
