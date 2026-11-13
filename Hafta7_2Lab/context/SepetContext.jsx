import { createContext, useContext, useState } from 'react';

// =====================================================================
// ORTAK SEPET (CONTEXT)
// =====================================================================
// Sepeti tek bir ekranın useState'inde tutsaydım diğer ekranlar onu
// göremezdi. Bu yüzden sepet burada, bütün ekranların üstündeki bir
// Provider içinde duruyor; liste, detay ve sepet ekranı aynı veriyi
// okuyup aynı fonksiyonlarla güncelliyor.
const SepetContext = createContext(null);

export function SepetProvider({ children }) {
  // Her satır: { id, ad, fiyat, stok, gorsel, adet }
  const [sepet, setSepet] = useState([]);

  // Ürünü sepete ekler; ürün zaten varsa yeni satır açmaz, adedini artırır.
  // Geriye { basarili, mesaj } döndürür ki ekran kullanıcıya durum
  // gösterebilsin.
  function sepeteEkle(urun, adet = 1) {
    // Adet pozitif tam sayı olmalı
    if (!Number.isInteger(adet) || adet < 1) {
      return { basarili: false, mesaj: 'Adet en az 1 olmalıdır.' };
    }
    if (urun.stok < 1) {
      return { basarili: false, mesaj: `${urun.ad} stokta yok.` };
    }

    const mevcut = sepet.find((satir) => satir.id === urun.id);
    const sepettekiAdet = mevcut ? mevcut.adet : 0;

    // Stok satın alınmış gibi azalmıyor; sadece sepetteki en fazla adedi
    // sınırlıyor.
    if (sepettekiAdet + adet > urun.stok) {
      return {
        basarili: false,
        mesaj: `Stok sınırı: ${urun.ad} için en fazla ${urun.stok} adet eklenebilir (sepette ${sepettekiAdet}).`,
      };
    }

    // Önceki state'e bağlı güncelleme: push yerine map / yeni dizi
    setSepet((onceki) => {
      const varMi = onceki.some((satir) => satir.id === urun.id);
      if (varMi) {
        return onceki.map((satir) =>
          satir.id === urun.id
            ? { ...satir, adet: Math.min(satir.adet + adet, urun.stok) }
            : satir
        );
      }
      return [
        ...onceki,
        {
          id: urun.id,
          ad: urun.ad,
          fiyat: urun.fiyat,
          stok: urun.stok,
          gorsel: urun.gorsel,
          adet,
        },
      ];
    });

    return { basarili: true, mesaj: `${adet} adet ${urun.ad} sepete eklendi.` };
  }

  // Seçilen satırı bir artırır; stok sınırını aşmaz.
  function adetArtir(id) {
    setSepet((onceki) =>
      onceki.map((satir) =>
        satir.id === id && satir.adet < satir.stok
          ? { ...satir, adet: satir.adet + 1 }
          : satir
      )
    );
  }

  // Seçilen satırı bir azaltır; adet 1 ise dokunmaz (silmek için Kaldır var).
  function adetAzalt(id) {
    setSepet((onceki) =>
      onceki.map((satir) =>
        satir.id === id && satir.adet > 1
          ? { ...satir, adet: satir.adet - 1 }
          : satir
      )
    );
  }

  // Seçilen satırı sepetten çıkarır.
  function urunKaldir(id) {
    setSepet((onceki) => onceki.filter((satir) => satir.id !== id));
  }

  // Sepeti tamamen boşaltır.
  function sepetiBosalt() {
    setSepet([]);
  }

  return (
    <SepetContext.Provider
      value={{ sepet, sepeteEkle, adetArtir, adetAzalt, urunKaldir, sepetiBosalt }}
    >
      {children}
    </SepetContext.Provider>
  );
}

// Ekranların sepete ulaşmak için kullandığı özel hook.
export function useSepet() {
  const deger = useContext(SepetContext);
  if (!deger) {
    throw new Error('useSepet, SepetProvider içinde kullanılmalıdır.');
  }
  return deger;
}
