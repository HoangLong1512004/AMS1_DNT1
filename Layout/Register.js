import {
  Alert,
  Button,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Register = ({navigation}) => {
  const addUser = async data => {
    try {
      const response = await axios.post(
        'https://65d441a13f1ab8c63434bb0d.mockapi.io/account',
        data,
      );
      return response.data; // Trả về dữ liệu từ phản hồi
    } catch (error) {
      console.error('Error adding data:', error);
      throw error; // Xử lý lỗi
    }
  };
  const [getEmail, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [RePass, setRpass] = useState('');
  const [fullName, setName] = useState('');
  const [VisiblePass, setVisiblePass] = useState(false);
  const [VisibleRePass, setVisibleRePass] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.background}>
          <Image style={styles.img} source={require('../image/logo.png')} />
          <Text style={styles.baseText}>
            <Text style={styles.text16}>Welcome to Lungo !!</Text>
            {'\n\n'}
            <Text style={styles.text12}>Register to Continue</Text>
          </Text>

          {/* Nhập thông tin */}
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'#828282'}
            value={fullName}
            onChangeText={text => {
              setName(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#828282'}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            value={getEmail}
          />
          <View style={styles.input}>
            <TextInput
              style={styles.input1}
              placeholder="Password"
              placeholderTextColor={'#828282'}
              secureTextEntry={VisiblePass ? false : true}
              value={pass}
              onChangeText={text => setPass(text)}
            />
            <TouchableOpacity
              onPress={() => {
                setVisiblePass(!VisiblePass);
              }}>
              {VisiblePass ? (
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
              secureTextEntry={VisibleRePass ? false : true}
              value={RePass}
              onChangeText={text => setRpass(text)}
            />
            <TouchableOpacity onPress={() => setVisibleRePass(!VisibleRePass)}>
              {VisibleRePass ? (
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

        {/* Đăng Ký */}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (pass != RePass) {
                ToastAndroid.show('Sai mk', ToastAndroid.SHORT);
                return;
              }

              // tạo mock api đẩy lên mock api
              const newData = {
                fullName: fullName,
                emailAddress: getEmail,
                password: pass,
              };

              await addUser(newData);
              ToastAndroid.show('Tạo tài khoản thành công', ToastAndroid.SHORT);
              navigation.goBack();
            }}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        {/* Quay về đăng nhập */}
        <View>
          <Text style={[styles.baseText, styles.text12]}>
            {'\n'}
            You have an account? Click
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.textOrange}> Sign in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C0F14',
    height: '100%',
  },
  background: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  img: {
    width: 120,
    height: 120,
    marginTop: 60,
  },
  baseText: {
    color: '#FFFFFF',
    fontFamily: 'Cochin',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text12: {
    fontSize: 12,
    color: '#828282',
  },
  text16: {
    fontSize: 16,
  },
  input1: {
    paddingStart: -2,
    width: '90%',
    color: 'white',
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
  button: {
    width: '94%',
    height: 50,
    backgroundColor: '#D17842',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '3%',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonGG: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  buttonTextGG: {
    color: '#000000',
    paddingRight: 70,
  },
  googleImage: {
    width: 20,
    height: 20,
  },
  eyeImage: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  textOrange: {
    color: '#D17842',
  },
});
