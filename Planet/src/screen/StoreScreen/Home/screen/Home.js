/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './HomeStyles';
import images from '../../../../assets/images/images';
import Header from '../components/Header';
import color from '../../../../assets/color/color';

import AllComponent from '../components/AllComponent';
import HistoryHome from '../components/HistoryHome';
import {fontSize, scalableheight} from '../../../../assets/responsiveness';
import PlanetsTypes from '../components/PlanetsTypes';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <Header />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTxt}>Welcome Osama</Text>
      </View>

      <View style={styles.parentPlanetType}>
        <PlanetsTypes
          number={'1234'}
          heading={'Bags Returned'}
          img={images.greenBag}
        />
        <PlanetsTypes
          number={'1234'}
          heading={'Bottles Returned'}
          img={images.bottle1}
          style={{backgroundColor: '#3486C11A'}}
        />
      </View>

      <View style={styles.parentAllcomponent}>
        <View style={styles.historyContainer}>
          <Text style={styles.hsitroyTxt}>{'History'}</Text>
        </View>
        <View style={styles.allcomponentContainer}>
          <AllComponent heading={'All'} />
          <AllComponent
            heading={'Bag'}
            img={images.bottleicon}
            styles={{backgroundColor: '#F8F8F8'}}
            txtStyle={{color: '#A8A8A8'}}
          />
          <AllComponent
            heading={'Bottle'}
            img={images.lockicon}
            styles={{backgroundColor: '#F8F8F8'}}
            txtStyle={{color: '#A8A8A8'}}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HistoryHome />
        <HistoryHome />
        <HistoryHome />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
