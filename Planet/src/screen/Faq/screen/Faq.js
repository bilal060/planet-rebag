/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import images from '../../../assets/images/images';
import styles from './FaqStyle';
import data from '../components/data';
import AppMainHeader from '../../../assets/appMainHeader/AppMainHeader';

const Faq = ({navigation}) => {
  const [showContent, setShowContent] = useState([]);

  const toggleContent = index => {
    const updatedContent = [...showContent];
    updatedContent[index] = !updatedContent[index];
    setShowContent(updatedContent);
  };

  return (
    <ScrollView style={styles.container}>
      <AppMainHeader title={'FAQ'} navigation={navigation} />
      <View style={styles.TextInputView}>
        <TextInput
          style={{
            color: '#B5B5B5',
            fontWeight: '500',
            //  backgroundColor: 'red',
            minWidth: 150,
            fontSize: 15,
          }}
          placeholder="Search"
        />
        <Image source={images.srch} style={styles.srchimg} />
      </View>
      <View>
        {data.map((button, index) => (
          <View style={styles.itemMainView} key={index}>
            <View>
              <TouchableOpacity
                style={styles.itemView}
                onPress={() => toggleContent(index)}>
                <Text style={styles.title}>{button.title}</Text>
                <Image
                  source={showContent[index] ? images.up : images.down}
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>
            {showContent[index] && (
              <View style={styles.dropView}>
                <Text style={styles.content}>{button.content}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Faq;
