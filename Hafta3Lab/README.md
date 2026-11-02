# 📱 Hafta 3 Lab: Kişisel Profil Kartı Uygulaması

Bu proje, **Mobil Programlama** dersi 3. hafta laboratuvar çalışması kapsamında geliştirilmiştir. React Native'in temel görsel ve düzen bileşenleri kullanılarak modern ve duyarlı bir kişisel profil kartı (Profile Card) oluşturulmuştur.

---

## 📸 Ekran Görüntüsü

> **Not:** Uygulamanın ekran görüntüsünü bu alana yerleştirmek için görselinizi `Hafta3Lab/screenshots/profil-karti.png` konumuna eklemeniz yeterlidir.

| Kişisel Profil Kartı |
| :---: |
| <img src="./screenshots/profil-karti.png" width="320" alt="Hafta 3 Profil Kartı Ekran Görüntüsü" /><br><sub><b>Şekil 1: Profil Kartı Arayüzü</b></sub> |

---

## 🚀 Proje Özellikleri

- **Profil Resmi (`Image`):** Uzak sunucu (URI) üzerinden çekilen ve dairesel çerçeveye (`borderRadius: 75`) oturtulan kullanıcı profil fotoğrafı.
- **Kullanıcı Bilgileri (`Text`):** İsim, meslek/unvan ve açıklama metinleri ile hiyerarşik tipografi.
- **Konum Bilgisi:** `@expo/vector-icons/Ionicons` kütüphanesi kullanılarak konum pini ve şehir bilgisi gösterimi.
- **Etkileşimli Buton (`Pressable`):** Dokunma geribildirimi sağlayan ve tıklandığında konsola bilgilendirme mesajı (`console.log`) yazdıran buton yapısı.
- **Özel Tasarım & Renk Paleti:** Uyumlu koyu kırmızı (`#802020`) ve açık pastel (`#b47474`) zemin kontrastı ile kart tasarımı.

---

## 🛠️ Kullanılan Teknolojiler ve Bileşenler

- **React & React Native:** `0.86.3` / `19.2.3`
- **Expo SDK:** `~57.0.28`
- **İkon Paketi:** `@expo/vector-icons` (`Ionicons`)
- **Kullanılan Temel Bileşenler:**
  - `View`: Sayfa ve kart düzeni oluşturma
  - `Text`: Başlık, alt başlık ve açıklama etiketleri
  - `Image`: Profil fotoğrafı gösterimi
  - `Pressable`: Tıklanabilir buton etkileşimi
  - `StyleSheet`: CSS benzeri stil tanımlamaları

---

## 📂 Dosya Yapısı

```
Hafta3Lab/
├── App.js              # Ana uygulama ve profil kartı bileşeni
├── app/
│   └── index.jsx       # Yönlendirme başlangıç noktası
├── assets/             # Uygulama ikon ve görsel kaynakları
├── screenshots/        # Ekran görüntüleri klasörü
│   └── .gitkeep
├── app.json            # Expo yapılandırma dosyası
├── package.json        # Bağımlılıklar ve npm betikleri
└── README.md           # Proje dokümantasyonu
```

---

## 💻 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **İlgili dizine gidin:**
   ```bash
   cd Hafta3Lab
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirici sunucusunu başlatın:**
   ```bash
   npx expo start
   ```

4. **Test Etme:**
   - Terminalde beliren QR kodu **Expo Go** uygulaması ile taratabilir veya
   - `a` tuşuna basarak Android emülatöründe,
   - `w` tuşuna basarak web tarayıcısında çalıştırabilirsiniz.
