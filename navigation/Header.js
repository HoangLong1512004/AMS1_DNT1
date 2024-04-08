import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                        <Image source={require('../image/Vectormenu.png')} tintColor={'gray'} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.imgHeader} source={require('../image/ic_person.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C0F14',
        height: '10%',
        
    },
    header: {
        backgroundColor: '#0C0F14',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 45
    },
    imgHeader: {
        width: 34,
        height: 34,
        borderRadius: 12,
        
    }
})