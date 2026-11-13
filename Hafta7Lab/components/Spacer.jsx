import { View } from 'react-native';

// =====================================================================
// Spacer: BOŞLUK BİLEŞENİ
// =====================================================================
// Görünmez, sadece yer kaplayan bir View. Bileşenlerin her birine ayrı ayrı
// margin vermek yerine aralarına <Spacer /> koyarak boşluk bırakılır.
//
// height : dikey boşluk miktarı (verilmezse 15)
// width  : genişlik (verilmezse satırın tamamı)
export default function Spacer({ height = 15, width = '100%' }) {
  return <View style={{ height, width }} />;
}
