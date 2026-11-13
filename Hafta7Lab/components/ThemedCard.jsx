import { StyleSheet, View } from 'react-native';
import useTheme from '../hooks/useTheme';

// =====================================================================
// ThemedCard: TEMA UYUMLU KART
// =====================================================================
// İçine konan her şeyi (children) köşeleri yuvarlak, çerçeveli bir kutu
// içinde gösterir. Zemin ve çerçeve rengi aktif temadan gelir.
export default function ThemedCard({ style, ...props }) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.card, // temadan bağımsız ölçüler (boşluk, köşe yuvarlaklığı)
        { backgroundColor: theme.uiBackground, borderColor: theme.border }, // temaya bağlı renkler
        style, // dışarıdan gelen ek stil (ör. öncelik kartının turuncu çerçevesi)
      ]}
      {...props}
    />
  );
}

// Renk içermeyen, her iki temada da aynı kalan stiller
const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
});
