import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import { icons } from '../../../assets/icons/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { height, width } from '../../services/helper';
import Slider from '../../component/PaginationDots/Slider';

const ManageSubscriptions = ({ navigation }) => {

    const [curPage] = useState(0);

    const [isEnabledDistance, setIsEnabledDistance] = React.useState(false);
    const [isEnabledShow, setIsEnabledShow] = React.useState(false);

    const toggleSwitch = () => setIsEnabledDistance(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabledShow(previousState => !previousState);


    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 0.1, width: width, backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
                <View style={{ flex: 1.5, width: width, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={{
                            fontSize: 40,
                            color: '#AD5DD7',
                            fontWeight: "200",
                            marginLeft: '20%',
                        }} />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        fontSize: 18,
                        lineHeight: 25,
                        letterSpacing: -0.017,
                        right: '70%'
                    }}>Manage subscription</Text>
                </View>
            </View>
            <Image source={require('../../../assets/images/horizontaline.png')} style={{ width: '100%', height: '0.1%', marginTop: '0%' }} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#FFFFFF', height: '90%', flex: 1, width: width, marginTop: '10%', marginBottom: '0%' }}>
                <View style={{ flex: 1, flexDirection: 'row', width: '90%', backgroundColor: '#FFFFFF', alignItems: 'stretch', justifyContent: 'center', height: 199, marginTop: '0%', alignSelf: 'center', borderRadius: 5, }}>
                    <View style={{ flex: 0.45, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: '100%', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'column', width: '100%', backgroundColor: '#DCC7E1', alignItems: 'center', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 15 }}>
                            <Image source={require('../../../assets/images/unlimited.png')}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', width: '100%', backgroundColor: '#DCC7E1', alignItems: 'center', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 15 }}>
                            <Image source={require('../../../assets/images/crown.png')} />
                        </View>
                    </View>
                    <View style={{ flex: 1.4, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-between', height: '100%', alignSelf: 'center' }}>
                        <View style={{ flex: 0.4, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 0 }}>
                            <View style={{ flex: 1.2, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 0 }}>
                                <View style={{ flex: 0.8, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 0 }}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        color: '#857E7E',
                                        lineHeight: 15,
                                        marginLeft: '4.5%',
                                    }}>Unlimited likes</Text>
                                </View>
                                <View style={{ flex: 1.2, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', height: 83, marginTop: '0%', borderRadius: 0 }}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        color: '#000000',
                                        lineHeight: 18,
                                        marginLeft: '4.5%',
                                    }}>INR 191.50 </Text>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        color: '#857E7E',
                                        lineHeight: 18,
                                    }}>/month</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.8, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 83, marginTop: '0%', borderRadius: 0 }}>
                                <TouchableOpacity style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderRadius: 20,
                                    borderWidth: 1.5,
                                    borderColor: 'rgba(119, 119, 119, 0.2)',
                                    backgroundColor: '#FFFFFF',
                                    //marginTop: '5%',
                                    width: width * 0.17,
                                    //marginLeft: '10%',
                                    marginLeft: '-17%',
                                    height: '70%'
                                }}
                                    onPress={() => navigation.navigate('ManageSubscriptions')}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        color: '#4B4B4B',
                                        //textAlign: 'center',
                                        //justifyContent:'center'
                                    }}>Renew</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderRadius: 20,
                                    borderWidth: 1.5,
                                    borderColor: 'rgba(119, 119, 119, 0.2)',
                                    backgroundColor: '#FFFFFF',
                                    //marginTop: '5%',
                                    width: width * 0.17,
                                    //marginLeft: '10%',
                                    right: '150%',
                                    height: '70%'
                                }}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        color: '#4B4B4B',
                                        //textAlign: 'center',
                                        //justifyContent:'center'
                                    }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'column', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 0 }}>
                        </View>
                        <View style={{ flex: 0.4, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 0 }}>
                            <View style={{ flex: 1.2, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 0 }}>
                                <View style={{ flex: 0.8, flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'center', height: 83, marginTop: '0%', borderRadius: 0 }}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        color: '#857E7E',
                                        lineHeight: 15,
                                        marginLeft: '4.5%',
                                    }}>Unlimited likes</Text>
                                </View>
                                <View style={{ flex: 1.2, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', height: 83, marginTop: '0%', borderRadius: 0 }}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        color: '#000000',
                                        lineHeight: 18,
                                        marginLeft: '4.5%',
                                    }}>INR 191.50 </Text>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        color: '#857E7E',
                                        lineHeight: 18,
                                    }}>/month</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.8, flexDirection: 'row', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 83, marginTop: '0%', borderRadius: 0 }}>
                                <TouchableOpacity style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderRadius: 20,
                                    borderWidth: 1.5,
                                    borderColor: 'rgba(119, 119, 119, 0.2)',
                                    backgroundColor: '#FFFFFF',
                                    width: width * 0.17,
                                    marginLeft: '-17%',
                                    height: '70%'
                                }}
                                    onPress={() => navigation.navigate('ManageSubscriptions')}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        color: '#4B4B4B',
                                    }}>Renew</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    borderRadius: 20,
                                    borderWidth: 1.5,
                                    borderColor: 'rgba(119, 119, 119, 0.2)',
                                    backgroundColor: '#FFFFFF',
                                    width: width * 0.17,
                                    right: '150%',
                                    height: '70%'
                                }}>
                                    <Text style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        color: '#4B4B4B',
                                    }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', height: 351, marginTop: '10%', alignSelf: 'center', borderRadius: 10, marginBottom: '10%' }}>
                    <ImageBackground
                        source={require('../../../assets/images/Gradient-Fill.png')}
                        style={[{
                            width: '100%',
                            height: 220,
                        }]}
                        imageStyle={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    >
                        <View style={{ flexDirection: 'column', width: '100%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', height: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>

                             <Slider/>

                        </View>
                    </ImageBackground>

                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: 'pink', alignItems: 'stretch', justifyContent: 'center', marginTop: '0%', height: 131, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#E0CCE5', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', borderBottomLeftRadius: 10, borderBottomRightRadius: 0 }}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 30,
                                color: '#000000',
                                lineHeight: 36,
                                top: '5%'
                            }}>12 </Text>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 12,
                                color: '#000000',
                                lineHeight: 15,
                                bottom: '7%'
                            }}>months </Text>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 12,
                                color: '#000000',
                                lineHeight: 15,
                                bottom: '5%'
                            }}>INR 191.50/mo </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ECB0FB', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', }}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 30,
                                color: '#000000',
                                lineHeight: 36,
                                top: '5%'
                            }}>6 </Text>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 12,
                                color: '#000000',
                                lineHeight: 15,
                                bottom: '7%'
                            }}>months </Text>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 12,
                                color: '#000000',
                                lineHeight: 15,
                                bottom: '5%'
                            }}>INR 191.50/mo </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#E0CCE5', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', borderBottomLeftRadius: 0, borderBottomRightRadius: 10 }}>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 30,
                                color: '#000000',
                                lineHeight: 36,
                                top: '5%'
                            }}>1 </Text>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 12,
                                color: '#000000',
                                lineHeight: 15,
                                bottom: '7%'
                            }}>month </Text>
                            <Text style={{
                                fontFamily: 'Inter',
                                fontSize: 12,
                                color: '#000000',
                                lineHeight: 15,
                                bottom: '5%'
                            }}>INR 191.50/mo </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', width: '90%', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'center', marginTop: '5%', alignSelf: 'center', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, marginBottom: '10%', height: 451, }}>
                    <View style={{ flex: 0.2, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'flex-start', justifyContent: 'space-evenly', marginTop: '0%', }}>
                        <Text style={{
                            color: '#000000',
                            fontFamily: 'BakbakOne-Regular',
                            //fontWeight: '400',
                            fontSize: 18,
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            right: '50%'
                        }}>What you get:</Text>
                        <Text style={{
                            color: '#000000',
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 18,
                            lineHeight: 25,
                            letterSpacing: -0.017,
                        }}>Premium</Text>
                        <Text style={{
                            color: 'rgba(0, 0, 0, 0.5)',
                            fontFamily: 'BakbakOne-Regular',
                            fontSize: 18,
                            lineHeight: 25,
                            letterSpacing: -0.017,
                            left: '40%'
                        }}>Boost</Text>
                    </View>
                    <View style={{ flex: 1.8, flexDirection: 'column', backgroundColor: 'white', alignItems: 'stretch', justifyContent: 'space-around', marginTop: '0%', width: '100%' }}>
                        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', height: '13%', borderRadius: 3, borderWidth: 0.5, borderColor: '#857E7E' }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                right: '60%'
                            }}>Unlimited likes</Text>
                            <Image source={require('../../../assets/images/blacktickicon.png')} style={{ left: '-5%' }} />
                            <Image source={require('../../../assets/images/greytickicon.png')} style={{ left: '33%' }} />
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', height: '13%', borderRadius: 3, borderWidth: 0.5, borderColor: '#857E7E' }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                right: '103%'
                            }}>Unlimited likes</Text>
                            <Image source={require('../../../assets/images/blacktickicon.png')} style={{ left: '-92%' }} />

                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', height: '13%', borderRadius: 3, borderWidth: 0.5, borderColor: '#857E7E' }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                right: '103%'
                            }}>Unlimited likes</Text>
                            <Image source={require('../../../assets/images/blacktickicon.png')} style={{ left: '-92%' }} />
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', height: '13%', borderRadius: 3, borderWidth: 0.5, borderColor: '#857E7E' }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                right: '60%'
                            }}>Unlimited likes</Text>
                            <Image source={require('../../../assets/images/blacktickicon.png')} style={{ left: '-5%' }} />
                            <Image source={require('../../../assets/images/greytickicon.png')} style={{ left: '33%' }} />
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', height: '13%', borderRadius: 3, borderWidth: 0.5, borderColor: '#857E7E' }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                right: '103%'
                            }}>Unlimited likes</Text>
                            <Image source={require('../../../assets/images/blacktickicon.png')} style={{ left: '-92%' }} />

                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '0%', height: '13%', borderRadius: 3, borderWidth: 0.5, borderColor: '#857E7E' }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                letterSpacing: -0.017,
                                right: '60%'
                            }}>Unlimited likes</Text>
                            <Image source={require('../../../assets/images/blacktickicon.png')} style={{ left: '-5%' }} />
                            <Image source={require('../../../assets/images/greytickicon.png')} style={{ left: '33%' }} />
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                        width: width * 0.8,
                        height: height * 0.07,
                        borderWidth: 1,
                        right: '2%',
                        marginTop: '0%',
                        marginBottom: '20%'
                    }}
                    onPress={() => navigation.navigate('PremiumSubscription')}>
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
                        }}>Continue</Text>
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
            </ScrollView >
        </View >
    );
};
export default ManageSubscriptions;