// Sayıyı Türkçe para biçiminde yazar: 1200 -> "1.200 TL"
// Binlik ayırıcıyı kendim koyuyorum; böylece telefonda da tarayıcıda da
// aynı sonucu alıyorum.
export function fiyatYaz(tutar) {
  const metin = String(Math.round(tutar)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${metin} TL`;
}
