import { StyleSheet, Text, View, Image,Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'


export default function App() {

    const butonBasildi = () => {
        console.log("Profil Butonuna basıldı")
    };
  return (
    <View style={styles.container}>
        <View style={styles.kart}>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.ProfilResmi}
            />
            <Text style={styles.baslik}>Yagmur Inci</Text>
            <Text style={styles.aciklama}>React Native Developer</Text>
            <View style={styles.bilgiSatiri}>
                <Ionicons name="location" size={22} color="#802020" />
                <Text style={styles.bilgiYazi}>Istanbul, Turkey</Text>
            </View>
            <Pressable style={styles.buton} onPress={butonBasildi}>
                <Ionicons name="person" size={22} color="#fff" />
                <Text style={styles.butonYazi}>Profil Görüntüle</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b47474',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kart: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignItems: 'center',
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
    marginBottom: 10,
  },
  bilgiYazi: {
    fontSize: 14,
    color: '#888',
    marginLeft: 5,
  },
  buton: {
    backgroundColor: '#802020',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  butonYazi: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});