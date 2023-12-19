import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../screen/ScanCodesStyle'
import { CustomButton } from '../../../assets/customButton/CustomButton';

export default function RenderIDView() {
    return (
        <View>
            <View style={styles.IDContainer}>
                <View>
                    <Text style={styles.IDText}>Customer Unique ID</Text>
                    <TextInput
                        placeholder='DK785345'
                        style={styles.inputSyle}
                    />
                </View>
            </View>
            <CustomButton
                title={'Confirm Count'}
            />
        </View>

    )
}