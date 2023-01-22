import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import GetStarted from '../src/screens/GetStarted';
import SignUp from '../src/screens/SignUp/SignUp';
import SignInMobile from '../src/screens/SignUp/SignInMobile';
import SignUpMobile from '../src/screens/SignUp/signUpMobile';
import SignEmail from '../src/screens/SignInEmail/signEmail';
import SignedInMobile from '../src/screens/SignedInMobile/index';
import SignedUpMobile from '../src/screens/SignedUpMobile/index';
import SignUpEmail from '../src/screens/SignUpEmail';
import MobileCode1 from '../src/screens/MobileCode1/index';
import MobileCode2 from '../src/screens/MobileCode2/index';
import GovtRegisterID from '../src/screens/govtRegister.js/govtRegisteration';
import Upload from '../src/screens/UploadID/upload';
import Selfie from '../src/screens/Selfie/index';
import UserName from '../src/screens/User details/userName';
import UserDOB from '../src/screens/User details/userDOB';
import UserEmail from '../src/screens/User details/userEmail';
import UserGender from '../src/screens/User details/userGender';
import UserJob from '../src/screens/User details/userJob';
import UserLocation from '../src/screens/User details/userLocation';
import AboutPrivacy from '../src/screens/aboutPrivacy/privacy';
import Gender from '../src/screens/genderScreens/gender';
import Gender1 from '../src/screens/genderScreens/gender1';
import Gender2 from '../src/screens/genderScreens/gender2';
import Gender3 from '../src/screens/genderScreens/gender3';
import Gender4 from '../src/screens/genderScreens/gender4';
import AddPhoto from '../src/screens/AddPhoto/addPhoto';
import Edit from '../src/screens/EditProfile/edit';
import ProfileDisplay from '../src/screens/ProfileDisplay/index';
import MatchProfile from '../src/screens/MatchProfile';
import Match from '../src/screens/Match';
import Chat from '../src/screens/Chat';
import ChatQuestion from '../src/screens/ChatQuestion';
import ChatOwnQuestion from '../src/screens/ChatOwnQuestion';
import ChatQNA from '../src/screens/ChatQNA/index';
import ChatQNA2 from '../src/screens/ChatQNA2/index';

import MainBottomNavigation from './mainBottomNavigation';


const Stack = createStackNavigator();

function MainStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="GetStarted">

        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignInMobile" component={SignInMobile} />
        <Stack.Screen name="SignUpMobile" component={SignUpMobile} />
        <Stack.Screen name="SignEmail" component={SignEmail} />
        <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
        <Stack.Screen name="SignedUpMobile" component={SignedUpMobile} />
        <Stack.Screen name="SignedInMobile" component={SignedInMobile} />
        <Stack.Screen name="MobileCode1" component={MobileCode1} />
        <Stack.Screen name="MobileCode2" component={MobileCode2} />
        <Stack.Screen name="GovtRegisterID" component={GovtRegisterID} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="Selfie" component={Selfie} />
        <Stack.Screen name="UserName" component={UserName} />
        <Stack.Screen name="UserDOB" component={UserDOB} />
        <Stack.Screen name="UserEmail" component={UserEmail} />
        <Stack.Screen name="UserGender" component={UserGender} />
        <Stack.Screen name="UserJob" component={UserJob} />
        <Stack.Screen name="UserLocation" component={UserLocation} />
        <Stack.Screen name="AboutPrivacy" component={AboutPrivacy} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Gender1" component={Gender1} />
        <Stack.Screen name="Gender2" component={Gender2} />
        <Stack.Screen name="Gender3" component={Gender3} />
        <Stack.Screen name="Gender4" component={Gender4} />
        <Stack.Screen name="AddPhoto" component={AddPhoto} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="ProfileDisplay" component={ProfileDisplay} />
        <Stack.Screen name="MatchProfile" component={MatchProfile} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ChatQuestion" component={ChatQuestion} />
        <Stack.Screen name="ChatOwnQuestion" component={ChatOwnQuestion} />
        <Stack.Screen name="ChatQNA" component={ChatQNA} />
        <Stack.Screen name="ChatQNA2" component={ChatQNA2} />
        <Stack.Screen name="MainBottomNavigation" component={MainBottomNavigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigation;
