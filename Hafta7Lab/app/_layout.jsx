import { Stack } from 'expo-router';

// =====================================================================
// KÖK LAYOUT
// =====================================================================
// app/ klasöründeki bütün ekranları saran navigatör. Tek ekranımız var;
// üstteki varsayılan "index" başlık çubuğunu gizliyorum çünkü başlığı
// sayfanın içinde ThemedText ile kendim yazıyorum.
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
