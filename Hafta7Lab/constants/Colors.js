// =====================================================================
// RENK PALETİ (TEMA SÖZLÜĞÜ)
// =====================================================================
// Uygulamadaki bütün renkler tek bir yerde durur. Bileşenler rengi elle
// yazmak yerine buradan okur. Böylece:
//   - bir rengi değiştirmek için tek dosyaya dokunmak yeter,
//   - açık ve koyu temanın anahtarları (background, text, title...) aynı
//     olduğu için bileşen içinde sadece "hangi tema?" sorusu sorulur.

export const Colors = {
  // Temadan bağımsız, her iki temada da aynı kalan vurgu renkleri
  primary: '#7c3aed', // mor: logo ve vurgu rengi
  warning: '#f59e0b', // turuncu: "Bugünün Önceliği" kartı

  // AÇIK TEMA: açık zemin üstüne koyu yazı
  light: {
    background: '#f5f3ff', // sayfa zemini (ThemedView)
    uiBackground: '#ffffff', // kart zemini (ThemedCard)
    border: '#ddd6fe', // kart çerçevesi
    title: '#1e1b4b', // başlık metni (ThemedText title)
    text: '#4b5563', // normal metin (ThemedText)
    logoBackground: '#7c3aed', // logo dairesinin zemini
    logoText: '#ffffff', // logo içindeki harfler
  },

  // KOYU TEMA: koyu zemin üstüne açık yazı
  dark: {
    background: '#13111c',
    uiBackground: '#211d30',
    border: '#3b3556',
    title: '#ffffff',
    text: '#c4c0d4',
    logoBackground: '#c4b5fd',
    logoText: '#1e1b4b',
  },
};
