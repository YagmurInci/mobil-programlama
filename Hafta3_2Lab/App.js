import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {

    const butonBasildi = () => {
        console.log("Profil Butonuna basıldı")
    };

    const iletisimTiklandi = () => {
        console.log("İletişim butonuna basıldı")
    };

  return (
    <View style={styles.container}>
        <View style={styles.kart}>
            <Image
                source={require('./assets/caticon2.png')}
                style={styles.ProfilResmi}
            />
            <Text style={styles.baslik}>Yagmur Inci</Text>
            <Text style={styles.aciklama}>React Native Developer</Text>
            
            <View style={styles.bilgiSatiri}>
                <Ionicons name="location" size={22} color="#802020" />
                <Text style={styles.bilgiYazi}>Istanbul, Turkey</Text>
            </View>

            <View style={styles.butonGrubu}>
                <Pressable style={styles.buton} onPress={butonBasildi}>
                    <Ionicons name="person" size={22} color="#fff" />
                    <Text style={styles.butonYazi}>Profil Görüntüle</Text>
                </Pressable>

                <Pressable style={styles.iletisimButonu} onPress={iletisimTiklandi}>
                    <Ionicons name="mail" size={22} color="#fff" />
                    <Text style={styles.butonYazi}>İletişim</Text>
                </Pressable>
            </View>

            <View style={styles.menu}>
                <Pressable onPress={() => console.log('Ana Sayfa')}>
                    <Ionicons name="home" size={30} color="#802020" />
                </Pressable>
                <Pressable onPress={() => console.log('Favoriler')}>
                    <Ionicons name="heart" size={30} color="red" />
                </Pressable>
                <Pressable onPress={() => console.log('Ayarlar')}>
                    <Ionicons name="settings" size={30} color="#555" />
                </Pressable>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#802020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kart: {
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    elevation: 5,
  },
  ProfilResmi: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  aciklama: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  bilgiSatiri: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  bilgiYazi: {
    fontSize: 14,
    color: '#888',
    marginLeft: 5,
  },
  butonGrubu: {
    width: '100%',
    gap: 10,
  },
  buton: {
    backgroundColor: '#802020',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  iletisimButonu: {
    backgroundColor: '#4a6fa5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  butonYazi: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  menu: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 20,
  },
});