import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Renkler } from '../constants/Renkler';
import { useSepet } from '../context/SepetContext';

// =====================================================================
// BAŞLIKTAKİ SEPET DÜĞMESİ
// =====================================================================
// Ürünler ve Ürün detayı ekranlarının başlığında sağda durur. Üzerindeki
// sayı sepetteki farklı ürün sayısını değil, TOPLAM ADEDİ gösterir.
export default function SepetDugmesi() {
  const { sepet } = useSepet();
  const toplamAdet = sepet.reduce((toplam, s) => toplam + s.adet, 0);

  return (
    <Pressable
      onPress={() => router.push('/sepet')}
      accessibilityRole="button"
      accessibilityLabel={`Sepete git, sepette ${toplamAdet} ürün var`}
      hitSlop={8}
      style={styles.dugme}
    >
      <Text style={styles.yazi}>🛒 Sepet</Text>
      <View style={styles.rozet}>
        <Text style={styles.rozetYazi}>{toplamAdet}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dugme: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.16)',
    marginRight: 4,
  },
  yazi: {
    color: Renkler.beyaz,
    fontSize: 14,
    fontWeight: '600',
  },
  rozet: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    paddingHorizontal: 6,
    backgroundColor: Renkler.beyaz,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rozetYazi: {
    color: Renkler.ana,
    fontSize: 12,
    fontWeight: '800',
  },
});
