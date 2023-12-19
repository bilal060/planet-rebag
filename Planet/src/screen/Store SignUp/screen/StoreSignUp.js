import { View, Text,Image, TouchableOpacity,ScrollView ,StyleSheet,TextInput} from 'react-native'
import React from 'react'
import styles from './StoreSignUpStyles'
import images from '../../../assets/images/images'
import countryCode from '../../../assets/country code/countrycode'
import ModalDropdown from 'react-native-modal-dropdown';

const StoreSignUp = ({navigation}) => {
    const InputFields = (Title) => {
        return(
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{Title}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter your '+ Title}
                />
            </View>
            
        )
    }
    const renderDropdownRow = (rowData) => {
        return (
            <View style={styles.dropdownRender}>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Text style={{color:'black'}}>{rowData.country}: {rowData.code}</Text>
                </TouchableOpacity>
            </View>
          
        );
      };
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                <View style={styles.header}>
                    <Image
                        source={images.back}
                        style={styles.img}
                    />
                </View>
            </TouchableOpacity>
            
            <Text style={styles.title}>Sign Up</Text>
            <Text style={{color:'black',marginLeft:24,marginBottom:25,}}>Create your new account by filling the form</Text>

            <View>
                {InputFields('Company`s Name')}
                {InputFields('Email')}
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Mobile Number</Text>
                    <View style={{flexDirection:'row',marginBottom:16}}>
                        <ModalDropdown
                            options={countryCode}
                            defaultValue="UAE +971 ∨"
                            renderRow={renderDropdownRow}
                            style={styles.dropdown}
                            textStyle={{color:'black'}}
                        />
                        <TextInput
                            style={styles.Numberinput}
                            placeholder={'0123456789'}
                        />
                    </View>
                    
                </View>
                {InputFields('Password')}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Otp')}>
                <View style={styles.ButtonView}>
                    <Text style={styles.SubmitbuttonText}>Submit</Text>
                </View>
            </TouchableOpacity>
            
            <View style={{flexDirection:'row',justifyContent:'center',alignItems: 'center',margin:15}}>
                <Text style={{color:'black'}}>Already have an account? </Text>
                <TouchableOpacity><Text style={styles.haveAccountText}>Login</Text></TouchableOpacity>
            </View>

            <Text style={styles.contactText}>Contact Us </Text>

            <View style={styles.socialImagesContainer}>
                <Image
                    source={images.whatsapp}
                    style={styles.socialimageStyle}
                />
                <Image
                    source={images.insta}
                    style={styles.socialimageStyle}
                />
                <Image
                    source={images.adr}
                    style={styles.socialimageStyle}
                />
            </View>
            
        </ScrollView>
    )
}

export default StoreSignUp
