import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { govtStyles } from '../../screens/govtRegister.js/govtStyles';
import { Card } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { icons } from '../../../assets/icons/icons';
import styles from './styles';
import { height, width } from '../../services/helper';
import Slider from '@react-native-community/slider';


const Upload = ({ navigation }) => {

  const [speed, setSpeed] = useState('50%');
  const [slide, setSlide] = useState('Inactive');

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
      ],
      { cancelable: false },
    );

  const createOneButtonAlert = () =>
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
          text: 'Choose from Gallery',
          onPress: () => choosePhotoFromLibrary(),
        },
      ],
      { cancelable: false },
    );

  return (
    <View style={govtStyles.container}>
      <Text style={[govtStyles.text, { width: 268 }]}>Upload Aadhaar Card</Text>
      <Text style={[govtStyles.text, { top: '2.1%', left: '55%' }]}> </Text>
      <Text style={[govtStyles.paragraph, { top: '0%' }]}>
        Don’t loose access to your account, verify your email.
      </Text>
      <Card
        style={[
          govtStyles.borderBox,
          {
            width: 330,
            top: '5%',
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e8e6e6',
          },
        ]}>
        <View
          style={styles.card_view}>
          <View
            style={[
              govtStyles.textMain,
              { position: 'relative', justifyContent: 'center' },
            ]}>
            <TouchableOpacity
              style={styles.uploadContainer}
              onPress={() => createTwoButtonAlert()}>
              <Image
                source={require('../../../assets/images/idupload.png')}
                style={
                  {
                    width: 95,
                    height: 100,
                    //top: 16,
                    bottom: 60,
                    alignSelf: 'center'
                  }
                }
              />
            </TouchableOpacity>
            <Text
              style={[
                govtStyles.textCard,
                { top: 70, left: '45%', fontSize: 15, position: 'absolute' },
              ]}>
              Or
            </Text>
            <TouchableOpacity
              onPress={() => createOneButtonAlert()}
              style={{
                top: '30%',
                width: width * 0.5,
                height: height * 0.07,
                borderWidth: 1,
                alignSelf: 'center',
              }}>
              <View style={{
                width: width * 0.5, left: 10,
                top: 8, borderWidth: 1,
                borderRightWidth: 0,
                height: height * 0.07,
                //alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: '#DCC7E1',
                position: 'relative',
              }}>
                <Text style={{
                  fontSize: 18,
                  fontFamily: 'BakbakOneRegular',
                  color: '#000000',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  paddingVertical: 13,
                  right: '15%',
                  lineHeight: 25,
                  letterSpacing: -0.017
                }}>Upload File</Text>

                <View style={{
                  width: width * 0.15,
                  borderWidth: 1,
                  height: '104%',
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#DCC7E1',
                  position: 'absolute',
                  marginVertical: -1,
                }}>{icons.rightarrow}</View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <Image
        source={require('../../../assets/images/file.png')}
        style={{
          width: 28,
          height: 35,
          top: '6%',
          marginLeft: '8%'
        }}
      />
      <Text
        style={[
          govtStyles.paragraph,
          { top: '0.5%', left: '20%', color: '#000000' },
        ]}>
        Aadhaar card
      </Text>

      <Slider
        style={{ width: 250, height: 25, marginLeft: '16%', marginTop: '0%', }}
        maximumValue={1}
        minimumValue={0}
        value={.5}
        minimumTrackTintColor='#000000'
        maximumTrackTintColor='rgba(110, 62, 137, 0.2)'
        thumbColor='#AD5DD7'
        onValueChange={(value) => setSpeed(parseInt(value * 100))}
        onSlidingStart={() => setSlide('Sliding')}
      />

      <TouchableOpacity
        style={{
          top: '7%',
          alignSelf: 'center',
          width: width * 0.8,
          height: height * 0.07,
          borderWidth: 1,
          right: '2%',
        }}
        onPress={() => { navigation.navigate('Selfie') }}>
        <View style={{
          left: 10,
          top: 8,
          width: width * 0.8,
          borderWidth: 1,
          borderRightWidth: 0,
          height: height * 0.07,
          alignSelf: 'center',
          backgroundColor: '#DCC7E1',
          position: 'relative',
        }}>
          <Text style={{
            fontSize: 17,
            fontFamily: 'BakbakOne-Regular',
            color: '#000000',
            alignSelf: 'center',
            justifyContent: 'center',
            top: '33%',
            right: '16%',
            lineHeight: 25,
            letterSpacing: -0.017
          }}>Verify & Continue</Text>
          <View style={{
            width: width * 0.15,
            borderWidth: 1,
            height: '104%',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#DCC7E1',
            position: 'absolute',
            marginVertical: -1,
          }}>{icons.rightarrow}</View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {
            alignSelf: 'center', width: width * 0.8,
            height: height * 0.07,
            borderWidth: 1,
            right: '2%',
            top: '10%'
          },
        ]}
        onPress={() => { navigation.navigate('GovtRegisterID') }}>
        <View style={{
          left: 10,
          top: 8,
          width: width * 0.8,
          borderWidth: 1,
          borderColor: '#FFFFFF',
          borderRightWidth: 0,
          height: height * 0.07,
          alignSelf: 'center',
          backgroundColor: '#000000',
          position: 'relative',
        }}>
          <Text style={{
            fontSize: 18,
            fontFamily: 'BakbakOne-Regular',
            color: '#FFFFFF',
            alignSelf: 'center',
            justifyContent: 'center',
            top: '33%',
            right: '32%',
            lineHeight: 25,
            letterSpacing: -0.017
          }}>Back</Text>
          <View style={{
            width: width * 0.15,
            borderWidth: 1,
            borderColor: '#FFFFFF',
            height: '104%',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            position: 'absolute',
            marginVertical: -1,
          }}><AntDesign name="arrowright" size={30} color="#FFFFFF" /></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Upload;
