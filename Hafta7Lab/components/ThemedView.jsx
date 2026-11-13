import { View } from 'react-native';
import useTheme from '../hooks/useTheme';

// =====================================================================
// ThemedView: TEMA UYUMLU KAPSAYICI
// =====================================================================
// Normal bir View gibi çalışır; tek farkı arka plan rengini aktif temadan
// almasıdır. Sayfanın en dış kapsayıcısı olarak kullanılır.
//
// style    : dışarıdan gelen ek stiller (flex, padding vb.)
// ...props : View'in kabul ettiği diğer bütün özellikler aynen aktarılır
export default function ThemedView({ style, ...props }) {
  const { theme } = useTheme();

  // Dizi içinde sonra gelen stil öncekini ezer: önce temanın rengi,
  // sonra dışarıdan gelen style. Yani istenirse renk dışarıdan değiştirilebilir.
  return <View style={[{ backgroundColor: theme.background }, style]} {...props} />;
}
