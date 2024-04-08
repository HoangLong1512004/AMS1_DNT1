import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const PersonalDetails = () => {
  const navigation = useNavigation();
  const [getPassVisible, setPassVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#141921',
                width: 34,
                height: 34,
                borderRadius: 14,
              }}>
              <Image
                source={require('../image/Vectorback.png')}
                tintColor={'gray'}
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: 'white',
                marginLeft: 120,
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Setting
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require('../image/ic_person.png')}
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={'#828282'}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email-address"
              placeholderTextColor={'#828282'}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.input1}
              placeholder="Password"
              placeholderTextColor={'#828282'}
            />
            <TouchableOpacity onPress={() => setPassVisible(!getPassVisible)}>
              {getPassVisible ? (
                <Image
                  source={require('../image/an.png')}
                  style={styles.eyeImage}
                />
              ) : (
                <Image
                  source={require('../image/hien.png')}
                  style={styles.eyeImage}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.input1}
              placeholder="Re-type password"
              placeholderTextColor={'#828282'}
            />
            <TouchableOpacity onPress={() => setPassVisible(!getPassVisible)}>
              {getPassVisible ? (
                <Image
                  source={require('../image/an.png')}
                  style={styles.eyeImage}
                />
              ) : (
                <Image
                  source={require('../image/hien.png')}
                  style={styles.eyeImage}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalDetails;

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
    justifyContent: '',
  },
  imgHeader: {
    width: 34,
    height: 34,
    borderRadius: 12,
  },
  input: {
    alignItems: 'center',
    borderColor: '#252A32',
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    color: 'white',
    marginTop: 20,
    paddingStart: 20,
    height: 50,
    flexDirection: 'row',
  },
  eyeImage: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  input1: {
    paddingStart: -2,
    width: '90%',
    color: 'white',
  },
});
