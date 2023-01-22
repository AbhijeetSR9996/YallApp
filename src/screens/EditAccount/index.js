import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    Switch,
    BackHandler,
} from 'react-native';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { height, width } from '../../services/helper';
import ImagePicker from 'react-native-image-crop-picker'
import Slider from '@react-native-community/slider';
import Gender from '../../component/Dropdown/Gender';
import FilmsTV from '../../component/Dropdown/FilmsTV';
import Hobbies from '../../component/Dropdown/Hobbies';
import GoingOut from '../../component/Dropdown/GoingOut';
import Music from '../../component/Dropdown/Music';
import Food from '../../component/Dropdown/Food';
import Pets from '../../component/Dropdown/Pets';
import DatePicker from 'react-native-neat-date-picker';
import Moment from 'moment';

const EditAccount = ({ navigation }) => {

    const [showDatePickers, setShowDatePickers] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const openDatePickers = () => { setShowDatePickers(true) }
    const openDatePicker = () => { setShowDatePicker(true) }

    const onCancels = () => { setShowDatePickers(false) }
    const onCancel = () => { setShowDatePicker(false) }

    const [dateofbirth, setDateOfBirth] = useState([]);
    const [dateevent, setDateEvent] = useState([]);

    const [speed, setSpeed] = useState('50%');
    const [slide, setSlide] = useState('Inactive');

    const handleBackButtonClick = () => {
        navigation.goBack();
        return true;
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => { BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick); };
    }, []);


    const [isEnabledAge, setIsEnabledAge] = useState(false);
    const [isEnabledDetails, setIsEnabledDetails] = useState(false);
    const toggleSwitch = () => setIsEnabledAge(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabledDetails(previousState => !previousState);

    const [firstAbout, setFirstAbout] = useState("");

    const [firstInterest, setFirstInterest] = useState("");
    const [firstFilm, setFirstFilm] = useState("");
    const [firstHobby, setFirstHobby] = useState("");
    const [firstGoingout, setFirstGoingout] = useState("");
    const [firstMusic, setFirstMusic] = useState("");
    const [firstFood, setFirstFood] = useState("");
    const [firstPet, setFirstPet] = useState("");
    const [firstDob, setFirstDob] = useState("");
    const [firstEvent, setFirstEvent] = useState("");

    const handleFirst = (value) => {
        setFirstAbout(value);
    }
    const handleThird = (value) => {
        setFirstInterest(value);
    }
    const handleFourth = (value) => {
        setFirstFilm(value);
    }
    const handleFifth = (value) => {
        setFirstHobby(value);
    }
    const handleSixth = (value) => {
        setFirstGoingout(value);
    }
    const handleSeventh = (value) => {
        setFirstMusic(value);
    }
    const handleEigth = (value) => {
        setFirstFood(value);
    }
    const handleNinth = (value) => {
        setFirstPet(value);
    }
    const handleTenth = (value) => {
        setFirstDob(value);
    }
    const handleEleventh = (value) => {
        setFirstEvent(value);
    }

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
                {
                    text: 'Choose from Gallery',
                    onPress: () => choosePhotoFromLibrary(),
                },
            ],
            { cancelable: false },
        );

    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
            <DatePicker isVisible={showDatePickers} mode={'single'} onCancel={onCancels}
                onConfirm={(dateofbirth) => { setShowDatePickers(false); setDateOfBirth(dateofbirth.dateString) }} />
            <DatePicker isVisible={showDatePicker} mode={'single'} onCancel={onCancel}
                onConfirm={(dateevent) => { setShowDatePicker(false); setDateEvent(dateevent.dateString) }} />
            <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={{
                            fontSize: 40,
                            color: '#000000',
                            fontWeight: "200",
                            marginLeft: '20%'
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '60%'
                    }}>Edit Profile</Text>
                </View>

            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '5%', marginBottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 522, marginTop: '0%', borderRadius: 20, alignSelf: 'center', }}>
                    <View style={{ backgroundColor: 'transparent', flex: 0.15, justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View style={{ backgroundColor: '#DCC7E1', flex: 0.3, justifyContent: 'center', alignItems: 'flex-start', width: '100%', alignSelf: 'center', borderRadius: 20 }}>
                            <View style={{ backgroundColor: '#000000', flex: 1, width: '65%', alignSelf: 'flex-start', borderRadius: 20, justifyContent: 'center' }}>
                                <Text style={{
                                    color: '#000000',
                                    fontFamily: 'BakbakOne-Regular',
                                    fontSize: 15,
                                    lineHeight: 18,
                                    letterSpacing: -0.017,
                                    left: '105%'
                                }}>65%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'transparent', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', width: '100%', }}>
                        <View style={{ flex: 3.5, backgroundColor: 'transparent', justifyContent: 'center' }}>
                            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', alignItems: 'stretch', flexDirection: 'row', }}>
                                <Image
                                    source={require('../../../assets/images/editaccountpic.png')} style={{ height: '95%', width: '31%', borderRadius: 10, }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0.5%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <ImageBackground
                                        source={require('../../../assets/images/crossellipse.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                            bottom: '10%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image source={require('../../../assets/images/cross3.png')} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/editaccountpic2.png')} style={{ height: '95%', width: '30%', borderRadius: 10, marginLeft: '-4%' }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0.5%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <ImageBackground
                                        source={require('../../../assets/images/crossellipse.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                            bottom: '10%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image source={require('../../../assets/images/cross3.png')} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/editaccountpic3.png')} style={{ height: '95%', width: '30%', borderRadius: 10, marginLeft: '-4%' }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0.5%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <ImageBackground
                                        source={require('../../../assets/images/crossellipse.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                            bottom: '10%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image source={require('../../../assets/images/cross3.png')} />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between', alignItems: 'stretch', flexDirection: 'row', }}>
                                <Image
                                    source={require('../../../assets/images/editaccountpic4.png')} style={{ height: '95%', width: '31%', borderRadius: 10, }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0.5%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <ImageBackground
                                        source={require('../../../assets/images/crossellipse.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                            bottom: '10%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image source={require('../../../assets/images/cross3.png')} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/editaccountpic5.png')} style={{ height: '95%', width: '30%', borderRadius: 10, marginLeft: '-4%' }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0.5%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <ImageBackground
                                        source={require('../../../assets/images/crossellipse.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                            bottom: '10%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image source={require('../../../assets/images/cross3.png')} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <Image
                                    source={require('../../../assets/images/editaccountpic6.png')} style={{ height: '95%', width: '30%', borderRadius: 10, marginLeft: '-4%' }}
                                />
                                <TouchableOpacity style={{
                                    height: 27,
                                    width: 27,
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 17,
                                    alignSelf: 'flex-end',
                                    right: '12%',
                                    bottom: '0.5%'
                                }}
                                    onPress={() => navigation.navigate('EditAccount')}>
                                    <ImageBackground
                                        source={require('../../../assets/images/crossellipse.png')}
                                        style={{
                                            height: 27,
                                            width: 27,
                                            bottom: '10%',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image source={require('../../../assets/images/cross3.png')} />
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1.5, backgroundColor: 'transparent', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '100%',
                                textAlign: 'center',
                            }}>Add a video, pic or loop to get 4% closer to
                                completing your file and you may even get more
                                Likes.</Text>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'center',
                                    width: width * 0.8,
                                    height: height * 0.07,
                                    borderWidth: 1,
                                    right: '2%'
                                }}
                                onPress={() => createTwoButtonAlert()}>
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
                                        top: '30.3%',
                                        right: '25%',
                                        lineHeight: 25,
                                        letterSpacing: -0.017
                                    }}>Add Media</Text>
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
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '5%', alignSelf: 'center' }}>

                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 279, marginTop: '0%', }}>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
                            <View style={{
                                width: '100%',
                                height: '31%',
                                alignSelf: 'center',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%',
                            }}>
                                <TextInput
                                    placeholder=' About Me '
                                    placeholderTextColor='#000000'
                                    onChangeText={handleFirst}
                                    style={{
                                        width: '90%',
                                        height: '110%',
                                        fontSize: 15,
                                        color: '#000000',
                                        lineHeight: 21,
                                        letterSpacing: -0.017,
                                        fontFamily: 'BakbakOne-Regular',
                                        textAlign: 'left',
                                        alignSelf: 'center',
                                        backgroundColor: 'transparent',
                                        paddingLeft: '10%',
                                        marginRight: '33%'
                                    }} /></View>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: 'Inter',
                                color: '#919191',
                                alignSelf: 'center',
                                justifyContent: 'center',
                                marginRight: '-10%',
                                lineHeight: 15,
                                letterSpacing: -0.017,
                                width: '90%'
                            }}>{firstAbout}
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#000000',
                                justifyContent: 'center',
                                left: '80%',
                                bottom: '57%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%'
                            }}>+22%
                            </Text>
                        </View>
                        <Gender />
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center', bottom: '3.5%' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
                        <TextInput
                            placeholder=' Interests'
                            placeholderTextColor='#000000'
                            onChangeText={handleThird}
                            style={{
                                width: '100%',
                                height: '30%',
                                //width: '80%',
                                fontSize: 15,
                                color: '#000000',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'left',
                                alignSelf: 'center',
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: '#6B6B6B',
                                paddingLeft: '10%'
                            }} />
                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginRight: '-10%',
                            marginBottom: '10%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>{firstInterest}
                        </Text>
                    </View>

                    <FilmsTV />

                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>

                    <Hobbies />

                    <GoingOut />

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>

                    <Music />

                    <Food />

                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>

                    <Pets />

                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', bottom: '155%' }}>
                        <TouchableOpacity onPress={openDatePickers} style={{
                            height: '30%', width: '100%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'transparent', borderWidth: 2, borderColor: '#6B6B6B',
                        }}>
                            <Text style={{ left: '10%', fontFamily: 'BakbakOne-Regular', fontSize: 15, color: '#000000', lineHeight: 21, letterSpacing: -0.017, }}> Your date of birth</Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginRight: '-13%',
                            marginBottom: '10%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>
                            {Moment(dateofbirth).format('DD/MM/YYYY')}
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 279, marginTop: '0%', marginBottom: '5%', alignSelf: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', bottom: '178%' }}>
                        <TouchableOpacity onPress={openDatePicker} style={{
                            height: '30%', width: '100%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'transparent', borderWidth: 2, borderColor: '#6B6B6B',
                        }}>
                            <Text style={{ left: '10%', fontFamily: 'BakbakOne-Regular', fontSize: 15, color: '#000000', lineHeight: 21, letterSpacing: -0.017, }}> My Events</Text>
                        </TouchableOpacity>

                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'Inter',
                            color: '#919191',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginRight: '-13%',
                            marginBottom: '10%',
                            lineHeight: 15,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>
                            {Moment(dateevent).format('DD/MM/YYYY')}
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
                        <View style={{ flex: 0.6, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-around', marginTop: '0%', borderWidth: 1, borderColor: '#6B6B6B', bottom: '375%' }}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'BakbakOne-Regular',
                                color: '#000000',
                                top: '15%',
                                left: '-6%',
                                marginRight: '-10%',
                                lineHeight: 21,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Select a Prompt
                            </Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('PromptOptions') }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'Inter',
                                    color: '#919191',
                                    marginRight: '52%',
                                    top: '50%',
                                    lineHeight: 15,
                                    letterSpacing: -0.017,
                                    width: '90%',
                                    left: '-6.5%',
                                }}>Add a question
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 20,
                                width: 20,
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 17,
                                alignSelf: 'flex-end',
                                bottom: '85%',
                                left: '3%'
                            }}
                                onPress={() => navigation.navigate('EditAccount')}>
                                <Image
                                    source={require('../../../assets/images/crossiconwhite.png')}
                                    style={{
                                        height: 18,
                                        width: 18,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.4, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', }}></View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 129.5, marginTop: '-150%', marginBottom: '5%', alignSelf: 'center', borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <View style={{ flex: 0.3, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%' }}>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginRight: '-10%',
                            top: '50%',
                            left: '-6.5%',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>Add your 2AM Tweet
                        </Text>
                        <TouchableOpacity style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 17,
                            alignSelf: 'flex-end',
                            bottom: '85%',
                            left: '3%'
                        }}
                            onPress={() => navigation.navigate('EditAccount')}>
                            <Image
                                source={require('../../../assets/images/crossiconwhite.png')}
                                style={{
                                    height: 18,
                                    width: 18,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.7, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', }}>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            position: 'relative',
                            alignItems: 'space-between',
                            justifyContent: 'center',
                        }}>
                            <Image
                                source={require('../../../assets/images/twitter.png')}
                                style={{
                                    height: 32,
                                    width: 31,
                                    left: 10,
                                    position: 'absolute',
                                    bottom: 38,
                                }}
                            />
                            <Text style={{
                                fontFamily: 'Inter',
                                position: 'absolute',
                                color: '#000000',
                                left: 55,
                                fontSize: 12,
                                letterSpacing: -0.017,
                                width: '85%',
                                bottom: '17%'
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been theLorem Ipsum is
                                simply dummy text of the printing and typesetting industry.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 189, marginTop: '0%', marginBottom: '5%', alignSelf: 'center', borderWidth: 1, borderColor: '#6B6B6B' }}>
                    <View style={{ flex: 0.2, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%' }}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginRight: '3%',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>Add a song that describe your life
                        </Text>
                        <TouchableOpacity style={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 17,
                            alignSelf: 'flex-end',
                            bottom: '85%',
                            left: '3%'
                        }}
                            onPress={() => navigation.navigate('EditAccount')}>
                            <Image
                                source={require('../../../assets/images/crossiconwhite.png')}
                                style={{
                                    height: 18,
                                    width: 18,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%' }}>
                        <View style={{
                            width: '100%',
                            height: 150,
                            backgroundColor: 'transparent',
                            position: 'relative',
                            alignItems: 'space-between',
                            justifyContent: 'center',
                        }}>
                            <Image
                                source={require('../../../assets/images/spotify.png')}
                                style={{
                                    height: 23,
                                    width: 24,
                                    left: 10,
                                    position: 'absolute',
                                    bottom: 118,
                                }}
                            />
                            <Text style={{
                                fontFamily: 'BakbakOne-Regular',
                                position: 'absolute',
                                fontSize: 17,
                                left: 45,
                                top: 8,
                                color: 'black',
                                letterSpacing: -0.017,
                                width: '100%',
                            }}>
                                Favourite Songs powered by Spotify
                            </Text>
                            <Image
                                source={require('../../../assets/images/album.png')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    left: 10,
                                    position: 'absolute',
                                    bottom: 50,
                                }}
                            />
                            <Text style={{
                                fontFamily: 'Inter',
                                color: '#000000',
                                position: 'absolute',
                                fontSize: 12,
                                left: 70,
                                top: 55,
                                position: 'absolute',
                                letterSpacing: -0.017,
                                lineHeight: 15
                            }}>Cool Me Down</Text>
                            <Text style={{
                                fontFamily: 'Inter',
                                color: '#000000',
                                position: 'absolute',
                                fontSize: 12,
                                left: 70,
                                top: 70,
                                position: 'absolute',
                                letterSpacing: -0.017
                            }}>
                                Gromee - Cool Me Down
                            </Text>
                            <TouchableOpacity style={{
                                height: 20,
                                width: 20,
                                left: 10,
                                top: 110,
                                position: 'absolute',
                                bottom: 50,
                            }}>
                                <Image
                                    source={require('../../../assets/images/playbtn.png')}
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}
                                /></TouchableOpacity>

                            <Slider
                                style={{ width: 245, height: 40, marginRight: '22%', marginTop: '27%' }}
                                maximumValue={1}
                                minimumValue={0}
                                value={.5}
                                minimumTrackTintColor='#000000'
                                maximumTrackTintColor='rgba(110, 62, 137, 0.2)'
                                thumbColor='#AD5DD7'
                                onValueChange={(value) => setSpeed(parseInt(value * 100))}
                                onSlidingStart={() => setSlide('Sliding')}
                            />
                            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', marginHorizontal: '40%', bottom: '1%' }}>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipseviolet.png')} style={{ paddingRight: '4%', paddingLeft: '10%' }} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipseviolet2.png')} style={{ paddingRight: '15%', }} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/images/ellipseviolet2.png')} style={{ paddingRight: '4%' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-between', height: 119.5, marginTop: '0%', marginBottom: '30%', alignSelf: 'center' }}>
                    <View
                        style={{
                            flex: 1.3,
                            fontSize: 15,
                            color: '#000000',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#6B6B6B',
                            paddingLeft: '10%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                        <Text style={{
                            fontSize: 15,
                            fontFamily: 'BakbakOne-Regular',
                            color: '#000000',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginRight: '10%',
                            lineHeight: 21,
                            letterSpacing: -0.017,
                            width: '90%',
                        }}>Control your Profile
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 2.7,
                            backgroundColor: 'transparent',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            justifyContent: 'center'
                        }} >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: 'row'
                            }} >
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#919191',
                                right: '-100%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Don't show my age
                            </Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#008000' }}
                                thumbColor={isEnabledAge ? '#008000' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabledAge}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: 'row'
                            }} >
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'Inter',
                                color: '#919191',
                                left: '100%',
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                width: '90%',
                            }}>Don't show Contact details
                            </Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#008000' }}
                                thumbColor={isEnabledDetails ? '#008000' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch2}
                                value={isEnabledDetails}
                            /> 
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
};
export default EditAccount;