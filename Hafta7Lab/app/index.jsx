import { Fragment } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Derste yazılan tema uyumlu özel bileşenler
import Spacer from '../components/Spacer';
import ThemedCard from '../components/ThemedCard';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import { Colors } from '../constants/Colors';

// =====================================================================
// GÜNLÜK PLAN VERİSİ
// =====================================================================
// Her görev bir nesne: saat + yapılacak iş. Kartları tek tek elle yazmak
// yerine bu diziyi map() ile dolaşıp her eleman için bir ThemedCard
// üretiyorum. Yeni görev eklemek için diziye bir satır eklemek yeterli.
const GUNLUK_PLAN = [
  { saat: '08:30', gorev: 'Kahvaltı yap, kahveni al' },
  { saat: '10:00', gorev: 'Mobil Programlama dersine gir' },
  { saat: '13:00', gorev: 'Öğle arası ver' },
  { saat: '15:30', gorev: 'Lab ekran görüntülerini al ve README yaz' },
  { saat: '21:00', gorev: 'Kitap oku ve günü kapat' },
];

// =====================================================================
// ANA EKRAN: GÜNLÜK PLANIM
// =====================================================================
export default function Index() {
  // Çentik / durum çubuğu yüksekliği. İçerik saatin ve pilin altına
  // girmesin diye üst boşluğa ekleniyor.
  const insets = useSafeAreaInsets();

  return (
    // ThemedView: sayfanın tamamını saran kapsayıcı. flex: 1 ile ekranın
    // tümünü kaplar, arka plan rengini temadan alır.
    <ThemedView style={[styles.container, { paddingTop: insets.top + 20 }]}>
      {/* Durum çubuğu ikonları: koyu temada açık, açık temada koyu olur */}
      <StatusBar style="auto" />

      {/* ScrollView: kartlar ekrana sığmazsa aşağı kaydırılabilsin */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 1) Temaya göre renk ve rozet değiştiren logo */}
        <ThemedLogo />

        <Spacer height={20} />

        {/* 2) Başlık: title prop'u sayesinde theme.title rengini alır */}
        <ThemedText title style={styles.heading}>
          Yağmur&apos;un Günlük Planı
        </ThemedText>

        <Spacer height={8} />

        {/* 3) Açıklama: title yok, normal metin rengi (theme.text) */}
        <ThemedText style={styles.subtitle}>
          Bugün beni neler bekliyor, hepsi tek ekranda.
        </ThemedText>

        <Spacer height={30} />

        {/* 4) EK GÖREV: Bugünün Önceliği kartı.
            Diğer kartlardan ayrılsın diye turuncu ve kalın bir çerçeve
            veriyorum. Zemin rengi yine ThemedCard'dan (temadan) geliyor,
            bu yüzden koyu temada da düzgün görünüyor. */}
        <ThemedCard style={styles.priorityCard}>
          <ThemedText title style={styles.priorityLabel}>
            ⭐ Bugünün Önceliği
          </ThemedText>
          <Spacer height={8} />
          <ThemedText style={styles.priorityText}>
            Hafta 7 labını bitir ve GitHub&apos;a yükle
          </ThemedText>
        </ThemedCard>

        <Spacer height={15} />

        {/* 5) Görev kartları: dizideki her görev için bir ThemedCard.
            key   : React'in liste elemanlarını ayırt etmesi için şart.
            index : son karttan sonra gereksiz boşluk bırakmamak için. */}
        {GUNLUK_PLAN.map((item, index) => (
          <Fragment key={item.saat}>
            <ThemedCard>
              <ThemedText title style={styles.time}>
                {item.saat}
              </ThemedText>
              <Spacer height={8} />
              <ThemedText>{item.gorev}</ThemedText>
            </ThemedCard>

            {index < GUNLUK_PLAN.length - 1 && <Spacer height={15} />}
          </Fragment>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

// =====================================================================
// SAYFA STİLLERİ
// =====================================================================
// Burada sadece ölçü ve yerleşim var. Tema renkleri bileşenlerin içinde
// çözülüyor; tek istisna her iki temada da aynı kalan turuncu vurgu rengi.
const styles = StyleSheet.create({
  container: {
    flex: 1, // ekranın tamamını kapla
    paddingHorizontal: 20, // içerik kenarlara yapışmasın
  },
  scrollContent: {
    paddingBottom: 40, // en alttaki kartın altında nefes payı
  },
  heading: {
    fontSize: 28,
  },
  subtitle: {
    fontSize: 16,
  },
  time: {
    fontSize: 18,
  },
  priorityCard: {
    borderColor: Colors.warning,
    borderWidth: 2,
  },
  priorityLabel: {
    fontSize: 14,
    color: Colors.warning,
  },
  priorityText: {
    fontSize: 17,
    fontWeight: '600',
  },
});
