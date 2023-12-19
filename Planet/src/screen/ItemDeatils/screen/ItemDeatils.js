/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../../../assets/images/images';
import color from '../../../assets/color/color';
import {fontSize, scalableheight} from '../../../assets/responsiveness';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';
import {createSessions, resethomeData} from '../../../Store/homeApi';
import {useDispatch, useSelector} from 'react-redux';
let totalBagsBottles = {
  totalBags: 0,
  totalBottles: 0,
};

export default function ItemDeatils({navigation, route}) {
  const {data , totale2Emission, wasteRecycle} = route.params;
  const dispatch = useDispatch();
  const {createSessiondata, getAllstoreBag} = useSelector(state => state.home);

  const Button = (img, title, navPageName) => {
    return (
      <View>
        <TouchableOpacity activeOpacity={1} style={styles.buttonView}>
          <View style={styles.buttonSecondView}>
            <Image
              source={img}
              style={[
                styles.buttonimg,
                {tintColor: title === 'Log Out' ? 'red' : 'black'},
              ]}
            />
            <Text
              style={[
                styles.buttonText,
                {color: title === 'Log Out' ? 'red' : 'black'},
              ]}>
              {title}
            </Text>
          </View>
          {/* <Image source={images.forward} style={styles.buttonimg} /> */}
          <Text style={[styles.buttonText, {fontSize: 18, fontWeight: '600'}]}>
            {navPageName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const BagsDeatils = data?.map((Item, index) => {
  
    return (
      <>
        {Item?.hasBags == true || Item?.storeName =='Plastic Bags' &&
          Button(images.subStore, Item?.storeName, Item?.total)}
      </>
    );
  });

  const BottlesDeatils = data?.map((Item, index) => {
  
    return (
      <>
         {Item?.hasBottles == true || Item?.storeName =='Plastic Bottles' &&
         Button(images.subStore, Item?.storeName, Item?.total)}
      </>
    );
  });

  function calcualteTotal() {
    var total = 0;
    for (let index = 0; index < data.length; index++) {
      total += data[index].total;
    }
    return total;
  }

  function setApiData() {
   
   
    // let FinalData = {
    //   returnBagsQty: totalBagsBottles.totalBags,
    //   returnBottelsQty: totalBagsBottles.totalBottles,
    //   items: finalArray,
    // };[
      let totalbags = 0;
      let totalbottles = 0;

      for (let index = 0; index < data.length; index++) {
        const element = data[index];
         if(element.bagsQunantity > 0)
         {
          totalbags = element.bagsQunantity;
         }
         if(element.bottlesQunantity > 0)
         {
          totalbottles = element.bottlesQunantity
         }
      }

let finalData = [];
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  finalData.push({
    // "storeId": element?._id,
    "totalBags":totalbags,
    "totalBottles":totalbottles,
  //  / "total":element?.totalCalculation,
  })
  
}

let itemsData ={'items': null,"co2emission":totale2Emission,
"wasteRecycled":wasteRecycle};
itemsData.items = finalData

    //  console.log(itemsData);
      // return;

    dispatch(createSessions(JSON.stringify( itemsData)));
  }

  useEffect(() => {
    if (createSessiondata != null) {
      // console.log(totalBagsBottles);
      // navigation.replace('ThankyouScreen', {data: totalBagsBottles});
      navigation.replace('BottomStack')
      dispatch(resethomeData());
    }
  }, [createSessiondata]);

  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '87%'}}>
        <AppMainHeader title="Item Deatils" navigation={navigation} />
        <Text style={styles.Title}>Bags Deatils</Text>
        {/* {Button(images.subStore, 'Carrefour Bags', '10')}
        {Button(images.subStore, 'Other Bags', '30')} */}
        {BagsDeatils}

        <Text style={styles.Title}>Bottle Deatils</Text>
        {/* {Button(images.bottleicon, 'Mai Dubai Bottles', '4')}
        {Button(images.bottleicon, 'Other Bottles', '0')} */}

        {BottlesDeatils}

        <View
          style={{
            borderBottomColor: '#E7E6E9',
            borderBottomWidth: 1,
            width: '88%',
            alignSelf: 'center',
            marginTop: 9,
          }}
        />
        <View
          style={{
            marginTop: 9,
            width: '98%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.Title}>Total Items:</Text>
          <Text style={styles.Title}>{calcualteTotal()}</Text>
        </View>

        <View
          style={{
            borderBottomColor: '#E7E6E9',
            borderBottomWidth: 1,
            width: '88%',
            alignSelf: 'center',
            marginTop: 9,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setApiData();
          // navigation.navigate('ThankyouScreen');
        }}
        style={{
          width: '100%',
        }}>
        <View style={styles.ButtonView}>
          <Text style={styles.cbuttonText}>Confirm Count</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    padding: 24,
    marginVertical: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
  },
  Title: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 24,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  buttonimg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 12,
  },
  buttonSecondView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    marginHorizontal: 10,
  },
  logoutButtonView: {
    marginTop: 40,
  },
  termsView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  termsText: {
    color: 'black',
    fontSize: 14,
  },
  ButtonView: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: color.green2,
    borderRadius: 10,
    // padding: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60

    // marginTop: '24%',
  },
  cbuttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    // lineHeight: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    // top: '10%',
    fontFamily:"SFProDisplay-Medium"
  },
});
