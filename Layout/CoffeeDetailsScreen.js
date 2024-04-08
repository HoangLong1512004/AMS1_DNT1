import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { addFa } from '../api/Favorite.api';

const CoffeeDetailsScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.item]}>
          {/* Ảnh */}
          <View style={{ width: '100%', height: '85%' }}>
            {/* anh san SanPham */}
            <Image
              style={[styles.item_img]}
              source={require('../image/sp4.png')}
            />

            {/* phan thong tin  */}
            <View style={[styles.item_img_info]}>
              <View style={styles.item_img_info_row}>
                <View style={{ width: '100%' }}>
                  <Text
                    style={[
                      styles.textBase,
                      { fontSize: 20, fontWeight: 'bold' },
                    ]}>
                    Cappuccino
                  </Text>
                  <Text
                    style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>
                    With Steamed Milk
                  </Text>
                </View>

                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View style={styles.item_img_info_row_ic}>
                    <Image
                      source={require('../image/coffee2.png')}
                      tintColor={'#D17842'}
                    />
                    <Text
                      style={[
                        styles.textBase,
                        { fontSize: 10, color: '#AEAEAE', textAlign: 'center' },
                      ]}>
                      Coffee
                    </Text>
                  </View>
                  <View style={styles.item_img_info_row_ic}>
                    <Image
                      source={require('../image/Vectorwater.png')}
                      tintColor={'#D17842'}
                    />
                    <Text
                      style={[
                        styles.textBase,
                        { fontSize: 10, color: '#AEAEAE', textAlign: 'center' },
                      ]}>
                      Milk
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.item_img_info_row}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../image/Vectorstart.png')}
                    tintColor={'#D17842'}
                  />
                  <Text
                    style={[
                      styles.textBase,
                      { fontSize: 20, fontWeight: 'bold', marginHorizontal: 7 },
                    ]}>
                    4.5
                  </Text>
                  <Text
                    style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>
                    (6,879)
                  </Text>
                </View>
                <View
                  style={[
                    styles.item_img_info_row_ic,
                    { width: '80%', height: '65%', marginLeft: 15 },
                  ]}>
                  <Text
                    style={[styles.textBase, { fontSize: 10, color: '#AEAEAE' }]}>
                    Medium Roasted
                  </Text>
                </View>
              </View>
            </View>

            {/* Nut yeu thich */}
            <View style={[styles.item_heart]}>
              <View
                style={[
                  styles.item_img_info_row_ic,
                  { width: 34, height: 34, marginLeft: 40 },
                ]}>
                <TouchableOpacity onPress={() => {
                  navigation.goBack()
                }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                    <Image source={require('../image/Vectorback.png')} tintColor={'gray'} />
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  newData = {
                    name: "Cappuccino",
                    title: "With Steamed Milk",
                    price: "4.7",
                    start: "4.8",
                    type: "Cappuccino",
                    favorite: true,
                    imge: "sp1"
                  }

                  addFa(newData);
                }}
                style={[styles.item_img_info_row_ic, { width: 34, height: 34 }]}>
                <Image
                  source={require('../image/Vectorhear.png')}
                  tintColor={'red'}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Nội dung */}
          <View style={{ padding: 20, width: '100%', height: '50%' }}>
            <Text style={[styles.textBase]}>
              <Text
                style={[{ color: '#AEAEAE', fontWeight: 'bold', fontSize: 16 }]}>
                Description
              </Text>
              {'\n'}Cappuccino is a latte made with more foam than
              {'\n'}steamed milk, often with a sprinkle of cocoa
              {'\n'}powder or cinnamon on top.
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              { color: '#AEAEAE', fontWeight: 'bold', fontSize: 16, padding: 20 },
            ]}>
            Size
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.text_size}>
              <Text style={{ color: 'white', fontSize: 20, padding: 5 }}>S</Text>
            </View>
            <View style={styles.text_size}>
              <Text style={{ color: 'white', fontSize: 20, padding: 5 }}>M</Text>
            </View>
            <View style={styles.text_size}>
              <Text style={{ color: 'white', fontSize: 20, padding: 5 }}>L</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <View>
            <Text
              style={{ color: 'white', marginLeft: 40, alignItems: 'center' }}>
              Price
            </Text>
            <View style={styles.price}>
              <Text style={[styles.price, { color: '#D17842', marginLeft: 20 }]}>
                $
              </Text>
              <Text style={[styles.price, { color: 'white', marginLeft: 10 }]}>
                4.20
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.cart}>Add to Cart</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: '100%',
  },
  header: {
    backgroundColor: '#0C0F14',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  imgHeader: {
    width: 34,
    height: 34,
    borderRadius: 12,
  },
  textBase: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  item: {
    width: '100%',
    height: 650,
  },

  item_img: {
    width: '100%',
    height: 550,
  },
  item_img_info: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    justifyContent: 'space-between',
  },
  item_img_info_row: {
    width: '50%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  item_heart: {
    position: 'absolute',
    width: '100%',
    top: 20,
    right: 20,
    height: '20%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text_size: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#141921',
    borderRadius: 10,
    marginHorizontal: 16,
    paddingHorizontal: 40,
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
    marginHorizontal: 50,
    textAlign: 'center',
    paddingHorizontal: 85,
    paddingVertical: 15,
    fontSize: 15,
    backgroundColor: '#D17842',
  },
});
