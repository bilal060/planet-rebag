/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './CustomerNavigator/BottomStack';
import StoreBottomStack from './CustomerNavigator/StoreBottomStack';
import routes from './routes';

export default function MainNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={routes.Splash} />
        <Stack.Screen name="Landing" component={routes.Landing} />
        <Stack.Screen name="RedeemQrStart" component={routes.RedeemQrStart} />
        <Stack.Screen name="QrScans" component={routes.QRScans} />
        <Stack.Screen name="RedeemQrCode" component={routes.RedeemQrCode} />
        <Stack.Screen name="Home" component={routes.Home} />
        <Stack.Screen name="BottomStack" component={BottomStack} />
        <Stack.Screen name="StoreBottomStack" component={StoreBottomStack} />
        <Stack.Screen name="Login" component={routes.Login} />
        <Stack.Screen name="SignUp" component={routes.SignUp} />
        <Stack.Screen name="StoreSignUp" component={routes.StoreSignUp} />
        <Stack.Screen name="ThankyouScreen" component={routes.ThankyouScreen} />
        <Stack.Screen name="Otp" component={routes.Otp} />
        <Stack.Screen name="History" component={routes.History} />
        <Stack.Screen name="ForgorPassword" component={routes.ForgorPassword} />
        <Stack.Screen name="Settings" component={routes.Settings} />
        <Stack.Screen name="Faq" component={routes.Faq} />
        <Stack.Screen name="PrivacyPolicy" component={routes.PrivacyPolicy} />
        <Stack.Screen name="HotDeals" component={routes.HotDeals} />
        <Stack.Screen name="AddSubStore" component={routes.AddSubStore} />
        <Stack.Screen name="RegisterBag" component={routes.RegisterBag} />
        <Stack.Screen name="SubStores" component={routes.SubStores} />
        <Stack.Screen name="DetailSubStore" component={routes.DetailSubStore} />
        <Stack.Screen name="ScanCode" component={routes.ScanCode} />
        <Stack.Screen name="HomeBags" component={routes.HomeBags} />
        <Stack.Screen name="HomeBottles" component={routes.HomeBottles} />
        <Stack.Screen name="ScanItems" component={routes.ScanItems} />
        <Stack.Screen name="SelectStore" component={routes.SelectStore} />
        <Stack.Screen name="Resetpassword" component={routes.Resetpassword} />
        <Stack.Screen
          name="AttentionScreen"
          component={routes.AttentionScreen}
        />
        <Stack.Screen name="ItemDeatil" component={routes.ItemDeatil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
