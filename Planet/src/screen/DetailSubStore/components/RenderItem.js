/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
export function RenderItem({item}) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Item Type</Text>
          <Text style={styles.data}>{item.itemType}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Returned Qty</Text>
          <Text style={styles.data}>{item.returnedBags}</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Total Qty</Text>
          <Text style={styles.data}>{item.totalQty}/10</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Total Redeem Price</Text>
          <Text style={styles.data}>AED {item.totalRedeem}</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>Time & Date</Text>
          <Text style={styles.data}>
            {item.time} | {item.date}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginHorizontal: 20,
    paddingVertical: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  heading: {
    fontWeight: '700',
    fontSize: 13,
    padding: 7,
    color: 'black',
  },
  data: {
    fontSize: 13,
    paddingHorizontal: 7,
    color: 'black',
  },
  dataContainer: {
    alignItems: 'flex-start',
    width: '50%',
  },
});
