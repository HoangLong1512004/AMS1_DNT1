import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const LienHe = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                        <Image source={require('../image/Vectormenu.png')} tintColor={'gray'} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.imgHeader} source={require('../image/ic_person.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ borderRadius: 15, paddingVertical: 4, flexDirection: 'row', alignItems: 'center', backgroundColor: '#141921', marginBottom: 40 }}>
                <TouchableOpacity>
                    <View style={{ marginHorizontal: 25, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../image/Vectorsearch.png')} tintColor={'gray'} />
                    </View>
                </TouchableOpacity>
                <TextInput placeholder='Search...' placeholderTextColor='#52555A' color='#ffffff' />
            </View>

            <ScrollView>
                <View>
                    <View style={styles.item}>
                        <Image style={styles.image}
                            source={require('../image/sp3.png')} />
                        <View style = {{marginLeft: 20}}>
                            <Text style={styles.heading}>Hồ Chí Minh</Text>
                            <Text style = {{color: 'white'}}>Location: </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={styles.image_start}
                                        source={require('../image/Vectorstart.png')} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('ContactForm')}>  
                            
                                    <Text style = {{marginTop: 5, color: 'orange'}}>Liên hệ</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                    {/* <View>
                        <Text style = {{color: 'white', marginTop: 20, fontSize: 15, textAlign: 'center'}}>MỌI THẮC MẮC XIN ĐỂ LẠI THÔNG TIN LIÊN LẠC</Text>
                        <View style = {{borderRadius: 5, borderWidth: 1, borderColor: 'white', marginTop: 10}}>
                            <Text>Họ và tên</Text>
                        </View>
                    </View> */}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default LienHe

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0C0F14',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20
    },
    container: {
        backgroundColor: '#0C0F14',
        height: '100%',
        padding: 20,
    },
    imgHeader: {
        width: 34,
        height: 34,
        borderRadius: 12,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#141921',
        borderRadius: 15,
        padding: 14,
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40
        // borderRadius: 28,
        // backgroundColor: '#141921',
        // padding: 14,
        // marginRight: 100,

    },
    heading: {
        fontSize: 15,
        color: 'white'
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 1,
        borderRadius: 5,
    },
    image_start: {
        width: 10,
        height: 10,
        marginRight: 10,
        marginTop: 5
    },
})