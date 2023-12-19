/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import images from '../../../assets/images/images';
import styles from './HotDealsStyle';
import {scalableheight} from '../../../assets/responsiveness';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllDeals} from '../../../Store/homeApi';
import {imgUrl} from '../../../../utils/constants';

const HotDeals = ({}) => {
  const dispatch = useDispatch();
  const {allDeals} = useSelector(state => state.home);
  const navigation = useNavigation();
  const RenderDeals = (
    imgpath,
    title,
    text1,
    IsRedeem,
    discount,
    redeemLink,
  ) => {
    // console.log(IsRedeem);
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Linking.openURL(redeemLink)}>
        <View style={styles.dealsContainer}>
          {IsRedeem == false && (
            <View
              style={{
                position: 'absolute',
                zIndex: 10000,
                width: '100%',
                height: '100%',
                elevation: 10000,
              }}>
              <Image
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
                source={require('../../../assets/../../images/blue.png')}
              />
            </View>
          )}

          <View style={styles.dealsContentContainer}>
            <Image source={{uri: imgUrl + imgpath}} style={styles.dealsimg} />
            <View style={styles.dealsTextContainer}>
              <Text numberOfLines={1} style={styles.dealsTitle}>
                {title}
              </Text>
              <Text numberOfLines={2} style={styles.dealsText1}>
                {text1}
              </Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={{width:"100%", marginVertical:10, justifyContent:"flex-end", alignItems:"flex-end"}}>
          <Text numberOfLines={2} style={{...styles.dealsText1, textAlign:"right", marginRight:20 }}>
                { discount  +" discount" }
              </Text>
          </View>
          {/* <View style={styles.bottomContainer}>
            <View style={styles.redeemPointContainer}>
              <Text style={styles.redeemPoints}>
                {discount + ' redeem discount'}
              </Text>
            </View>
            <View style={styles.RedeemBtnContainer}>
              <View
                style={{
                  ...styles.redeemBtn,
                  backgroundColor: IsRedeem == true ? '#79AA00' : '#A3A3A3',
                }}>
                <Text style={styles.btnText}>{'Redeem'}</Text>
              </View>
            </View>
          </View> */}

          {/* <Text></Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  const renderDeals = allDeals?.map((data, index) => {
    // console.log(data);
    return (
      <React.Fragment key={index}>
        {RenderDeals(
          data?.image,
          data?.name,
          data?.description,
          true,
          data?.percentage,
          data?.link,
        )}
      </React.Fragment>
    );
  });

  useEffect(() => {
    dispatch(getAllDeals());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hot Deals</Text>
      </View>
      <View style={{marginTop: scalableheight.onepointfive}}>
        {renderDeals}
      </View>
    </SafeAreaView>
  );
};

export default HotDeals;
