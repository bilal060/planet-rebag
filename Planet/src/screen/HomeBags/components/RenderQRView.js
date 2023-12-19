import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import images from '../../../assets/images/images';
import styles from '../screen/HomeBagsStyle';

export default function RenderQRView() {
  return (
    <View style={styles.qrView}>
      <Text style={styles.qrText}>Point your camera at the code</Text>
      <ImageBackground
        source={images.Subtract}
        style={styles.imageBackgroundStyle}>
        <Image source={images.qr} style={styles.qrImg} />
      </ImageBackground>
    </View>
  );
}
