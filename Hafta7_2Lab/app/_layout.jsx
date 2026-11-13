import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import SepetDugmesi from '../components/SepetDugmesi';
import { Renkler } from '../constants/Renkler';
import { SepetProvider } from '../context/SepetContext';

// =====================================================================
// KÖK LAYOUT
// =====================================================================
// app/ klasöründeki üç ekranı saran Stack. SepetProvider, Stack'in
// DIŞINDA ve bütün ekranların üstünde duruyor; her sayfaya ayrı Provider
// koysaydım her ekranın kendi ayrı sepeti olurdu.
export default function RootLayout() {
  return (
    <SepetProvider>
      {/* Bordo başlığın üstünde saat / pil ikonları açık renk olsun */}
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Renkler.ana },
          headerTintColor: Renkler.beyaz,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: Renkler.zemin },
        }}
      >
        {/* name: dosyanın app klasörüne göre yolu (.jsx yazılmaz) */}
        <Stack.Screen
          name="index"
          options={{ title: 'Ürünler', headerRight: () => <SepetDugmesi /> }}
        />
        <Stack.Screen
          name="urun/[id]"
          options={{ title: 'Ürün detayı', headerRight: () => <SepetDugmesi /> }}
        />
        <Stack.Screen name="sepet" options={{ title: 'Sepetim' }} />
      </Stack>
    </SepetProvider>
  );
}
