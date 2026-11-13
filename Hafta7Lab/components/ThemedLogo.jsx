import { StyleSheet, Text, View } from 'react-native';
import useTheme from '../hooks/useTheme';

// =====================================================================
// ThemedLogo: TEMA UYUMLU LOGO
// =====================================================================
// Resim dosyası yerine kodla çizilen bir logo: içinde baş harflerim olan
// bir daire ve köşesinde temayı gösteren küçük bir rozet.
//   Açık tema -> mor daire, beyaz harf, güneş rozeti
//   Koyu tema -> açık mor daire, koyu harf, ay rozeti
export default function ThemedLogo({ style }) {
  const { theme, isDark } = useTheme();

  return (
    <View style={[styles.wrapper, style]}>
      <View style={[styles.circle, { backgroundColor: theme.logoBackground }]}>
        <Text style={[styles.initials, { color: theme.logoText }]}>Yİ</Text>
      </View>

      {/* Rozet: hangi temada olduğumuzu bir bakışta gösterir */}
      <View
        style={[
          styles.badge,
          { backgroundColor: theme.uiBackground, borderColor: theme.border },
        ]}
      >
        <Text style={styles.badgeIcon}>{isDark ? '🌙' : '☀️'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 64,
    height: 64,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32, // genişliğin yarısı = tam daire
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  badge: {
    position: 'absolute', // dairenin üstüne, sağ alt köşeye oturur
    right: -6,
    bottom: -6,
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeIcon: {
    fontSize: 14,
  },
});
