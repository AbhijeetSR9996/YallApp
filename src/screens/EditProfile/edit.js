import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from '../genderScreens/styles';
import { icons } from '../../../assets/icons/icons';
import { photoStyles } from '../AddPhoto/styles';
import { Card } from 'react-native-paper';
import { Styles } from '../../screens/ProfileDisplay/styles';
import { userStyles } from '../../screens/User details/userStyles';
import { height, width } from '../../services/helper';
import DatePicker from 'react-native-neat-date-picker';
import Moment from 'moment';
import { Dropdown } from 'react-native-element-dropdown';

const Edit = ({ navigation }) => {

  const openDatePicker = () => { setShowDatePicker(true) }
  const onCancel = () => { setShowDatePicker(false) }
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateevent, setDateEvent] = useState([]);
  const [value, setValue] = useState(null);

  const genderdata = [
    { label: 'Man', value: 'Man' },
    { label: 'Woman', value: 'Woman' },
    { label: 'Non-binary', value: 'Non-binary' },
    { label: 'Agender', value: 'Agender' },
    { label: 'Androgyne', value: 'Androgyne' },
    { label: 'Bigender', value: 'Bigender' },
    { label: 'Cisgender', value: 'Cisgender' },
    { label: 'Enby', value: 'Enby' },
    { label: 'Transgender', value: 'Transgender' },
    { label: 'Transgender Woman', value: 'Transgender Woman' },
    { label: 'Gender Fluid', value: 'Gender Fluid' },
    { label: 'Gender Nonconforming', value: 'Gender Nonconforming' },
    { label: 'Neutrois', value: 'Neutrois' },
    { label: 'Non-binary', value: 'Non-binary' },
    { label: 'Pangender', value: 'Pangender' },
    { label: 'Polygender', value: 'Polygender' },
    { label: 'Omnigender', value: 'Omnigender' },
    { label: 'Two Spirit', value: 'Two Spirit' },
  ];

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'Yall needs access to your camera ',

          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

      } else {

      }
    } catch (err) {
      console.warn(err);
    }
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 700,
      height: 700,
      compressImageQuality: 0.7,
      compressImageMaxWidth: 700,
      compressImageMaxHeight: 700,
      includeBase64: true,
    }).catch(error => { });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 700,
      height: 700,

      includeBase64: true,
      compressImageQuality: 0.5,
    });
  };
  const createTwoButtonAlert = () =>
    Alert.alert(
      '',
      'ADD PICTURE',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Camera',
          onPress: () => takePhotoFromCamera(),
        },
        {
          text: 'Choose from Gallery',
          onPress: () => choosePhotoFromLibrary(),
        },
      ],
      { cancelable: false },
    );

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.moveBack}>{icons.back}</Text>
      </TouchableOpacity>

      <DatePicker isVisible={showDatePicker} mode={'single'} onCancel={onCancel}
        onConfirm={(dateevent) => { setShowDatePicker(false); setDateEvent(dateevent.dateString) }} />

      <View style={{ justifyContent: 'space-between', bottom: '17%', marginHorizontal: '0%', backgroundColor: 'transparent', width: width, height: height * 0.01, flexDirection: 'row', }}>
        <Text
          style={[
            photoStyles.addPhotoText,
            { fontSize: 18, fontFamily: 'BakbakOne-Regular', letterSpacing: -0.017, marginHorizontal: '6%', marginTop: '-1%' },
          ]}>
          Profile
        </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('MainBottomNavigation') }}>
       
          <Text
            style={[
              photoStyles.addPhotoText,
              { fontSize: 18, fontFamily: 'BakbakOne-Regular', letterSpacing: -0.017, left: '34%', marginHorizontal: '0%', marginTop: '-1%' },
            ]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />
      <ScrollView style={{ backgroundColor: 'transparent', paddingTop: '15%', }} showsVerticalScrollIndicator={false} >
        <Card
          style={[
            {
              width: 320,
              alignSelf: 'center',
              top: 180,
              left: 0,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#C4C4C4',
              marginBottom: 75,
            },
            {
              width: 173,
              top: '0%',
              height: 132,
              borderRadius: 66,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'grey',
              alignSelf: 'center',
              marginTop: '0%'
            },
          ]}>
          <Image
            source={require('../../../assets/images/editprofile.png')}
            style={
              {
                width: 173,
                height: 132,
                top: 0,
                right: 0,
              }}
          />
        </Card>
        <TouchableOpacity
          style={[
            Styles.infocontainer,
            {
              height: 30,
              width: 60,
              marginTop: '18%',
              marginBottom: '10%',
              left: '43%',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]} onPress={() => createTwoButtonAlert()}>
          <Image
            source={require('../../../assets/images/camera.png')}
            style={[
              {
                height: 20,
                width: 30,
                alignSelf: 'center'
              },
            ]}
          />
        </TouchableOpacity>

        <Text
          style={[
            photoStyles.addPhotoText,
            {
              fontFamily: 'Inter',
              fontSize: 15,
              top: '-20%',
              left: '10%',
              color: '#B4B4B4',
            },
          ]}>
          Full name
        </Text>
        <View style={[userStyles.textInput, { top: '-26%', left: '3%', }]}>
          <TextInput
            placeholder="John Doe"
            placeholderTextColor="#000000"
            editable={true}
            style={[userStyles.textInput1, { fontFamily: 'BakbakOne-Regular', fontSize: 18, color: '#000000', borderBottomWidth: 2 }]} />
        </View>

        <Text
          style={[
            photoStyles.addPhotoText,
            {
              fontFamily: 'Inter',
              fontSize: 15,
              top: '-25%',
              left: '10%',
              color: '#B4B4B4',
            },
          ]}>
          Surname
        </Text>
        <View style={[userStyles.textInput, { top: '-31%', left: '3%', }]}>
          <TextInput
            placeholder="Doe"
            placeholderTextColor="#000000"
            editable={true}
            style={[userStyles.textInput1, { fontFamily: 'BakbakOne-Regular', fontSize: 18, color: '#000000', borderBottomWidth: 2 }]} />
        </View>

        <Text
          style={[
            photoStyles.addPhotoText,
            {
              fontFamily: 'Inter',
              fontSize: 15,
              top: '-30%',
              left: '10%',
              color: '#B4B4B4',
            },
          ]}>
          Phone
        </Text>
        <View style={[userStyles.textInput, { top: '-36%', left: '3%' }]}>
          <TextInput
            placeholder="+8511 6654 5265"
            placeholderTextColor="#000000"
            editable={true}
            maxLength={13}
            keyboardType='phone-pad'
            style={[userStyles.textInput1, { fontFamily: 'BakbakOne-Regular', fontSize: 18, color: '#000000', borderBottomWidth: 2 }]} />
        </View>

        <Text
          style={[
            photoStyles.addPhotoText,
            {
              fontFamily: 'Inter',
              fontSize: 15,
              top: '-35%',
              left: '10%',
              color: '#B4B4B4',
              width: '87%',
              height: '5%',
              marginTop: '0%'
            },
          ]}>
          Gender
        </Text>

        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: 179, marginTop: '-77%', marginBottom: '50%' }}>
          <View style={{
            width: '80%',
            height: '25%',
            alignSelf: 'center',
            marginLeft: '-2%',
            marginTop: '-17%',
            marginBottom: '10%',
            borderBottomColor: '#000000',
            borderBottomWidth: 2
          }}>

            <Dropdown
              style={{
                width: '100%',
                color: '#000000',
                height: 40,
              }}
              placeholder=" Select"
              placeholderStyle={{
                fontSize: 18,
                textAlign: 'left',
                height: 18,
                fontFamily: 'BakbakOne-Regular',
                lineHeight: 21,
                letterSpacing: -0.017,
                color: '#000000',
                bottom: '1%',
              }}
              selectedTextStyle={{
                color: '#000000',
                fontSize: 18,
                fontFamily: 'BakbakOne-Regular',
                textAlign: 'left',
                lineHeight: 21,
                letterSpacing: -0.017,
                left: '0%',
              }}
              data={genderdata}
              iconColor='transparent'
              labelField="label"
              valueField="value"
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>

          <View style={{
            width: '80%',
            height: '45%',
            fontSize: 15,
            color: '#000000',
            alignSelf: 'center',
            marginLeft: '-1%',
            marginTop: '-27%',
            marginBottom: '-6%',
            borderBottomColor: '#000000',
            borderBottomWidth: 2
          }}>

            <TouchableOpacity onPress={openDatePicker} style={{
              height: '50%', width: '100%', justifyContent: 'center', alignItems: 'flex-start', bottom: '3%'
            }}>
              <Text style={{ left: '0%', fontFamily: 'BakbakOne-Regular', fontSize: 15, color: '#B4B4B4', lineHeight: 21, letterSpacing: -0.017, marginTop: '6%' }}> Date of birth</Text>
            </TouchableOpacity>
  
            <Text style={{
              fontSize: 18,
              fontFamily: 'BakbakOne-Regular',
              color: '#000000',
              alignSelf: 'center',
              justifyContent: 'center',
              marginRight: '10%',
              marginBottom: '10%',
              lineHeight: 21,
              letterSpacing: -0.017,
              width: '90%',
              top: '5%'
            }}>
              {Moment(dateevent).format('DD/MM/YYYY')}
              {/* selected date */}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Edit;
