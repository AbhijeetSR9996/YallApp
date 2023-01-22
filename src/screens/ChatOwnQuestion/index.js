import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import Styles from './styles';

const ChatOwnQuestion = ({ navigation }) => {

    return (
        <View style={Styles.main_container}>
            <ImageBackground
                source={require('../../../assets/images/ownquestionbg.png')}
                resizeMode="stretch"
                style={Styles.image_background}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: '10%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', }}>
                        <Text style={{
                            width: '100%',
                            height: 18,
                            fontFamily: 'Inter',
                            fontSize: 15,
                            lineHeight: 18,
                            color: '#000000',
                            textAlign: "center",
                            top: '15%',
                        }}>Ask a question for you both to answer:</Text>
                    </View>
                    <View style={{ marginTop: '80%', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                        <TextInput
                            placeholder='Type your own quest....'
                            placeholderTextColor='#000000'
                            style={{
                                width: '80%',
                                fontSize: 27,
                                color: '#000000',
                                lineHeight: 42,
                                letterSpacing: -0.017,
                                fontFamily: 'BakbakOne-Regular',
                                textAlign: 'center'
                            }} />
                    </View>
                    <View style={{ marginTop: '80%', backgroundColor: 'transparent', alignItems: 'flex-end', justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('ChatQuestion') }}>
                            <Text style={{
                                width: '100%',
                                height: 18,
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                color: '#000000',
                                textAlign: "center",
                                bottom: '10%',
                                marginLeft: '8%'
                            }}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('ChatQNA') }}>
                            <Text style={{
                                width: '100%',
                                height: 18,
                                fontFamily: 'Inter',
                                fontSize: 15,
                                lineHeight: 18,
                                color: '#000000',
                                textAlign: "center",
                                bottom: '10%',
                                marginRight: '12%'
                            }}>Send Ques</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default ChatOwnQuestion;

