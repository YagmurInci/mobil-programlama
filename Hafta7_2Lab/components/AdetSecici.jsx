import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Renkler } from '../constants/Renkler';

// =====================================================================
// ADET SEÇİCİ
// =====================================================================
// Eksi düğmesi, adet ve artı düğmesi. Sayıyı kendi içinde tutmuyor;
// adet dışarıdan geliyor, düğmeler de dışarıdan gelen fonksiyonları
// çağırıyor. Böylece hem detay ekranındaki yerel sayaçla hem de sepetteki
// ortak fonksiyonlarla kullanılabiliyor.
export default function AdetSecici({
  adet,
  onArtir,
  onAzalt,
  azaltKapali = false,
  artirKapali = false,
}) {
  return (
    <View style={styles.kutu}>
      <Pressable
        onPress={onAzalt}
        disabled={azaltKapali}
        accessibilityRole="button"
        accessibilityLabel="Adedi bir azalt"
        accessibilityState={{ disabled: azaltKapali }}
        style={[styles.dugme, azaltKapali && styles.dugmeKapali]}
      >
        <Text style={styles.isaret}>−</Text>
      </Pressable>

      <Text style={styles.adet} accessibilityLabel={`Adet ${adet}`}>
        {adet}
      </Text>

      <Pressable
        onPress={onArtir}
        disabled={artirKapali}
        accessibilityRole="button"
        accessibilityLabel="Adedi bir artır"
        accessibilityState={{ disabled: artirKapali }}
        style={[styles.dugme, artirKapali && styles.dugmeKapali]}
      >
        <Text style={styles.isaret}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  kutu: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
  },
  dugme: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: Renkler.ana,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dugmeKapali: {
    backgroundColor: '#CFC6C3',
  },
  isaret: {
    color: Renkler.beyaz,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  adet: {
    minWidth: 34,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    color: Renkler.baslik,
  },
});
