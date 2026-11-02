import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#480507' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="index" options={{ title: 'Ana Menü' }} />
      <Stack.Screen name="ariza/index" options={{ title: 'Arıza Listesi' }} />
      <Stack.Screen name="ariza/[id]" options={{ title: 'Arıza Detayı' }} />
      <Stack.Screen name="urun/index" options={{ title: 'Ürün Kataloğu' }} />
      <Stack.Screen name="urun/[id]" options={{ title: 'Ürün Detayı' }} />
      <Stack.Screen name="ders/index" options={{ title: 'Ders Programı' }} />
      <Stack.Screen name="ders/[id]" options={{ title: 'Ders Detayı' }} />
    </Stack>
  );
}