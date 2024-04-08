import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Setting = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                        <Image source={require('../image/Vectorback.png')} tintColor={'gray'} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={{ color: 'white', marginLeft: 120, fontSize: 25, fontWeight: 'bold' }}>Setting</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',  justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../image/history.png')} tintColor={'gray'} />
                    <Text style={{ color: 'white', marginLeft: 35 }}>History</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../image/next-button.png')} tintColor={'gray'} />
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',  justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../image/people.png')} tintColor={'gray'} />
                    <Text style={{ color: 'white', marginLeft: 35 }}>Personal Details</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('PersonalDetails')}>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../image/next-button.png')} tintColor={'gray'} />
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',  justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../image/location.png')} tintColor={'gray'} />
                    <Text style={{ color: 'white', marginLeft: 35 }}>Address</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../image/next-button.png')} tintColor={'gray'} />
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',  justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../image/mobile-payment.png')} tintColor={'gray'} />
                    <Text style={{ color: 'white', marginLeft: 35 }}>Payment Method</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../image/next-button.png')} tintColor={'gray'} />
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',  justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../image/about.png')} tintColor={'gray'} />
                    <Text style={{ color: 'white', marginLeft: 35 }}>About</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../image/next-button.png')} tintColor={'gray'} />
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',  justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../image/help.png')} tintColor={'gray'} />
                    <Text style={{ color: 'white', marginLeft: 35 }}>Help</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../image/next-button.png')} tintColor={'gray'} />
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',  justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../image/exit.png')} tintColor={'gray'} />
                    <Text style={{ color: 'white', marginLeft: 35 }}>Log out</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../image/next-button.png')} tintColor={'gray'} />
                </TouchableOpacity>
                </View>
            
        </SafeAreaView>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C0F14',
        height: '100%',
        padding: 20,
    },
    header: {
        backgroundColor: '#0C0F14',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        justifyContent: ''
    },
    imgHeader: {
        width: 34,
        height: 34,
        borderRadius: 12,
    },
})