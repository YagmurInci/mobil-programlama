# 📱 Expo Router Starter & TypeScript Şablonu (`my-app`)

Bu proje, **Expo SDK** ve **Expo Router** altyapısıyla geliştirilmiş, TypeScript destekli, çift sekmeli (Tabs), açık/koyu tema (Dark/Light mode) ve evrensel platform (iOS, Android, Web) uyumluluğuna sahip modern bir başlangıç şablonudur.

---

## 📸 Ekran Görüntüleri

> **Not:** Ekran görüntülerinizi `my-app/screenshots/` klasörüne aşağıdaki dosya adlarıyla ekleyebilirsiniz.

| 1. Ana Sayfa (Home) | 2. Keşfet Sayfası (Explore) |
| :---: | :---: |
| <img src="./screenshots/1-home-screen.png" width="300" alt="Home Ekranı" /><br><sub><b>Şekil 1: Animasyonlu İkon ve Başlangıç Ekranı</b></sub> | <img src="./screenshots/2-explore-screen.png" width="300" alt="Explore Ekranı" /><br><sub><b>Şekil 2: Akordeon ve Tema Bileşenleri</b></sub> |

---

## 🚀 Proje Özellikleri

- **Dosya Tabanlı Sekme Navigasyonu (`app-tabs.tsx`):**
  - 🏠 **Home (`src/app/index.tsx`):** Karşılama ekranı, animasyonlu ikon ve geliştirici ipuçları.
  - 🧭 **Explore (`src/app/explore.tsx`):** Açılır-kapanır (`Collapsible`) içerikler ve platform rehberleri.
- **Tip Güvenliği (TypeScript):** Tam tip tanımlamaları (`tsconfig.json`, `expo-env.d.ts`).
- **Tema Desteği:** `useColorScheme` kancası ile sistem temasını (Açık / Koyu) otomatik algılama ve tema renk paleti (`theme.ts`).
- **Mikro Animasyonlar:** Web ve mobil için optimize edilmiş animasyonlu sembol bileşenleri (`animated-icon.tsx`, `animated-icon.web.tsx`).
- **Evrensel Web Desteği:** `@expo/metro-runtime` ile modern web çıktısı.

---

## 🛠️ Kullanılan Teknolojiler

- **Expo SDK:** `~57.0.28`
- **React & React Native:** `0.86.3` / `19.2.3`
- **TypeScript:** `^5.3.3`
- **Expo Router:** Sekmeli ve evrensel yönlendirme
- **Lucide / Vector Icons:** Şık arayüz ikonları

---

## 📂 Dosya Yapısı

```
my-app/
├── src/
│   ├── app/                    # Expo Router rota ekranları
│   │   ├── _layout.tsx         # Kök ve sekme düzeni
│   │   ├── index.tsx           # Ana sayfa (Home)
│   │   └── explore.tsx         # Keşfet sayfası (Explore)
│   ├── components/             # Yeniden kullanılabilir UI bileşenleri
│   │   ├── animated-icon.tsx
│   │   ├── themed-text.tsx
│   │   ├── themed-view.tsx
│   │   └── ui/collapsible.tsx
│   ├── constants/              # Tema ve renk sabitleri
│   └── hooks/                  # Tema ve renk şeması kancaları
├── assets/                     # İkonlar ve logolar
├── screenshots/                # Ekran görüntüleri klasörü
│   └── .gitkeep
├── package.json
└── README.md
```

---

## 💻 Kurulum ve Çalıştırma

1. **Dizine geçin:**
   ```bash
   cd my-app
   ```

2. **Bağımlılıkları kurun:**
   ```bash
   npm install
   ```

3. **Uygulamayı başlatın:**
   ```bash
   npx expo start
   ```
