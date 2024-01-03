/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './SignUpStyles';
import images from '../../../assets/images/images';
import {fontSize} from '../../../assets/responsiveness';
import RadioButtonRN from 'radio-buttons-react-native';
import color from '../../../assets/color/color';
import {CustomButton} from '../../../assets/customButton/CustomButton';
import {Authenticate, reserauth} from '../../../Store/auth';
import {useDispatch, useSelector} from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import countryCode from '../../../assets/country code/countrycode';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, isRegsiter, userData} = useSelector(state => state.auth);
  const data = [
    {
      label: 'Email',
    },
    {
      label: 'Phone Number',
    },
  ];
  const [fieldType, setfieldType] = useState('Email');
  const [countrycode, setcountrycode] = useState('+971');
  const SignUpTye = ['User', 'Store'];
  const [type, settype] = useState(0);
  const [passicon, setpassicon] = useState(false);
  const [confirmpassicon, setconfirmpassicon] = useState(false);
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
  const OptionsList = () => {
    return (
      <View style={styles.SigUpTypeContainer}>
        {SignUpTye.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionsFlex,
              type == index && styles.optionsTextSelected,
            ]}
            onPress={() => settype(index)}>
            <Text
              style={[
                styles.optionsText,
                type == index && styles.selectedText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const InputFields = (
    Title,
    mainIcon,
    subIcon,
    value,
    onchangeTxt,
    error,
    keyboardType,
    onErrorTxt,
    placeholder,
  ) => {
    // console.log(fieldType);
    // const [passicon, setpassicon] = useState(false);
    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{ placeholder}</Text>
        <View
          style={[
            styles.inputContainer,
            {
              justifyContent: subIcon ? 'space-between' : 'flex-start',
            },
          ]}>
          <View style={styles.subContainer}>
            <Image resizeMode="cover" source={mainIcon} />
            <View style={{width:"90%"}}>
            <TextInput
              placeholderTextColor={'#A3A3A3'}
              style={styles.input}
              placeholder={'Enter your ' + placeholder}
              value={value}
              onChangeText={txt => {
                onchangeTxt && onchangeTxt(txt, Title);
                onErrorTxt && onErrorTxt('', Title);
              }}
              keyboardType={keyboardType && keyboardType}
              secureTextEntry={
                Title === 'Password'
                  ? subIcon != null && passicon == false
                    ? true
                    : false
                  : subIcon != null && confirmpassicon == false
                  ? true
                  : false
              }
            />
          </View>
          </View>
          {subIcon != null ? (
            <TouchableOpacity
              onPress={() => {
                Title === 'Password'
                  ? setpassicon(!passicon)
                  : setconfirmpassicon(!confirmpassicon);
              }}>
              <Image source={subIcon} />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        {error !== '' && (
          <Text style={{color: 'red', fontSize: 15, fontWeight: '700'}}>
            {error}
          </Text>
        )}
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
    // console.log(value);

    seterrorValidation(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

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

  function Validation() {
    var isValidate = true;
    if (formValidation['Full Name'] === '') {
      onErrorText('Please enter your Name', 'Full Name');
      isValidate = false;
    }
    if (formValidation['Email/PhoneNo'] === '') {
      onErrorText('Please enter your email address', 'Email/PhoneNo');
      isValidate = false;
    }
    if (formValidation.Password === '') {
      onErrorText('Please enter your password', 'Password');
      isValidate = false;
    }
    if (formValidation['Confirm Password'] === '') {
      onErrorText('Please enter your confirm password', 'Confirm Password');
      isValidate = false;
    }
    var emailPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    if (fieldType === 'Email') {
      if (emailPattern.test(formValidation['Email/PhoneNo']) === false) {
        onErrorText('Invalid email address', 'Email/PhoneNo');
        isValidate = false;
      }
    }
    if (formValidation.Password !== formValidation['Confirm Password']) {
      onErrorText('Confirm password does not match', 'Confirm Password');
      isValidate = false;
    }

    return isValidate;
  }

  function callSignup() {
    const isValidate = Validation();
    if (isValidate == true) {
      if (fieldType === 'Email') {
        let payload = {
          name: formValidation['Full Name'],
          email: formValidation['Email/PhoneNo'],
          // phone: countryCode + formValidation['Email/PhoneNo'],
          password: formValidation.Password,
          passwordConfirm: formValidation['Confirm Password'],
        };
        // console.log(JSON.stringify(payload));
        // return;

        dispatch(Authenticate(payload));
      } else {
        let payload = {
          name: formValidation['Full Name'],
          // email: formValidation['Email/PhoneNo'],
          phone: countrycode + formValidation['Email/PhoneNo'],
          password: formValidation.Password,
          passwordConfirm: formValidation['Confirm Password'],
        };

        // console.log(JSON.stringify(payload));
        // return;

        dispatch(Authenticate(payload));
      }
    }
  }

  useEffect(() => {
    if (isRegsiter) {
      dispatch(reserauth());
      navigation.navigate('Otp', {email: formValidation['Email/PhoneNo']});
    }
  }, [isRegsiter]);

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior='padding' style={styles.container}>

    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
        <View style={styles.header}>
          <Image source={images.back} style={styles.img} />
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>Sign Up</Text>
      <Text
        style={{
          color: 'black',
          marginHorizontal: 24,
          marginBottom: 22,
          fontSize: fontSize.sixteen,
          fontFamily:"SFProDisplay-Medium"
        }}>
        Create your new account.
      </Text>
      <View style={styles.ButtonsConatiner}>
        {/* <OptionsList /> */}
        <Text style={styles.buttonText}>Sign up With</Text>
        <RadioButtonRN
          data={data}
          selectedBtn={e => {
            // setfieldType(e?.label);
            setfieldType(e?.label);
            onChangeText('', 'Email/PhoneNo');
            // console.log(e);
          }}
          style={styles.RadioButtonContainer}
          box={false}
          initial={true}
          boxStyle={{
            width: '45%',
          }}
          textStyle={{
            color: '#A3A3A3',
            paddingLeft: 5,
            fontSize: 15,
            fontWeight: '500',
          }}
          circleSize={12}
          activeColor={color.green2}
          animationTypes={['pulse']}
        />
      </View> 

      <View>
        {InputFields(
          'Full Name',
          images.email,
          null,
          formValidation['Full Name'],
          onChangeText,
          errorValidation['Full Name'],
          'default',
          onErrorText,
          "Full Name",
        )}
        {fieldType === 'Email' ? (
          InputFields(
            'Email/PhoneNo',
            images.adr,
            null,
            formValidation['Email/PhoneNo'],
            onChangeText,
            errorValidation['Email/PhoneNo'],
            fieldType === 'Mobile Number' ? 'phone-pad' : 'default',
            onErrorText,
            "Email"
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
          images.password,
          images.eye,
          formValidation.Password,
          onChangeText,
          errorValidation.Password,
          'default',
          onErrorText,
          "Password"
        )}
        {InputFields(
          'Confirm Password',
          images.password,
          images.eye,
          formValidation['Confirm Password'],
          onChangeText,
          errorValidation['Confirm Password'],
          'default',
          onErrorText,
          'Confirm Password',
        )}
      </View>
      {/* <View style={styles.Pcontainer}>
        <Text style={styles.privacyText}>
          By registering, you agree to our{' '}
          <TouchableOpacity style={{}}>
            <Text style={styles.linkText}>Terms & Condition and</Text>
          </TouchableOpacity>
        
          <TouchableOpacity>
            <Text style={styles.linkText}>{' Privacy Policy'}</Text>
          </TouchableOpacity>
        </Text>
      </View> */}
      <CustomButton
        title={'Submit'}
        action={() => {
          callSignup();
          // navigation.navigate('Otp')}
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 12,
        }}>
        <Text style={{color: 'black', fontWeight: '500',   fontSize: fontSize.sixteen , fontFamily:"SFProDisplay-Medium"}}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.haveAccountText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
