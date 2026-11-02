import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#f1f5f9' }, headerTintColor: '#0f172a' }}>
      <Stack.Screen name="index" options={{ title: 'Ana Menü' }} />
      <Stack.Screen name="ariza/index" options={{ title: 'Arıza Takip Listesi' }} />
      <Stack.Screen name="ariza/[id]" options={{ title: 'Arıza Detayı' }} />
      <Stack.Screen name="urun/index" options={{ title: 'Ürün Kataloğu' }} />
      <Stack.Screen name="urun/[id]" options={{ title: 'Ürün Detayı' }} />
      <Stack.Screen name="ders/index" options={{ title: 'Ders Programı' }} />
      <Stack.Screen name="ders/[id]" options={{ title: 'Ders Detayı' }} />
    </Stack>
  );
}