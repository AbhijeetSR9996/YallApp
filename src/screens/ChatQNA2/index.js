import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { width } from '../../services/helper';


const ChatQNA2 = ({ navigation }) => {

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

  return (
    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '2%', marginBottom: '1%' }}>
        <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" style={{
              fontSize: 40,
              color: '#000000',
              fontWeight: "200",
            }} />
          </TouchableOpacity>
          <Image source={require('../../../assets/images/profilecircle2.png')} style={{ marginLeft: '0%', width: 40, height: 40 }} />
          <TouchableOpacity>
            <Text style={{
              color: '#000000',
              fontFamily: 'BakbakOne-Regular',
              fontSize: 15,
              lineHeight: 21,
              letterSpacing: -0.017,
            }}>PR</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}></View>
        <View style={{ flex: 1.2, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image source={require('../../../assets/images/videorecorder.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../assets/images/group.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '2.4%' }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '2%' }}>
          <Text style={styles.text}>March 9, 2020</Text>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/buttonbg2.png')}
              style={[{
                width: 65,
                height: 40,
                marginLeft: '5%'
              }]}
              imageStyle={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 2,
              }}
            >
              <TouchableOpacity
                style={{
                  fontSize: 15,
                  color: '#000000',
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18,
                  width: 65,
                  height: 40,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 2,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text style={{
                  fontSize: 15,
                  color: '#000000',
                  fontFamily: 'Inter',
                  letterSpacing: -0.017,
                  lineHeight: 18
                }}> Hey </Text>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '1%' }}>
          <Text style={styles.text}>March 10, 2020</Text>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/buttonbg.png')}
              style={[{
                width: 65,
                height: 40,
                marginRight: '5%'
              }]}
              imageStyle={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  fontSize: 15,
                  color: '#000000',
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18,
                  width: 65,
                  height: 40,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text style={{
                  fontSize: 15,
                  color: '#000000',
                  fontFamily: 'Inter',
                  letterSpacing: -0.017,
                  lineHeight: 18
                }}> Hey </Text>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row', marginTop: '1%' }}>
          <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F6F6F6',
            width: 275,
            height: 95,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 2,
            marginRight: '13%'
          }}>
            <Text style={{
              fontSize: 15,
              color: '#000000',
              left: '-5%',
              textAlignVertical: 'center',
              fontFamily: 'Inter',
              letterSpacing: -0.017,
              lineHeight: 18,
              width: 208
            }}> sads,bdkdsfkljdfshkl
              dsandjdjhgjhasdg\
              JHGDSAUJHDjhsadjhgdsauyg
              zscbjhmasgvjhaDFYHJ </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'column', marginTop: '1%' }}>
          <TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/images/buttonbg.png')}
              style={[{
                width: 65,
                height: 40,
                marginRight: '5%'
              }]}
              imageStyle={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 2,
                borderBottomLeftRadius: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  fontSize: 15,
                  color: '#000000',
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  letterSpacing: -0.017,
                  lineHeight: 18,
                  width: 65,
                  height: 40,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text style={{
                  fontSize: 15,
                  color: '#000000',
                  fontFamily: 'Inter',
                  letterSpacing: -0.017,
                  lineHeight: 18
                }}> Hey </Text>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '1%', marginBottom: '2%' }}>
          <Text style={[styles.text, { marginRight: '5%' }]}>Today</Text>
        </View>
        <View style={{ flex: 0.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column' }}>
          <View style={{ flex: 0.8, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <View style={{
              backgroundColor: '#000000',
              width: '80%',
              height: '100%',
              left: '-3%',
              paddingHorizontal: '10%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 2,
              borderBottomLeftRadius: 2,
            }}>
              <ImageBackground
                source={require('../../../assets/images/questionbg2.png')}
                style={[{
                  width: '126%',
                  height: '100%',
                  bottom: '2%',
                  left: '4%',
                  paddingHorizontal: '10%',
                  marginHorizontal: '-23%'
                }]}
                imageStyle={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 2,
                }}
              >
                <TouchableOpacity style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 2,
                  backgroundColor: 'transparent',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
                  onPress={() => { navigation.navigate('ChatQNA2') }}>
                  <View style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 2,
                    borderBottomLeftRadius: 2,
                    backgroundColor: 'transparent',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}>
                    <View style={{
                      flex: 1.5,
                      width: '126%',
                      marginLeft: '-9.5%',
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 2,
                      borderBottomLeftRadius: 2,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                      <Text style={{
                        width: 75,
                        height: 18,
                        fontFamily: 'Inter',
                        fontSize: 15,
                        lineHeight: 18,
                        color: '#FFFFFF',
                        textAlign: "center",
                        top: '25%'
                      }}>You asked:</Text>
                      <Text style={{
                        width: 184,
                        height: 50,
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        lineHeight: 25,
                        color: '#FFFFFF',
                        textAlign: "center",
                        top: '30%'
                      }}>Whats your favourite </Text>
                      <Text style={{
                        width: 184,
                        height: 50,
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        lineHeight: 25,
                        color: '#FFFFFF',
                        textAlign: "center",
                        top: '5%'
                      }}>show on netflix</Text>
                    </View>
                    <View style={{
                      flex: 1,
                      width: '126%',
                      marginLeft: '-9%',
                      borderBottomRightRadius: 2,
                      borderBottomLeftRadius: 2,
                      backgroundColor: 'transparent',
                      alignItems: 'stretch',
                      justifyContent: 'center',
                      flexDirection: 'row'
                    }}>
                      <View style={{
                        flex: 1,
                        borderBottomRightRadius: 2,
                        borderBottomLeftRadius: 2,
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                      }}>
                        <Text style={{
                          width: 135,
                          height: 41,
                          fontFamily: 'Inter',
                          fontSize: 15,
                          lineHeight: 18,
                          color: '#FFFFFF',
                          textAlign: "center",
                          top: '8%',
                        }}> My answer;hsc sdv</Text>
                      </View>
                      <View style={{
                        flex: 1,
                        borderBottomRightRadius: 2,
                        borderBottomLeftRadius: 2,
                        backgroundColor: 'transparent',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                      }}>
                        <Text style={{
                          width: 135,
                          height: 41,
                          fontFamily: 'Inter',
                          fontSize: 15,
                          lineHeight: 18,
                          color: '#FFFFFF',
                          textAlign: "center",
                          top: '7%'
                        }}> My answer;hsc sdv</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
          <View style={{ width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '11%' }}>
            <Text style={{
              width: '85%',
              height: 50,
              fontFamily: 'BakbakOne-Regular',
              fontSize: 18,
              lineHeight: 25,
              color: '#000000',
              textAlign: "center",
              top: '30%'
            }}>Answered are revealed when you </Text>
            <Text style={{
              width: 268,
              height: 50,
              fontFamily: 'BakbakOne-Regular',
              fontSize: 18,
              lineHeight: 25,
              color: '#000000',
              textAlign: "center"
            }}>answer</Text>
          </View>
        </View>
        <View style={{ flex: 0.05, width: width, backgroundColor: '#FFFFFF', alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={[styles.text, { marginRight: '5%' }]}>Deliverd. 10:50 AM</Text>
        </View>
        <View style={{ flex: 0.1, width: width, backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
          <View style={{ flex: 0.8, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => createTwoButtonAlert()}>
              <Image source={require('../../../assets/images/camera2.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2.2, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
            <Card style={{
              width: '100%',
              alignSelf: 'center',
              height: 37,
              borderWidth: 1,
              borderRadius: 100,
              borderColor: 'rgba(142,142,142,0.3)',
              backgroundColor: '#F7F7F7',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              marginBottom: '4%',
              marginLeft: '4%',
            }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-end', marginTop: '-15%', width: '30%', top: '55%' }}>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', alignSelf: 'flex-start', marginTop: '-25%', width: '80%', height: 37, borderRadius: 0, top: '0%', left: '5%' }}>
                <TextInput
                  placeholder='Aa'
                  placeholderTextColor='#BEBEBE'
                  style={{
                    width: '600%',
                    fontFamily: 'Inter',
                    fontSize: 20,
                    color: '#000000',
                    lineHeight: 24,
                    letterSpacing: -0.017,
                    marginBottom: '10%',
                    height: 40,
                  }} />
              </View>
            </Card>
          </View>
          <View style={{ flex: 1.5, width: width, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('ChatQNA') }}>
              <Image source={require('../../../assets/images/comment.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../../../assets/images/microphone.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ChatQNA2;