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
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';

const Login = ({navigation}) => {
  const [getemail, setemail] = useState('');
  const [pass, setPass] = useState('');
  const [getPassVisible, setPassVisible] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://65d441a13f1ab8c63434bb0d.mockapi.io/account')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.background}>
          <Image style={styles.img} source={require('../image/logo.png')} />
          <Text style={styles.baseText}>
            <Text style={styles.text16}>Welcome to Lungo !!</Text>
            {'\n\n'}
            <Text style={styles.text12}>Login to Continue</Text>
          </Text>

          {/* Tài khoản mật khẩu */}
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={'#828282'}
            keyboardType="email-address"
            value={getemail}
            onChangeText={text => {
              setemail(text);
              console.log(text);
            }}
          />
          <View style={styles.input}>
            <TextInput
              style={styles.input1}
              placeholder="Password"
              placeholderTextColor={'#828282'}
              secureTextEntry={getPassVisible ? false : true}
              value={pass}
              onChangeText={text => {
                setPass(text);
                console.log(text);
              }}
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

        {/* Đăng nhập */}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              data.forEach(item => {
                if (getemail === item.username && pass === item.pass) {
                  navigation.navigate('Navigation');
                }
              });         
            }
            }>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonGG]}>
            <Image
              source={require('../image/google.png')}
              style={styles.googleImage}
            />
            <Text style={[styles.buttonText, styles.buttonTextGG]}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>

        {/* Đăng Ký && Quên MK */}
        <View style={{alignItems: 'center'}}>
          <Text style={[styles.baseText, styles.text12]}>
            {'\n\n'}
            Don't have account? Click
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={styles.textOrange}> Register</Text>
            </TouchableOpacity>
            {'\n\n'}
            Forget Password? Click
            <TouchableOpacity>
              <Text style={styles.textOrange}> Reset</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
    marginBottom: 17,
  },
  text12: {
    fontSize: 12,
    color: '#828282',
  },
  text16: {
    fontSize: 16,
  },
  input1: {
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
