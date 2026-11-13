import { Text } from 'react-native';
import useTheme from '../hooks/useTheme';

// =====================================================================
// ThemedText: TEMA UYUMLU METİN
// =====================================================================
// title prop'u verilirse  -> başlık rengi (theme.title) ve kalın yazı
// title prop'u verilmezse -> normal metin rengi (theme.text)
//
// Kullanım:
//   <ThemedText title>Başlık</ThemedText>
//   <ThemedText>Normal metin</ThemedText>
export default function ThemedText({ title = false, style, ...props }) {
  const { theme } = useTheme();

  const textColor = title ? theme.title : theme.text;

  return (
    <Text
      style={[{ color: textColor }, title && { fontWeight: 'bold' }, style]}
      {...props}
    />
  );
}
