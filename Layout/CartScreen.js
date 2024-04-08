import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Picker,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Select from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';

const CartScreen = () => {
  const [value, setValue] = useState('');

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://65c4f22adae2304e92e3b433.mockapi.io/products')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
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
              source={require('../image/Vectormenu.png')}
              tintColor={'gray'}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
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
            style={styles.imgHeader}
            source={require('../image/ic_person.png')}
          />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <View style={styles.donHang}>
              <Image
                style={styles.image}
                source={require('../image/sp3.png')}
              />
              <View>
                <Text style={styles.noiDung}>{item.name}</Text>
                <Text style={styles.noiDung1}>{item.title}</Text>
                <View style={styles.gm}>
                  <Text style={styles.gm1}>250gm</Text>
                  <Text style={{color: '#D17842', fontSize: 25}}>$</Text>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 10,
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}>
                    6.20
                  </Text>
                </View>
                <View style={styles.click}>
                  <TouchableOpacity style={styles.botton}>
                    <Image
                      style={styles.name}
                      source={require('../image/Vectoradd.png')}
                    />
                  </TouchableOpacity>

                  <Text style={styles.name1}>1</Text>

                  <TouchableOpacity style={styles.botton}>
                    <Image
                      style={styles.name}
                      source={require('../image/Vector.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}>
        <View>
          <Text style={{color: 'white', alignItems: 'center'}}>
            Total Price
          </Text>
          <View style={styles.price}>
            <Text style={[styles.price, {color: '#D17842'}]}>$</Text>
            <Text style={[styles.price, {color: 'white'}]}>10.40</Text>
          </View>
        </View>
        <View>
          <Text style={styles.cart}>Pay</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0C0F14',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
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
  menu: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  name: {
    tintColor: 'orange',
  },
  botton: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  image1: {
    width: 30,
    height: 30,
    marginRight: 145,
    marginLeft: 10,
    borderRadius: 10,
  },
  image2: {
    width: 30,
    height: 30,
    marginLeft: 145,
    borderRadius: 10,
  },
  image3: {
    width: 110,
    height: 110,
    marginRight: 20,
    borderRadius: 5,
  },
  gm: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  gm1: {
    color: 'white',
    padding: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: 'black',
    backgroundColor: '#0C0F14',
    borderRadius: 10,
  },
  gm2: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  gm3: {
    color: 'white',
    padding: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  gm4: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  name1: {
    color: 'white',
    paddingHorizontal: 20,
    margin: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#D17842',
    borderRadius: 5,
    backgroundColor: 'black',
  },
  click: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  click1: {
    flexDirection: 'row',
  },
  donHang: {
    marginTop: 10,
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'white',
    borderRadius: 15,
    backgroundColor: '#141921',
  },
  donHang1: {
    marginTop: 10,
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: 'white',
    borderRadius: 10,
  },
  noiDung: {
    marginRight: 100,
    textAlign: 'right',
    fontSize: 25,
    color: 'white',
  },
  noiDung1: {
    marginRight: 100,
    color: 'white',
  },
  item: {
    alignItems: 'center',
  },
  image: {
    marginTop: 10,
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'normal',
    color: 'white',
  },
  price: {
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    color: 'white',
    borderRadius: 20,
    borderWidth: 1,
    textAlign: 'center',
    paddingHorizontal: 85,
    paddingVertical: 15,
    fontSize: 15,
    backgroundColor: '#D17842',
  },
  itemCart: {},
});
