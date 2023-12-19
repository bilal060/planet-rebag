/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import styles from '../../screen/ScanItemsStyle';
import {View, Text} from 'react-native';
import React from 'react';
export function RenderItem({item}) {
  return (
    <View style={styles.itemContainer}>
      {/* <View style={[styles.rowContainer, {backgroundColor: '#ebe8e8'}]}>
        <Text style={styles.storeName}>{item.storeName}</Text>
        <Text
          style={styles.totalPrice}>{`Total in AED: ${item.totalInAED}`}</Text>
      </View> */}

      <View style={styles.rowContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Item Type</Text>
          <Text style={styles.data}>{item.returnedBags}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Pending Bag</Text>
          <Text style={styles.data}>
            {item.date} | {item.time}
          </Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Total Qty</Text>
          <Text style={styles.data}>{item.totalBags}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Store Name</Text>
          <Text style={styles.data}>{item.location}</Text>
        </View>
      </View>
    </View>
  );
}
