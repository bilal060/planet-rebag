/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  TextInput,
  Platform,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './LoginStyle';
import images from '../../../assets/images/images';
import color from '../../../assets/color/color';
import {fontSize, scalableheight} from '../../../assets/responsiveness';
import RadioButtonRN from 'radio-buttons-react-native';
import {CustomInput} from '../../../assets/customInput/CustomInput';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import {AuthenticateLogin} from '../../../Store/auth';
import {useDispatch, useSelector} from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import countryCode from '../../../assets/country code/countrycode';
import {_setUserData} from '../../../../utils/constants';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {isAuthenticated, userLoginData} = useSelector(state => state.auth);
  const [isEnabled, setisEnabled] = useState(false);
  const [fieldType, setfieldType] = useState('Email');
  const [countrycode, setcountrycode] = useState('+971');
  const [formValidation, setformValidation] = useState({
    'Full Name': '',
    'Email/PhoneNo': '',
    Password: '',
    'Confirm Password': '',
  });

  const [errorValidation, seterrorValidation] = useState({
    'Full Name': '',
    'Email/PhoneNo': '',
    Password: '',
    'Confirm Password': '',
  });
  const data = [
    {
      label: 'Email',
    },
    {
      label: 'Phone Number',
    },
  ];
  const InputFields = (
    Title,
    heading,
    secure,
    value,
    onchangeTxt,
    error,
    keyboardType,
    onErrorTxt,
    placeholder,
    
  ) => {
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{placeholder}</Text>
        <CustomInput
          Title={Title}
          title={heading}
          secure={secure}
          value={value}
          onchangeTxt={onchangeTxt}
          error={error}
          keyboardType={keyboardType}
          onErrorTxt={onErrorTxt}
          placeholder ={placeholder}

        />
      </View>
    );
  };
  const onChangeText = (value, name) => {
    // console.log(value);

    setformValidation(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onErrorText = (value, name) => {
    seterrorValidation(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  function Validation() {
    var isValidate = true;

    if (formValidation['Email/PhoneNo'] === '') {
      onErrorText('Please enter your email address', 'Email/PhoneNo');
      isValidate = false;
    }
    if (formValidation.Password === '') {
      onErrorText('Please enter your password', 'Password');
      isValidate = false;
    }

    var emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );

    if (fieldType == 'Emaail') {
      if (emailPattern.test(formValidation['Email/PhoneNo']) === false) {
        onErrorText('Invalid email address', 'Email/PhoneNo');
        isValidate = false;
      }
    }

    return isValidate;
  }

  const renderDropdownRow = rowData => {
    return (
      <View
        style={{
          ...styles.dropdownRender,
          padding: 12,
          backgroundColor: 'white',
        }}>
        {/* <TouchableOpacity
          onPress={() => {
            _dropdown_2_renderButtonText(rowData);
          }}
          style={{padding: 10}}> */}
        <Text style={{}}>
          {rowData.country}: {rowData.code}
        </Text>
        {/* </TouchableOpacity> */}
      </View>
    );
  };

  function _dropdown_2_renderButtonText(rowData) {
    // console.log(rowData);

    const {code, country} = rowData;
    setcountrycode(code);
    return (
      <View>
        <Text style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
          {code}
        </Text>
      </View>
    );

    // return `${name} - ${age}`;
  }

  function callLogin() {
    const isValidate = Validation();
    if (isValidate == true) {
      if (fieldType === 'Email') {
        let payload = {
          email: formValidation['Email/PhoneNo'],

          password: formValidation.Password,
          isEnabled: isEnabled,
        };

        dispatch(AuthenticateLogin(payload, isEnabled));
      } else {
        let payload = {
          phone: countrycode + formValidation['Email/PhoneNo'],
          password: formValidation.Password,
          isEnabled: isEnabled,
        };

        dispatch(AuthenticateLogin(payload, isEnabled));
      }
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      _setUserData(userLoginData);
      navigation.replace('BottomStack');
    }
  }, [isAuthenticated]);
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
        <View style={styles.header}>
          <Image source={images.back} style={styles.img} />
        </View>
      </TouchableOpacity>
      <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
      <Image source={images.lockk} style={styles.loginimg} />
      <Text style={styles.title}>Welcome!</Text>
      <Text
        style={{
          color: '#777777',
           marginHorizontal: 10,
          // marginBottom: 22,
          fontSize: fontSize.seventeen,
          fontFamily:"SFProDisplay-Medium",
          fontWeight:"500"
        }}>
        Login to your account
      </Text>
      </View>

      <View>
      <Text
        style={{
          color: '#1E252B',
           marginHorizontal: 30,
          fontSize: fontSize.fourteen,
          fontFamily:"SFProDisplay-Medium",
          fontWeight:"800",top:20
        }}>
        Sign Up with
      </Text>
         <RadioButtonRN
         initial={true}
          data={data}
          selectedBtn={e => {
            setfieldType(e?.label);
            // console.log(e);
          }}
          style={styles.RadioButtonContainer}
          box={false}
          boxStyle={{
            width: '40%',
          }}
          textStyle={{
            color: '#A3A3A3',
            paddingLeft: 5,
            fontSize: 16,
            fontWeight: '700',
            fontFamily:"SFProDisplay-Medium"
          }}
          circleSize={12}
          activeColor={color.green2}
          animationTypes={['pulse']}
        /> 
        {fieldType === 'Email' ? (
          InputFields(
            'Email/PhoneNo',
            'Enter your email',
            false,
            formValidation['Email/PhoneNo'],
            onChangeText,
            errorValidation['Email/PhoneNo'],
            'default',
            onErrorText,
            "Email",
          )
        ) : (
          <>
            <Text style={{...styles.buttonText, marginLeft: 30}}>
              {'Phone Number'}
            </Text>
            <View
              style={{
                flexDirection: 'row',

                width: '90%',
                alignSelf: 'center',
                height: 56,
                backgroundColor: '#F8F8F8',
              }}>
              <ModalDropdown
                options={countryCode}
                defaultValue="+971 ∨"
                renderRow={renderDropdownRow}
                style={styles.dropdown}
                textStyle={{color: 'black'}}
                renderButtonText={rowData =>
                  _dropdown_2_renderButtonText(rowData)
                }
              />
              <TextInput
                style={{...styles.Numberinput}}
                placeholder={'0123456789'}
                keyboardType="number-pad"
                onChangeText={txt => {
                  onChangeText(txt, 'Email/PhoneNo');
                  onErrorText('', 'Email/PhoneNo');
                }}
              />
            </View>
            {errorValidation['Email/PhoneNo'] !== '' && (
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                  fontWeight: '700',
                  marginLeft: 30,
                }}>
                {'Enter your valid phone number'}
              </Text>
            )}
          </>
        )}

        {InputFields(
          'Password',
          '******************',
          true,
          formValidation['Password'],
          onChangeText,
          errorValidation['Password'],
          'default',
          onErrorText,
          "Password"
        )}

        <View style={[styles.flexSetting, {justifyContent: 'space-between'}]}>
          <View style={[styles.flexSetting, {justifyContent: 'flex-start'}]}>
            <Switch
              trackColor={{false: '#CCCCCC', true: color.green2}}
              thumbColor={'#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              value={isEnabled}
              style={{  transform: Platform.OS === 'ios'  ? [{ scaleX: .68 }, { scaleY: .68 }] :  [{ scaleX: 1.1 }, { scaleY: 1.1 }]  }}
              onValueChange={() => setisEnabled(!isEnabled)}
            />
            <Text style={{color: 'grey',     fontFamily:"SFProDisplay-Medium"}}>Remember me</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgorPassword')}>
            <Text
              style={{
                color: color.green2,
                fontWeight: '700',
                fontSize: fontSize.fourteen,
                fontFamily:"SFProDisplay-Bold"
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomButton
        title={'Login'}
        action={() => {
        
          callLogin();
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: scalableheight.three,
        }}>
        <Text
          style={{
            color: '#1E252B',
            fontWeight: '500',
            fontSize: fontSize.sixteen,
            fontFamily:"SFProDisplay-Medium"
          }}>
          Dont't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.haveAccountText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          width: '70%',
          alignSelf: 'center',
        }}>
        {/* <Text style={styles.contactText}>Contact Us: </Text> */}

        <View style={styles.socialImagesContainer}>
          <Image
            // resizeMode="cover"
            source={images.whatsapp}
            style={styles.socialimageStyle}
          />
          <Image source={images.insta} style={styles.socialimageStyle} />
          <Image source={images.adrLogo} style={styles.socialimageStyle} />
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
