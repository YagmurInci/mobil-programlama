import { StyleSheet, Text, View } from 'react-native';

import { Renkler } from '../constants/Renkler';
import { fiyatYaz } from '../utils/para';

// =====================================================================
// SEPET ÖZETİ
// =====================================================================
// Toplam adet ve toplam tutarı gösterir. Hesabı kendisi yapmaz; sepet
// ekranı reduce ile hesaplayıp buraya hazır değer gönderir.
export default function SepetOzeti({ toplamAdet, toplamTutar }) {
  return (
    <View
      style={styles.kutu}
      accessibilityLabel={`Sepet özeti: ${toplamAdet} ürün, toplam ${fiyatYaz(toplamTutar)}`}
    >
      <View style={styles.satir}>
        <Text style={styles.etiket}>Toplam adet</Text>
        <Text style={styles.deger}>{toplamAdet}</Text>
      </View>
      <View style={styles.cizgi} />
      <View style={styles.satir}>
        <Text style={styles.etiket}>Toplam tutar</Text>
        <Text style={styles.tutar}>{fiyatYaz(toplamTutar)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kutu: {
    backgroundColor: Renkler.anaAcik,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  satir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  cizgi: {
    height: 1,
    backgroundColor: '#F0CFD1',
    marginVertical: 4,
  },
  etiket: {
    fontSize: 15,
    color: Renkler.metin,
  },
  deger: {
    fontSize: 16,
    fontWeight: '700',
    color: Renkler.baslik,
  },
  tutar: {
    fontSize: 20,
    fontWeight: '800',
    color: Renkler.ana,
  },
});
