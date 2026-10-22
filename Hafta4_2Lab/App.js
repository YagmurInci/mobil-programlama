// =====================================================================
// KÜTÜPHANE VE MODÜL İÇE AKTARMA (IMPORT) BÖLÜMÜ
// =====================================================================

// 'import': Harici bir kütüphaneden veya dosyadan kod/modül projeye dahil etme komut kelimesidir.
// 'React': Kullanıcı arayüzü mantığını, bileşenleri kurmamızı sağlayan ana çatı kütüphanedir.
// '{ useState }': Bileşen hafızasında (state) veri tutmamızı ve bu veri değiştikçe ekranı güncellememizi sağlayan React kancasıdır (hook).
// 'from': Hangi kaynaktan içe aktarma yapılacağını belirten bağlaç kelimesidir.
// 'react': React ana kütüphanesinin paket adıdır.
import React, { useState } from 'react';

// 'import': Modül çağrı komutudur.
// 'View, Text, ...': React Native mobil uygulama arayüzünü çizen görsel bileşenlerdir.
// 'from': Kaynak belirtme kelimesidir.
// 'react-native': Mobil cihaz bileşenlerini barındıran kütüphane adıdır.
import {
  View,           // Diğer bileşenleri içine alan, gruplayan veya kutu (container) görevi gören temel esnek düzen bileşenidir.
  Text,           // Ekranda düz yazı, başlık veya etiket göstermeye yarayan metin bileşenidir.
  TextInput,      // Kullanıcının klavye aracılığıyla metin yazabileceği ve veri girişi yapabileceği girdi kutusudur.
  Pressable,      // Üzerine tıklandığında (dokunulduğunda) veya uzun basıldığında olay (event) tetikleyen esnek dokunmatik bileşendir.
  Switch,         // Açma/kapama (true/false) durumlarını değiştiren mobil uyumlu kaydırmalı anahtar bileşenidir.
  ScrollView,     // Ekran boyutu içeriğe yetmediğinde dikey olarak kaydırma (scrolling) yapılmasını sağlayan kaydırılabilir kapsayıcıdır.
  Alert,          // Kullanıcının ekranında açılır uyarı pencereleri (popup mesajları) veya onay kutuları açan sistem modülüdür.
  StyleSheet,     // Uygulamanın görsel tasarımlarını (renk, boyut, boşluk vb.) performanslı bir şekilde tanımlayan nesne oluşturucudur.
  StatusBar       // Telefonun en tepesinde yer alan saat, şarj ve şebeke simgelerinin olduğu durum çubuğunun görünümünü ayarlayan bileşendir.
} from 'react-native';

// 'import': Modül çağrı komutudur.
// 'SafeAreaProvider, SafeAreaView': Güvenli ekran alanı bileşenleridir.
// 'from': Kaynak belirtme kelimesidir.
// 'react-native-safe-area-context': Telefonların çentikli ekranlarında taşmayı engelleyen kütüphane adıdır.
import {
  SafeAreaProvider, // Güvenli alan (safe area) hesaplamalarının tüm uygulama genelinde yapılabilmesini sağlayan kök sağlayıcıdır.
  SafeAreaView      // İçeriğin telefonun güvenli ekran sınırları içerisinde kalmasını zorunlu kılan alan bileşenidir.
} from 'react-native-safe-area-context';

// =====================================================================
// ANA EKRAN BİLEŞENİ (COMPONENT)
// =====================================================================

// 'function': JavaScript'te yeniden kullanılabilir bir fonksiyon (alt program) tanımlamak için kullanılan anahtar kelimedir.
// 'TeknikDestekEkrani': Tüm formun, listelemenin, detayların ve kullanıcı etkileşimlerinin yönetildiği ana bileşenin özel adıdır.
// '()': Fonksiyona dışarıdan herhangi bir parametre girilmediğini belirten boş parantezlerdir.
// '{': Fonksiyon gövdesinin (kod bloklarının) başlangıcını belirten süslü parantezdir.
function TeknikDestekEkrani() {

  // -----------------------------------------------------------------
  // 1. FORM DURUMLARI (STATE TANIMLAMALARI)
  // -----------------------------------------------------------------
  // 'const': Değeri sonradan yeniden atanmayacak (sabit referanslı) değişkenler tanımlamak için kullanılan anahtar kelimedir.
  // '[değişken, güncelleyiciFonksiyon]': JavaScript dizi parçalama (array destructuring) yöntemiyle state'i ve onu değiştiren fonksiyonu alma yöntemidir.
  // 'useState('')': Başlangıç değeri boş metin ('') olan bir hafıza (state) alanı oluşturur.
  
  const [adSoyad, setAdSoyad] = useState('');       // adSoyad: Kullanıcının adını/soyadını saklar. setAdSoyad: Bu değeri değiştiren fonksiyondur.
  const [birim, setBirim] = useState('');           // birim: Kullanıcının departmanını saklar. setBirim: Bu değeri değiştiren fonksiyondur.
  const [baslik, setBaslik] = useState('');         // baslik: Arıza başlık metnini saklar. setBaslik: Bu değeri değiştiren fonksiyondur.
  const [aciklama, setAciklama] = useState('');     // aciklama: Arıza detay metnini saklar. setAciklama: Bu değeri değiştiren fonksiyondur.

  const [kategori, setKategori] = useState('');     // kategori: Seçilen arıza türünü saklar. setKategori: Bu değeri değiştiren fonksiyondur.
  const [oncelik, setOncelik] = useState('Orta');   // oncelik: Aciliyet seviyesini saklar; varsayılan başlangıç değeri 'Orta' kelimesidir. setOncelik: Güncelleyicidir.
  const [acil, setAcil] = useState(false);          // acil: Switch anahtarının açık/kapalı durumunu (true/false) saklar. setAcil: Güncelleyicidir.

  const [talepListesi, setTalepListesi] = useState([]); // talepListesi: Oluşturulan tüm talepleri saklayan dizi (array). Başlangıçta boştur ([]). setTalepListesi: Listeyi günceller.
  const [secilenTalep, setSecilenTalep] = useState(null); // secilenTalep: Üzerine tıklanan tekil talebi saklar. Başlangıçta hiçbiri seçili değil (null). setSecilenTalep: Günceller.

  // -----------------------------------------------------------------
  // 2. SABİT SEÇENEK LİSTELERİ
  // -----------------------------------------------------------------
  
  // 'const kategoriler': Kullanıcının seçebileceği sabit arıza türlerini içeren dizi (array) yapısıdır.
  const kategoriler = [
    'Bilgisayar',
    'Yazıcı',
    'İnternet',
    'Yazılım'
  ];

  // 'const oncelikler': Aciliyet derecelerini belirten sabit dizi yapısıdır.
  const oncelikler = [
    'Düşük',
    'Orta',
    'Yüksek'
  ];

  // 'const durumlar': Bir talebin iş akışı aşamalarını belirten sabit dizi yapısıdır.
  const durumlar = [
    'Bekliyor',
    'İşlemde',
    'Tamamlandı'
  ];

  // -----------------------------------------------------------------
  // 3. FORMU TEMİZLEME FONKSİYONU
  // -----------------------------------------------------------------
  // 'const formuTemizle': Tüm form girdilerini başlangıçtaki boş hallerine geri döndüren ok fonksiyonudur (arrow function).
  const formuTemizle = () => {
    setAdSoyad('');       // Ad soyad kutusunu boş metin yaparak sıfırlar.
    setBirim('');         // Birim kutusunu boş metin yaparak sıfırlar.
    setBaslik('');        // Başlık kutusunu boş metin yaparak sıfırlar.
    setAciklama('');      // Açıklama kutusunu boş metin yaparak sıfırlar.
    setKategori('');      // Kategori seçimini boş metin yaparak kaldırır.
    setOncelik('Orta');   // Önceliği varsayılan 'Orta' değerine çeker.
    setAcil(false);       // Acil anahtarını false (kapalı) konuma getirir.
  };

  // -----------------------------------------------------------------
  // 4. İŞLEM FONKSİYONLARI (KONTROL, EKLEME, SİLME, GÜNCELLEME)
  // -----------------------------------------------------------------

  // 'const talepOlustur': Form alanlarını denetler, kurallara uyulmuşsa yeni talep üretip listeye ekleyen ana fonksiyondur.
  const talepOlustur = () => {
    // 'if': Koşul belirtmek için kullanılan anahtar kelimedir.
    // '!adSoyad.trim()': adSoyad metninin başındaki ve sonundaki boşluklar atıldıktan sonra boş olup olmadığını (!) denetler.
    if (!adSoyad.trim() || !birim.trim() || !baslik.trim()) {
      // 'Alert.alert': Ekranda başlığı ve mesajı olan bir açılır uyarı penceresi gösterir.
      Alert.alert('Eksik Bilgi', 'Lütfen zorunlu alanları doldurunuz.'); 
      // 'return': Koşul sağlanmadığı için fonksiyonun çalışmasını burada durdurur ve alt satırlara geçilmesini engeller.
      return; 
    }

    // 'aciklama.trim().length < 10': Açıklama metninin karakter uzunluğunun 10'dan az olup olmadığını denetler.
    if (aciklama.trim().length < 10) {
      Alert.alert('Geçersiz Açıklama', 'Arıza açıklaması en az 10 karakter olmalıdır.');
      return;
    }

    // '!kategori': Kategori seçilip seçilmediğini denetler.
    if (!kategori) {
      Alert.alert('Kategori Eksik', 'Lütfen bir arıza kategorisi seçiniz.');
      return;
    }

    // 'const yeniTalep': Girilen tüm verileri bir arada tutan JavaScript nesnesi (Object) tanımıdır.
    const yeniTalep = {
      id: 'TLP-' + Date.now(), // 'Date.now()': O anki milisaniye değerini alarak benzersiz bir kimlik (ID) üretir.
      adSoyad: adSoyad.trim(),
      birim: birim.trim(),
      baslik: baslik.trim(),
      aciklama: aciklama.trim(),
      kategori: kategori,
      oncelik: oncelik,
      acil: acil,
      durum: 'Bekliyor', // Yeni talebin varsayılan ilk durumu kelimesidir.
      tarih: new Date().toLocaleString('tr-TR') // 'new Date().toLocaleString()': O anki tarih ve saati Türkçe formatta metne çevirir.
    };

    // 'setTalepListesi([yeniTalep, ...talepListesi])': Yayma (spread) operatörü (...) kullanarak yeni talebi listenin başına koyar, eski talepleri yanına ekler ve listeyi günceller.
    setTalepListesi([yeniTalep, ...talepListesi]);
    formuTemizle(); // Formu sıfırlayan yardımcı fonksiyonu tetikler.

    // İşlemin başarılı olduğunu bildiren uyarı mesajı gösterir.
    Alert.alert('İşlem Başarılı', 'Teknik destek talebiniz oluşturuldu.');
  };

  // 'const talebiSec': Listeden bir talebe kısa dokunulduğunda çalışır ve o talebi detay ekranında göstermek üzere seçer.
  const talebiSec = (talep) => {
    setSecilenTalep(talep); // secilenTalep state'ine tıklanan talep nesnesini atar.
  };

  // 'const talebiSilOnayla': Listeden bir talebe uzun basıldığında silme onay penceresi açan fonksiyondur.
  const talebiSilOnayla = (talep) => {
    Alert.alert(
      'Talep Sil',
      `"${talep.baslik}" başlıklı talebi silmek istediğinize emin misiniz?`, // Şablon dizgesi (template literal) ile dinamik metin birleştirme.
      [
        { text: 'Vazgeç', style: 'cancel' }, // 'Vazgeç' tuşuna basıldığında hiçbir şey yapmaz, pencereyi kapatır.
        {
          text: 'Sil',
          style: 'destructive', // iOS cihazlarda kırmızı renkli silme butonu stili verir.
          onPress: () => {
            // 'filter(t => t.id !== talep.id)': ID'si silinecek talep ID'sine EŞİT OLMAYANLARI tutar, eşleşeni listeden atar (silme mantığı).
            setTalepListesi(talepListesi.filter((t) => t.id !== talep.id));
            // 'if (secilenTalep && secilenTalep.id === talep.id)': Eğer silinen talep o an açık olan detay ise çalışır.
            if (secilenTalep && secilenTalep.id === talep.id) {
              setSecilenTalep(null); // Detay kartını kapatmak için null yapar.
            }
            Alert.alert('Bilgi', 'Talep başarıyla silindi.'); // Başarılı silme bildirimi.
          }
        }
      ]
    );
  };

  // 'const durumDegistir': Seçilen talebin durumunu (Bekliyor, İşlemde, Tamamlandı) anlık olarak güncelleyen fonksiyondur.
  const durumDegistir = (yeniDurum) => {
    // '!secilenTalep': Seçili talep yoksa fonksiyonu hemen durdurur.
    if (!secilenTalep) return;

    // 'map()': Listeyi tek tek tarar, sadece ID'si eşleşen talebin durumunu günceller, diğerlerine dokunmaz.
    const guncellenmisListe = talepListesi.map((t) => {
      if (t.id === secilenTalep.id) {
        return { ...t, durum: yeniDurum }; // Mevcut nesnenin kopyasını alıp durum alanını yeniDurum ile değiştirir.
      }
      return t; // Eşleşmeyenleri olduğu gibi bırakır.
    });

    setTalepListesi(guncellenmisListe); // Listeyi günceller.
    setSecilenTalep({ ...secilenTalep, durum: yeniDurum }); // Açık olan detay kartındaki durumu anında ekrana yansıtır.
  };

  // -----------------------------------------------------------------
  // 5. EKRAN ARAYÜZÜ (JSX DÜZENİ)
  // -----------------------------------------------------------------
  // 'return': Bileşenin ekranda göstereceği görsel yapı taşlarını (JSX) dışarıya döndüren anahtar kelimedir.
  return (
    // SafeAreaView: İçeriğin telefon ekranının dışına (kamera/çentik alanlarına) taşmasını önleyen ana konteyner bileşenidir.
    <SafeAreaView style={styles.container}>
      {/* StatusBar: Üst bildirim çubuğunun yazı rengini koyu yapar. */}
      <StatusBar barStyle="dark-content" backgroundColor="#f1f5f9" />

      {/* ScrollView: İçerik ekrana sığmadığında dikey olarak kaydırma yapmayı sağlayan kapsayıcıdır. */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled" // Klavye açıkken ekrandaki butonlara dokunulabilmesini sağlar.
      >
        {/* Uygulama Başlık Alanı */}
        <View style={styles.header}>
          <Text style={styles.title}>Teknik Destek Sistemi</Text>
          <Text style={styles.subtitle}>Yeni Arıza Bildirimi</Text>
          <Text style={styles.description}>Teknik sorunlarınız için destek talebi oluşturabilirsiniz.</Text>
        </View>

        {/* Kullanıcı Bilgileri Bölümü */}
        <Text style={styles.sectionTitle}>Kullanıcı Bilgileri</Text>
        <Text style={styles.label}>Ad Soyad *</Text>
        <TextInput
          style={styles.input}
          placeholder="Adınızı ve soyadınızı giriniz" // Kutunun içi boşken görünen silik rehber yazıdır.
          placeholderTextColor="#94a3b8"
          value={adSoyad} // Değerini adSoyad state'inden alır.
          onChangeText={setAdSoyad} // Kullanıcı klavyeden her harf yazdığında adSoyad state'ini güncelleyen olay dinleyicisidir.
          autoCapitalize="words" // Yazılan her kelimenin ilk harfini otomatik büyük yapar.
        />

        <Text style={styles.label}>Birim *</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn: Öğrenci İşleri"
          placeholderTextColor="#94a3b8"
          value={birim}
          onChangeText={setBirim} // Kullanıcı yazdıkça birim state'ini günceller.
        />

        {/* Arıza Bilgileri Bölümü */}
        <Text style={styles.sectionTitle}>Arıza Bilgileri</Text>
        <Text style={styles.label}>Arıza Başlığı *</Text>
        <TextInput
          style={styles.input}
          placeholder="Örn: Bilgisayar açılmıyor"
          placeholderTextColor="#94a3b8"
          value={baslik}
          onChangeText={setBaslik} // Kullanıcı yazdıkça baslik state'ini günceller.
        />

        <Text style={styles.label}>Arıza Açıklaması *</Text>
        <TextInput
          style={[styles.input, styles.textArea]} // Birden fazla stil nesnesini dizi şeklinde uygular.
          placeholder="Yaşadığınız sorunu açıklayınız (En az 10 karakter)"
          placeholderTextColor="#94a3b8"
          value={aciklama}
          onChangeText={setAciklama} // Kullanıcı yazdıkça aciklama state'ini günceller.
          multiline={true}           // Birden fazla satırda alt alta yazı yazılmasına izin verir.
          textAlignVertical="top"    // Yazının kutunun en üstünden başlamasını sağlar (özellikle Android için).
        />

        {/* Kategori Seçim Alanı */}
        <Text style={styles.label}>Arıza Kategorisi *</Text>
        <View style={styles.optionsContainer}>
          {/* 'kategoriler.map()': Kategoriler dizisindeki her bir metin için döngüye girip ekrana tıklanabilir butonlar üretir. */}
          {kategoriler.map((item) => (
            <Pressable
              key={item} // React'in listeleri benzersiz takip edebilmesi için zorunlu anahtar kelimedir.
              onPress={() => setKategori(item)} // Tıklandığında o kategoriyi seçilen kategori yapar.
              // 'kategori === item && styles.selectedOption': Eğer seçilen kategori bu öğe ise seçili stilini uygular.
              style={[styles.optionButton, kategori === item && styles.selectedOption]}
            >
              <Text style={[styles.optionText, kategori === item && styles.selectedOptionText]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Öncelik Seçim Alanı */}
        <Text style={styles.label}>Öncelik Seviyesi</Text>
        <View style={styles.optionsContainer}>
          {oncelikler.map((item) => (
            <Pressable
              key={item}
              onPress={() => setOncelik(item)} // Tıklandığında o önceliği seçilen öncelik yapar.
              style={[styles.optionButton, oncelik === item && styles.selectedOption]}
            >
              <Text style={[styles.optionText, oncelik === item && styles.selectedOptionText]}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Acil Müdahale Anahtarı (Switch) */}
        <View style={styles.switchContainer}>
          <View style={styles.switchLabelArea}>
            <Text style={styles.switchText}>Acil Müdahale Talebi</Text>
            <Text style={styles.switchHint}>Sorun acil müdahale gerektiriyorsa etkinleştiriniz.</Text>
          </View>
          <Switch
            value={acil} // Değerini acil state'inden (true/false) alır.
            onValueChange={setAcil} // Anahtar açılıp kapandıkça acil durum state'ini true/false yapar.
            trackColor={{ false: '#cbd5e1', true: '#93c5fd' }} // Açık/kapalı durumdaki arka plan renkleridir.
            thumbColor={acil ? '#2563eb' : '#f8fafc'} // Kayar düğmenin rengidir.
          />
        </View>

        {/* Talep Oluştur Butonu */}
        <Pressable style={styles.submitButton} onPress={talepOlustur}>
          <Text style={styles.submitButtonText}>Talep Oluştur</Text>
        </Pressable>

        {/* Formu Temizle Butonu */}
        <Pressable style={styles.clearButton} onPress={formuTemizle}>
          <Text style={styles.clearButtonText}>Formu Temizle</Text>
        </Pressable>

        {/* Oluşturulan Talepler Listesi Başlığı */}
        <Text style={styles.sectionTitle}>
          Oluşturulan Talepler ({talepListesi.length}) {/* Listenin toplam eleman sayısını gösterir. */}
        </Text>

        {/* Koşullu Gösterim (Ternary Operatörü: `koşul ? doğruysa : yanlışsa`) */}
        {talepListesi.length === 0 ? (
          <Text style={styles.emptyText}>Henüz kayıtlı bir talep bulunmuyor.</Text>
        ) : (
          talepListesi.map((talep) => (
            <Pressable
              key={talep.id}
              style={[
                styles.listItemCard,
                secilenTalep?.id === talep.id && styles.activeListItemCard // Eğer bu talep seçiliyse farklı kenar çizgisi verir.
              ]}
              onPress={() => talebiSec(talep)}         // Kısa dokunma: Detay kartını açar.
              onLongPress={() => talebiSilOnayla(talep)} // Uzun basma: Silme onay penceresini açar.
            >
              <View style={styles.listItemHeader}>
                <Text style={styles.listItemTitle}>{talep.baslik}</Text>
                {/* Talebin durumuna göre (Tamamlandı, İşlemde, Bekliyor) etiket rengini dinamik seçer */}
                <Text style={[
                  styles.badge,
                  talep.durum === 'Tamamlandı' ? styles.badgeSuccess :
                  talep.durum === 'İşlemde' ? styles.badgeWarning : styles.badgeInfo
                ]}>
                  {talep.durum}
                </Text>
              </View>
              <Text style={styles.listItemSub}>
                {talep.kategori} • {talep.adSoyad} ({talep.birim})
              </Text>
              <Text style={styles.listHint}>Detay için dokunun, silmek için basılı tutun.</Text>
            </Pressable>
          ))
        )}

        {/* Seçilen Talep Detay ve Durum Güncelleme Kartı (Koşullu Gösterim: secilenTalep null değilse görünür) */}
        {secilenTalep !== null && (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Talep Detayı & İşlemler</Text>

            <Text style={styles.resultLabel}>Talep Numarası</Text>
            <Text style={styles.resultValue}>{secilenTalep.id}</Text>

            <Text style={styles.resultLabel}>Talep Sahibi & Birim</Text>
            <Text style={styles.resultValue}>{secilenTalep.adSoyad} - {secilenTalep.birim}</Text>

            <Text style={styles.resultLabel}>Arıza Başlığı</Text>
            <Text style={styles.resultValue}>{secilenTalep.baslik}</Text>

            <Text style={styles.resultLabel}>Açıklama</Text>
            <Text style={styles.resultValue}>{secilenTalep.aciklama}</Text>

            <Text style={styles.resultLabel}>Kategori / Öncelik</Text>
            <Text style={styles.resultValue}>{secilenTalep.kategori} / {secilenTalep.oncelik} {secilenTalep.acil ? '(ACİL)' : ''}</Text>

            <Text style={styles.resultLabel}>Talep Durumu</Text>
            <Text style={styles.resultValueBold}>{secilenTalep.durum}</Text>

            {/* Durumu anlık değiştiren butonlar */}
            <Text style={styles.label}>Durumu Güncelle:</Text>
            <View style={styles.optionsContainer}>
              {durumlar.map((durum) => (
                <Pressable
                  key={durum}
                  onPress={() => durumDegistir(durum)} // Butona tıklandığında durumDegistir fonksiyonunu çalıştırır.
                  style={[
                    styles.optionButton,
                    secilenTalep.durum === durum && styles.selectedOption
                  ]}
                >
                  <Text style={[
                    styles.optionText,
                    secilenTalep.durum === durum && styles.selectedOptionText
                  ]}>
                    {durum}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* Detay Kartını Kapat Butonu */}
            <Pressable 
              style={[styles.clearButton, { marginTop: 16 }]}
              onPress={() => setSecilenTalep(null)} // secilenTalep'i null yaparak detay kartını ekrandan kaldırır.
            >
              <Text style={styles.clearButtonText}>Detayı Kapat</Text>
            </Pressable>
          </View>
        )}

        <Text style={styles.footer}>
          Üniversite Bilgi İşlem - Teknik Destek
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// =====================================================================
// 6. KÖK BİLEŞEN (UYGULAMANIN BAŞLANGIÇ NOKTASI)
// =====================================================================
// 'export default function App': Bu dosya dışarıya çağrıldığında çalışacak ana bileşeni dış dünyaya açar.
export default function App() {
  return (
    // SafeAreaProvider: Safe area context kütüphanesinin arka planda düzgün çalışmasını sağlayan sarmalayıcı sağlayıcı bileşendir.
    <SafeAreaProvider>
      <TeknikDestekEkrani /> {/* Ana ekran bileşenini ekrana basar. */}
    </SafeAreaProvider>
  );
}

// =====================================================================
// 7. STİLLER (GÖRSEL TASARIM KURALLARI)
// =====================================================================
// 'StyleSheet.create': Bileşenlerin renklerini, yazı boyutlarını, boşluklarını ve sınır çizgilerini biçimlendiren performanslı stil nesnesidir.
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  scroll: { flex: 1 },
  content: { padding: 20, paddingBottom: 45 },
  header: { marginBottom: 12 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#0f172a' },
  subtitle: { fontSize: 18, fontWeight: '600', color: '#2563eb', marginTop: 8 },
  description: { fontSize: 14, color: '#64748b', marginTop: 8, lineHeight: 21 },
  sectionTitle: { fontSize: 19, fontWeight: 'bold', color: '#1e293b', marginTop: 24, marginBottom: 10 },
  label: { fontSize: 14, fontWeight: '600', color: '#334155', marginTop: 12, marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 10, backgroundColor: '#ffffff', padding: 13, fontSize: 15, color: '#0f172a' },
  textArea: { minHeight: 110 },
  optionsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  optionButton: { paddingVertical: 10, paddingHorizontal: 14, backgroundColor: '#e2e8f0', borderRadius: 8, borderWidth: 1, borderColor: '#cbd5e1' },
  selectedOption: { backgroundColor: '#2563eb', borderColor: '#2563eb' },
  optionText: { color: '#334155', fontSize: 14, fontWeight: '500' },
  selectedOptionText: { color: '#ffffff' },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 22, padding: 14, backgroundColor: '#ffffff', borderRadius: 10, gap: 10 },
  switchLabelArea: { flex: 1 },
  switchText: { fontSize: 15, fontWeight: '600', color: '#334155' },
  switchHint: { fontSize: 12, color: '#64748b', marginTop: 4 },
  submitButton: { backgroundColor: '#2563eb', padding: 16, borderRadius: 10, marginTop: 25, alignItems: 'center' },
  submitButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  clearButton: { backgroundColor: '#ffffff', padding: 14, borderRadius: 10, marginTop: 10, alignItems: 'center', borderWidth: 1, borderColor: '#cbd5e1' },
  clearButtonText: { color: '#475569', fontSize: 15, fontWeight: '600' },
  emptyText: { color: '#64748b', fontStyle: 'italic', marginTop: 4 },
  listItemCard: { backgroundColor: '#ffffff', padding: 14, borderRadius: 10, borderWidth: 1, borderColor: '#cbd5e1', marginTop: 8 },
  activeListItemCard: { borderColor: '#2563eb', borderWidth: 2, backgroundColor: '#eff6ff' },
  listItemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  listItemTitle: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  listItemSub: { fontSize: 13, color: '#64748b', marginTop: 4 },
  listHint: { fontSize: 11, color: '#94a3b8', marginTop: 6, fontStyle: 'italic' },
  badge: { fontSize: 11, fontWeight: '700', paddingVertical: 3, paddingHorizontal: 8, borderRadius: 6, overflow: 'hidden' },
  badgeInfo: { backgroundColor: '#e0f2fe', color: '#0369a1' },
  badgeWarning: { backgroundColor: '#fef3c7', color: '#d97706' },
  badgeSuccess: { backgroundColor: '#dcfce7', color: '#166534' },
  resultCard: { backgroundColor: '#f8fafc', borderWidth: 1, borderColor: '#cbd5e1', padding: 18, borderRadius: 12, marginTop: 25 },
  resultTitle: { fontSize: 19, fontWeight: 'bold', color: '#0f172a', marginBottom: 12 },
  resultLabel: { fontSize: 12, fontWeight: '600', color: '#64748b', marginTop: 10 },
  resultValue: { fontSize: 15, color: '#334155', marginTop: 3 },
  resultValueBold: { fontSize: 15, fontWeight: 'bold', color: '#2563eb', marginTop: 3 },
  footer: { textAlign: 'center', fontSize: 12, color: '#94a3b8', marginTop: 30 }
});