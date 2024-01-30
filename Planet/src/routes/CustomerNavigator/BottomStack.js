/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Alert,
} from 'react-native';
import images from '../../assets/images/images';
import Home from '../../screen/CuustomerScreens/Home/screen/Home';
import routes from '../routes';
import {fontSize} from '../../assets/responsiveness';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {NavigationContainer} from '@react-navigation/native';
import color from '../../assets/color/color';
import {useNavigation} from '@react-navigation/native';

const HomeTab = createBottomTabNavigator();

export default function BottomStack({}) {
  const navigation = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = require('../../../images/Home.png');
        break;
      case 'Rewards':
        icon = require('../../../images/DeatilsIcon.png');
        break;
    }

    return (
      <>
        <Image
          tintColor={routeName === selectedTab ? '#29542A' : '#040400'}
          resizeMode="cover"
          source={icon}
        />
        <Text
          style={{
            fontSize: 13,
            top: '2%',
            fontWeight: '600',
            color: routeName === selectedTab ? '#29542A' : '#040400',
          }}>
          {routeName}
        </Text>
      </>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  return (
    // <HomeTab.Navigator
    //   initialRouteName="Home"
    //   screenOptions={{
    //     tabBarStyle: {
    //       height: '8.5%',
    //       position: 'absolute',
    //     },

    //     tabBarActiveTintColor: '#79AA00',
    //     tabBarInactiveTintColor: '#040400',
    //   }}>
    //   <HomeTab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarLabelStyle: {
    //         fontSize: 13,
    //         bottom: '11%',
    //         fontWeight: '600',
    //       },
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           resizeMode="cover"
    //           source={images.homeIcon}
    //           style={{
    //             tintColor: focused ? '#79AA00' : '#1E252B',
    //           }}
    //         />
    //       ),
    //       headerShown: false,
    //     }}
    //   />
    //   <HomeTab.Screen
    //     name="Scan Item"
    //     component={routes.RedeemQrStart}
    //     options={{
    //       tabBarLabel: 'Scan Items',
    //       tabBarLabelStyle: {
    //         fontSize: 13,
    //         bottom: '11%',
    //         fontWeight: '600',
    //       },
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           resizeMode="cover"
    //           source={images.scanIcon}
    //           style={{
    //             tintColor: focused ? '#79AA00' : '#1E252B',
    //           }}
    //         />
    //       ),

    //       headerShown: false,
    //     }}
    //   />
    //   <HomeTab.Screen
    //     name="Deatils"
    //     component={routes.HotDeals}
    //     options={{
    //       tabBarLabel: 'Deatils',
    //       tabBarLabelStyle: {
    //         fontSize: 13,
    //         bottom: '11%',
    //         fontWeight: '600',
    //       },
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           resizeMode="cover"
    //           source={images.deatilsIcon}
    //           style={{
    //             tintColor: focused ? '#79AA00' : '#1E252B',
    //           }}
    //         />
    //       ),
    //       headerShown: false,
    //     }}
    //   />
    //   <HomeTab.Screen
    //     name="Setting"
    //     component={routes.Settings}
    //     options={{
    //       tabBarLabel: 'Setting',
    //       tabBarLabelStyle: {
    //         fontSize: 13,
    //         bottom: '11%',
    //         fontWeight: '600',
    //       },
    //       tabBarIcon: ({focused}) => (
    //         <Image
    //           resizeMode="cover"
    //           source={images.settingIcon}
    //           style={{
    //             tintColor: focused ? '#79AA00' : '#1E252B',
    //           }}
    //         />
    //       ),
    //       headerShown: false,
    //     }}
    //   />
    // </HomeTab.Navigator>
    // <NavigationContainer>
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor="white"
      initialRouteName="Home"
      borderTopLeftRight
      options={{
        tabBarStyle: {display: 'none'},
        headerShown: false,
      }}
      screenOptions={{headerShown: false}}
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('HomeBags', {category: 'Bags'})}>
            <Image source={require('../../../images/addd.png')} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        options={{
          tabBarStyle: {display: 'none'},
          headerShown: false,
        }}
        name="Home"
        position="LEFT"
        component={() => <Home />}
      />
      <CurvedBottomBar.Screen
        name="Rewards"
        component={() => <routes.HotDeals />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 68,
    height: 68,
    borderRadius: 68 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29542A',
    bottom: 38,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
