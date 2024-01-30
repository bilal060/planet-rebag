/* eslint-disable no-undef */
/* eslint-disable curly */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
  ImageBackground

} from 'react-native';
import React, {useState, useEffect} from 'react';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';
import images from '../../../assets/images/images';
import styles from './HomeBagsStyle';
import RenderQRView from '../components/RenderQRView';
import RenderIDView from '../components/RenderIDView';
import {fontSize, scalableheight} from '../../../assets/responsiveness';
import {Shadow} from 'react-native-shadow-2';
import {getAllstoreBycategory} from '../../../../Store/homeApi';
import {useDispatch, useSelector} from 'react-redux';
import color from '../../../assets/color/color';
import { imgUrl } from '../../../../utils/constants';
import BagsTypes from '../../CuustomerScreens/Home/components/BagsTypes';
import PlanetsTypes from '../../CuustomerScreens/Home/components/PlanetsTypes';

const HomeBags = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {getAllstoreBottle, getAllstoreBag, allStore ,getPriceo2waste} = useSelector(
    state => state.home,
  );
  const {category} = route?.params;
  const [selectedOption, setSelectedOption] = useState(category);
  const [btnStatus, setbtnStatus] = useState('in');
  const options = ['Bags', 'Bottles'];
  const [finalData, setfinalData] = useState([]);
  const [totalbag, settotalbag] = useState(0);
  const [totaltotal, settotalbottle] = useState(0);
  const [totale2Emission, settotale2Emission] = useState(0);
  const [wasteRecycle, setwasteRecycle] = useState(0);

  

  function setData() {

    if (finalData.length <= 0) {
      for (let index = 0; index < allStore.length; index++) {
        
          finalData.push({
             ...allStore[index],
            storeName:index ==0 ? "Plastic Bags":"Plastic Bottles",
            bottlesQunantity: 0,
            bagsQunantity: 0,
            total: 0,
            totalCalculation: 0,
          });
        
      }
      
      const final = [...finalData];
      setfinalData(final);

    }
  }



  function calcualteperStore(category) {
  //   let data = [...finalData]
  //   for (let index = 0; index < data.length; index++) {
   
  //     if (data[index].storeName =='Plastic Bags') {
   
      
  //       data[index].totalCalculation = totalbag *  data[index].emissionsReducedPrice;
       
       
  //     }
  //      else {
  //       data[index].totalCalculation = totaltotal *  data[index].emissionsReducedPrice;
        
  //     }
      
  //   }

  //  setfinalData(data);
  if(category =='Plastic Bags')
  {
    settotale2Emission(Number((totalbag *  getPriceo2waste?.co2emissionBagsPrice) + (totaltotal *  getPriceo2waste?.co2emissionBottlesPrice))?.toFixed(2));
    
    setwasteRecycle(Number((totaltotal *  getPriceo2waste?.wasteRecycledBottlesPrice) + (totalbag *  getPriceo2waste?.wasteRecycledBagsPrice))?.toFixed(2));

  }
  if(category =='Plastic Bottles')
  {
    setwasteRecycle(Number((totaltotal *  getPriceo2waste?.wasteRecycledBottlesPrice) + (totalbag *  getPriceo2waste?.wasteRecycledBagsPrice))?.toFixed(2));
    settotale2Emission(Number((totalbag *  getPriceo2waste?.co2emissionBagsPrice) + (totaltotal *  getPriceo2waste?.co2emissionBottlesPrice))?.toFixed(2));
  }
  // let totalcount = totaltotal +  totalbag;
  // settotale2Emission(totalcount *  getPriceo2waste?.co2emission);
  // setwasteRecycle(totalcount *  getPriceo2waste?.wasteRecycled);
    }

    
  
  

  function UpdateFinalData(storeName, count , type) {
    // console.log(storeName);
    var total = 0;
    for (let index = 0; index < finalData.length; index++) {
      if (finalData[index].storeName == storeName) {
        if (type == 'bags') {
          if (storeName == 'Other Bags') {
            finalData[index].bagsQunantity = count;
            finalData[index].total = count;
          } else {
            finalData[index].bagsQunantity = count;
            finalData[index].total = count;
          }
        } else {
          if (storeName == 'Other Bottles') {
            finalData[index].bottlesQunantity = count;
            finalData[index].total = count;
          } else {
            finalData[index].bottlesQunantity = count;
            finalData[index].total = count;
          }
        }
      }
    }

    const final = [...finalData];
    // console.log(final);
    setfinalData(final);

    var total = 0;

    for (let index = 0; index < finalData.length; index++) {
      // console.log()
      if (type == 'bags') {
        // if (finalData[index].totalprice == 'bags') {
        total += Number(finalData[index].bagsQunantity);
        // finalData[index].totalCalculation = total *  finalData[index].emissionsReducedPrice;
        // }
        settotalbag(total);
      } else {
        // if (finalData[index].totalprice == 'bottles') {
        total += Number(finalData[index].bottlesQunantity);
        // finalData[index].totalCalculation = total *  finalData[index].emissionsReducedPrice;
        // }
        settotalbottle(total);
      }
      
    }
       
      //  calcualteperStore();
  }

  const CounterDisplay = (data , type, name) => {
    const [count, setcount] = useState(0);
    const [bottlecount, setbottlecount] = useState(0);
 

    useEffect(() => {
      setData();
      // console.log('123');
    }, [selectedOption]);

    useEffect(() => {
      if (count >= 0) {
        settotalbag(count);
        // UpdateFinalData("Plastic Bottles", bottlecount ,"bottles");
         UpdateFinalData("Plastic Bags", count ,"bags");
      }
    }, [count]);

    useEffect(() => {
      if (bottlecount >= 0) {
        settotalbottle(bottlecount);
        // UpdateFinalData("Plastic Bags", count ,"bags");
         UpdateFinalData("Plastic Bottles", bottlecount ,"bottles");
      }
    }, [bottlecount]);

    const handleIncrement = () => {
      setbtnStatus('in');
      if (type == 'Bags') {
        setcount(prevCount => prevCount + 1);
      } else {
        setbottlecount(prevCount => prevCount + 1);
      }
    };

    const handleDecrement = () => {
      setbtnStatus('de');
      if (type == 'Bags') {
        if (count > 0) {
          setcount(prevCount => prevCount - 1);
        }
      } else {
        if (bottlecount > 0) {
          setbottlecount(prevCount => prevCount - 1);
        }
      }
    };

    return (
      <>
        {type == 'Bottles' ? (
          <View style={{backgroundColor:"white",   borderRadius: 7,
          width:"90%",
          alignSelf:"center",
          marginVertical: '4%',
          borderColor: '#EEEEEE',
          // alignItems:"center",
          borderWidth: 1.8,}}>
            <View style={{ 
    width: '100%',
    backgroundColor: '#29542A',
    height: 44,
    flexDirection: 'row',
    borderRadius:7,
    alignItems: 'center',
    flexDirection:"row",

  }}>

            <Image resizeMode='contain'  style={{height:36,marginLeft:10,width:36,}} source={images.greenbottles}/>
            <Text style={styles.counterTitle}>{name}</Text>
            </View>
            <View style={styles.counterConatiner}>
              <TouchableOpacity onPress={handleDecrement}>
                <Text style={styles.addSubText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.counterNum}>
               {type == 'Bags' ? count : bottlecount} 
              </Text>

              <TouchableOpacity  onPress={handleIncrement}>
                <Text style={styles.addSubText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : type == 'Bags' ? (
          <View style={{backgroundColor:"white",   borderRadius: 7,
          width:"90%",
          alignSelf:"center",
          marginVertical: '4%',
          borderColor: '#EEEEEE',
          // alignItems:"center",
          borderWidth: 1.8,}}>
            <View style={{ 
    width: '100%',
    backgroundColor: '#29542A',
    height: 44,
    flexDirection: 'row',
    borderRadius:7,
    alignItems: 'center',
    flexDirection:"row",

  }}>
             <Image resizeMode='contain'  style={{height:36,marginLeft:10,width:36,}} source={images.greenbags}/>
            <Text style={styles.counterTitle}>{name}</Text>
            </View>
            <View style={styles.counterConatiner}>
              <TouchableOpacity  onPress={handleDecrement}>
                <Text style={styles.addSubText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.counterNum}>
                {type == 'Bags' ? count : bottlecount} 
              </Text>

              <TouchableOpacity onPress={handleIncrement}>
                <Text style={styles.addSubText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </>
    );
  };
  const PointsDisplay = (img, points, customColor) => {
    return (
      <View style={[styles.pointView, {backgroundColor: customColor}]}>
        <Image source={img} style={styles.pointsImg} />
        <Text style={styles.pointsText}>+{points}</Text>
      </View>
    );
  };

  const RenderAllBags = (data, type ="Bags" , name ="Plastic Bags") =>
    // data?.map((data, index) => {
      // if (type === 'Bags' && data?.hasBags == true) {
      //   return <>{CounterDisplay(data, index)}</>;
      // } else if (type === 'Bottles' && data?.hasBottles == true) {
{
      return <>{CounterDisplay(data,   type, name)}
      </>;
     
};

  const RenderAllBottles = (data, type ="Bottles" , name="Plastic Bottles") =>
    // data?.map((data, index) => {
      {
      return <>{CounterDisplay(data,  type, name)}</>;
    };

  const RenderAllStoreCalculation = ()=> {

    return (
      <>
      <BagsTypes
        style={{backgroundColor: '#305543', height:162, width:"98%"}}
          number={totale2Emission+ " lbs"}
          heading={`CO2 Emissions \n Reduced`}
          logoimg ={require('../../../../images//cloud2.png')}
      />
      <BagsTypes
        style={{backgroundColor: '#305543', height:162,  width:"98%"}}
          number={wasteRecycle + " lbs"}
          heading={`Waste Recycled`}
          logoimg ={require('../../../../images/trash.png')}
      />
      </>
      
    );
  
};


  
  useEffect(()=>{
   
    calcualteperStore("Plastic Bags");
  },[totalbag])

  useEffect(()=>{
   
    calcualteperStore("Plastic Bottles");
  },[totaltotal])

  return (
    <><SafeAreaView style={{ flex: 0, backgroundColor: '#29542A' }} />
    < SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
    <ScrollView  bounces ={false}style={{flex: 1, backgroundColor: 'white'}} >
      <AppMainHeader title="Add Items" navigation={navigation} />
      {/* <Shadow
      
        startColor={'#0000000D'}
       
      >
        <View style={styles.optionsContainer}>
          {options.map(option => (
            <TouchableOpacity
              style={[
                styles.optionsButton,
                selectedOption === option && styles.selectedOptionButton,
              ]}
              key={option}
              onPress={() => setSelectedOption(option)}>
              <Text
                style={[
                  styles.optionsLabel,
                  selectedOption === option && styles.selectedoptionsLabel,
                ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Shadow> */}
       <View style={{width:"91%", height:210, alignSelf:"center", marginTop:12}}>
          <ImageBackground resizeMode='contain' imageStyle={{width:"100%", height:210 , alignSelf:"center" , justifyContent:"center", alignItems:"center"}} source={require('../../../../images/AddBagsBottles.png')}>
        

         
          </ImageBackground>
        </View>


<View
       
        style={{ width:"93%",flexDirection:"row",justifyContent:"space-around", marginTop:12, alignSelf:"center"}}>
        { (RenderAllStoreCalculation())}
      </View>


      {/* <View style={{margin: 24, flexDirection:"row",justifyContent:"space-between",marginTop:6}}>
       
        <View style={styles.cashContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={images.bagreturned }
              style={styles.cashimg}
            />
            <Text style={styles.cashHeading}>
              
              {'Total Bags'}
            </Text>
          </View>
          <Text style={styles.cashText}>
            { totalbag }
          </Text>
        </View>

        <View style={styles.cashContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
             
            }}>
            <Image
              source={images.bottle1}
              style={styles.cashimg}
            />
            <Text style={styles.cashHeading}>
            
              { 'Total Bottles'}
            </Text>
          </View>
          <Text style={styles.cashText}>
            { totaltotal}
          </Text>
        </View>



      </View> */}

      
<View style={styles.parentPlanetType}>
          <PlanetsTypes
            style={{ backgroundColor: '#F5F5F5' }}
            img={images.greenbags}
            number={totalbag}
            heading={'Total Bags'} />
          <PlanetsTypes
            style={{ backgroundColor: '#F5F5F5', marginTop:14 }}
            img={images.greenbottles}
            number={totaltotal}
            heading={'Total Bottles'} />
        </View>

    

        <View
         style={styles.historyContainer}>
          <Text style={{
            ...styles.hsitroyTxt, fontSize: fontSize.nineteen,
            fontWeight: '700',
            color: '#1E252B',
            fontFamily: "SFProDisplay-Medium"
          }}>
            Let's Recycle
          </Text>
          <Text style={{
            ...styles.hsitroyTxt, fontSize: fontSize.nineteen,
            fontWeight: '700',
            color: '#79AA00',
            fontFamily: "SFProDisplay-Medium"
          }}>
            {" Items"}
          </Text>
        </View>
      
     {  RenderAllBags(allStore,  'Bags')}
       {RenderAllBottles(
            allStore,
             'Bottles',
       )}
          

     

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ItemDeatil', {data: finalData, totale2Emission: totale2Emission,wasteRecycle:wasteRecycle});
          // navigation.navigate('ThankyouScreen');
        }}
        style={{
          width: '100%',
          marginVertical: 10,
        }}>
        <View style={styles.ButtonView}>
          <Text style={styles.buttonText}>Confirm Count</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
    </ SafeAreaView>
    </>
  );
};

export default HomeBags;
