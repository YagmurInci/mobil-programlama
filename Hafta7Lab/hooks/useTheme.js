import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

// =====================================================================
// useTheme: AKTİF TEMAYI VEREN ÖZEL HOOK
// =====================================================================
// useColorScheme() cihazın (veya app.json'daki userInterfaceStyle ayarının)
// o anki temasını verir: 'dark' ya da 'light'. Tema değişirse bu hook'u
// kullanan bileşenler otomatik olarak yeniden çizilir.
//
// Bu iki satırı beş bileşenin hepsine ayrı ayrı yazmak yerine tek bir
// hook'a aldım; bileşenler sadece useTheme() çağırıyor.
export default function useTheme() {
  const colorScheme = useColorScheme();

  // Tema 'dark' değilse (light ya da bilinmiyorsa) açık temaya düşüyoruz.
  const isDark = colorScheme === 'dark';
  const theme = isDark ? Colors.dark : Colors.light;

  return { theme, isDark };
}
