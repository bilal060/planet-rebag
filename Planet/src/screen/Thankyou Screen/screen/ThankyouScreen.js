/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity, StyleSheet, Linking, ImageBackground, SafeAreaView} from 'react-native';
import React ,{useEffect} from 'react';
import images from '../../../../src/assets/images/images';
import styles from './ThankyouStyles';
import { getAllDeals } from '../../../Store/homeApi';
import {useDispatch, useSelector} from 'react-redux';
import { imgUrl } from '../../../../utils/constants';
import { ScrollView } from 'react-native-gesture-handler';
import { fontSize } from '../../../assets/responsiveness';

const ThankyouScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {allDeals} = useSelector(state => state.home);
  const {data} = route.params;
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
        onPress={() => {

          Linking.openURL(redeemLink);
          navigation.replace('BottomStack')
        }
          }>
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
            <Image source={{uri: imgUrl + imgpath?.replace(/\\/g, '/') }} style={styles.dealsimg} />
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
          <View style={{width:"100%", paddingVertical:6.5, justifyContent:"flex-end", alignItems:"flex-end", backgroundColor:"#29542A", borderTopEndRadius:9, borderTopStartRadius:9, marginTop:5}}>
          <Text numberOfLines={2} style={{...styles.dealsText1, textAlign:"right", marginRight:20 , fontFamily:"SFProDisplay-Bold", color:"white", fontWeight:"800"}}>
                { discount  +" discount" }
              </Text>
          </View>

          
        </View>
      </TouchableOpacity>
    );
  };

  const renderDeals = allDeals?.map((data, index) => {
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
    dispatch(getAllDeals ());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <ImageBackground source={images.ellipse} style={styles.img} > */}
          <Image source={images.righttick} style={{width:85,height:85}}/>
          {/* </ImageBackground> */}
        <Text style={{...styles.title,marginTop:20, color:"#000000", fontWeight:"700"}}>Thank You!</Text>
        <Text style={styles.message}>
          {'For recycling ' +
            data?.returnBagsQty +
            ' bags and ' +
            data?.returnBottelsQty+
            '\n bottles'}
        </Text>
      </View>


      <View style={{height:"53%"}}>
{/* 
      <Text style={{...styles.message,textAlign:"left", marginLeft:12 ,    fontFamily:"SFProDisplay-Semibold"}}>Choose your </Text>
      <Text style={{...styles.message,textAlign:"left", marginLeft:12 ,    fontFamily:"SFProDisplay-Semibold"}}> reward</Text> */}

<View
          style={{
            marginTop: '4%',
            paddingHorizontal: '6%',
            flexDirection:"row"
            // backgroundColor:"red"
          }}>
          <Text style={{
            ...styles.hsitroyTxt, fontSize: fontSize .nineteen,
            fontWeight: '700',
            color: '#1E252B',
            fontFamily: "SFProDisplay-Medium"
          }}>
            Choose your
          </Text>
          <Text style={{
            ...styles.hsitroyTxt, fontSize: fontSize.nineteen,
            fontWeight: '700',
            color: '#79AA00',
            fontFamily: "SFProDisplay-Medium"
          }}>
            {" rewards"}
          </Text>
        </View>
     
        <ScrollView showsVerticalScrollIndicator={false}>
      {renderDeals}
      </ScrollView>
      </View>

       <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.replace('BottomStack')}
          style={styles.button}>
          <Text style={{...styles.buttonText}}>I dont't want reward</Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
};

export default ThankyouScreen;
