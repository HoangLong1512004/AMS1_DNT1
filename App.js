import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Navigation from './navigation/Navigation';
import Login from './Layout/Login';
import Register from './Layout/Register';
import CoffeeDetailsScreen from './Layout/CoffeeDetailsScreen';
import BeanDetailsScreen from './Layout/BeanDetailsScreen';
import Setting from './Layout/Setting';
import PersonalDetails from './Layout/PersonalDetails';
import ContactForm from './Layout/ContactForm';

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Navigation' component={Navigation}/> 
      <Stack.Screen name='Setting' component={Setting}/>
      <Stack.Screen name='ContactForm' component={ContactForm}/>
      <Stack.Screen name='BeanDetailsScreen' component={BeanDetailsScreen}/>
      <Stack.Screen name='CoffeeDetailsScreen' component={CoffeeDetailsScreen}/>    
      <Stack.Screen name='PersonalDetails' component={PersonalDetails}/> 
    </Stack.Navigator>
  </NavigationContainer>
);
};

export default App

const styles = StyleSheet.create({})

//=====================Demo Dialog===========================

// import { Button, Modal, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const DemoInput = () => {
//   const [showDialog, setShowDialog] = useState(false)
//   return (
//     <View>
//       <Text>App</Text>
//       <Button title='Mở dialog' onPress={() => setShowDialog(true)}/>
//       <Modal visible = {showDialog} animationType='slide' transparent = {true}
//       onRequestClose={() => {
//         setShowDialog(false)
//       }}>
//         <View style = {styles.khung}>
//           <View style = {styles.dialog}>
//             {/* Nội dung dialog viết ở đây */}
//             <Text>Nội dung trong Dialog</Text>
//             <Button title='Đóng dialog' onPress={() => setShowDialog(false)}/>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   )
// }

// export default DemoInput

// const styles = StyleSheet.create({
//   khung: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     opacity: 0.9
//   },
//   dialog: {
//     width: 350,
//     height: 300,
//     backgroundColor: 'yellow',
//     padding: 10,
//     borderRadius: 10
//     opacity: 1
//   }
// })

//==========Demo ScollView==========

// import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React, { useCallback, useState } from 'react'

// const App = () => {
//   const [reloading, setReloading] = useState(false)
//   const startReload = useCallback(() => {
//     setReloading(true)
//     console.log("Bắt đầu.");
//     setTimeout(() => {
//       setReloading(false)
//       console.log("Kết thúc.");

//     }, 3000)

//   }, [])
//   return (
//     <View style={{ backgroundColor: 'cyan' }}>
//       <Text>App</Text>
//       <SafeAreaView>
//         <ScrollView horizontal={false}
//           refreshControl={<RefreshControl refreshing = {reloading} onRefresh={startReload} />}>
//           <Text style={{ fontSize: 40 }}>
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//             Nội dung muốn trình bày mà không gian còn thiếu...
//           </Text>
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})