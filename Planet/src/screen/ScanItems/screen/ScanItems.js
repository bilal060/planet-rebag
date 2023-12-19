/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import images from '../../../assets/images/images';
import styles from './ScanItemsStyle';
import data from '../components/data/data';
import {RenderItem} from '../components/renderItems/renderItem';
import SelectDropdown from 'react-native-select-dropdown';
import {scalableheight} from '../../../assets/responsiveness';

const ScanItems = ({navigation}) => {
  const countries = ['All', 'Bag', 'Bottle'];
  const options = [
    {name: 'All'},
    {name: 'Bag', image: images.bag},
    {name: 'Bottle', image: images.bottle},
  ];
  const [optionsIndex, setoptionsIndex] = useState(0);
  const [selected, setselected] = useState('All');
  const OptionsList = () => {
    return (
      <View style={styles.optionsContainer}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={[
              styles.optionsFlex,
              optionsIndex == index && styles.optionsTextSelected,
            ]}
            onPress={() => setoptionsIndex(index, setselected(item.name))}>
            <Image
              resizeMode="contain"
              source={item.image}
              style={[
                styles.optionsImg,
                optionsIndex == index && {tintColor: 'white'},
              ]}
            />
            <Text
              style={[
                styles.optionsText,
                optionsIndex == index && styles.optionsTextSelected,
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const FilterData = ({item}) => {
    if (selected == 'All') {
      return <RenderItem item={item} />;
    } else if (item.itemType == selected) {
      return <RenderItem item={item} />;
    } else {
      return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <View style={styles.header}>
            <Image source={images.backtwo} style={styles.img} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Scanned Items</Text>
        {/* this settings button will be removed when home screen will be added, this button
                is just added to view settings for now as for frontend <View/> */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('Settings')}>
          {/* <Image
            source={images.settings}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
              paddingHorizontal: 24,
            }}
          /> */}
        </TouchableOpacity>
      </View>

      <OptionsList />
      <FlatList
        data={data}
        renderItem={({item}) => <FilterData item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ScanItems;
