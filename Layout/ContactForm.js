import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { addContact } from '../api/Contact.api'

const ContactForm = () => {
  const checkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const navigation = useNavigation()
  const [email, setemail] = useState('')
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 20 }}>
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14, margin: 10 }}>
            <Image source={require('../image/Vectorback.png')} tintColor={'gray'} />
          </View>
        </TouchableOpacity>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={name}
            onChangeText={(text) => {
              setName(text)
            }}
            placeholderTextColor={'#828282'}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setemail(text)
            }}
            placeholderTextColor={'#828282'}
          />
        </View>
        <View>
          <TextInput
            style={{
              alignItems: 'center',
              borderColor: '#252A32',
              borderWidth: 1,
              width: '100%',
              borderRadius: 8,
              color: 'white',
              marginTop: 20,
              padding: 30,
              flexDirection: 'row',
            }}
            value={notes}
            placeholder="Notes"
            onChangeText={(text) => {
              setNotes(text)
            }}
            placeholderTextColor={'#828282'}
          />
        </View>
        <TouchableOpacity onPress={() => {
          if(name === '' || email === '' || notes === ''){
            ToastAndroid.show('Bạn nhập thiếu thông tin', ToastAndroid.SHORT)
            return
          }
          console.log(typeof checkEmail(email))
          if(!checkEmail(email)){
            ToastAndroid.show('Sai định dạng email', ToastAndroid.SHORT)
            return
          }

          let newData = {
            fullName: name,
            emailAddress: email,
            note: notes
          }
          let status = addContact(newData)
          ToastAndroid.show('Thành công', ToastAndroid.SHORT)
          setName('')
          setemail('')
          setNotes('')
          console.log(status);
        }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 15,
              borderColor: 'white',
              backgroundColor: '#D17842',
              marginTop: 40,
              padding: 15,
              textAlign: 'center',
              fontSize: 16,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ContactForm

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0F14',
    height: '100%',
    padding: 20,
  },
  item_heart: {
    position: 'absolute',
    width: '100%',
    top: 20,
    right: 20,
    height: '20%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  item_img_info_row_ic: {
    flexDirection: 'column',
    backgroundColor: '#0C0F14',
    padding: 5,
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 45,
    height: 45,
  },
  input: {
    alignItems: 'center',
    borderColor: '#252A32',
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    color: 'white',
    marginTop: 20,
    paddingStart: 30,
    height: 50,
    flexDirection: 'row',
  },
})