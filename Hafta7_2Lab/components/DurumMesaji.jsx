import { StyleSheet, Text, View } from 'react-native';

import { Renkler } from '../constants/Renkler';

// Sepete ekleme sonucunu gösteren küçük bilgi şeridi.
// durum: { basarili: true/false, mesaj: '...' } ya da null (gösterme).
export default function DurumMesaji({ durum }) {
  if (!durum) return null;

  return (
    <View
      accessibilityRole="alert"
      style={[styles.kutu, durum.basarili ? styles.basari : styles.hata]}
    >
      <Text style={[styles.yazi, { color: durum.basarili ? Renkler.basari : Renkler.hata }]}>
        {durum.basarili ? '✓ ' : '! '}
        {durum.mesaj}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kutu: {
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  basari: {
    backgroundColor: Renkler.basariZemin,
  },
  hata: {
    backgroundColor: Renkler.hataZemin,
  },
  yazi: {
    fontSize: 14,
    fontWeight: '600',
  },
});
