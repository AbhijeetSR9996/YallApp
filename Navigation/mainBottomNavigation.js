import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileDisplay from '../src/screens/ProfileDisplay/index';
import Events from '../src/screens/Events';
import Edit from '../src/screens/EditProfile/edit';
import WeekendEvent from '../src/screens/WeekendEvents';
import WeeklyEventLocation from '../src/screens/WeeklyEventLocation';
import WeeklyEventMap from '../src/screens/WeeklyEventMap';
import Discover from '../src/screens/Discover';
import BookingConfirm from '../src/screens/BookingConfirm/index';
import Liked from '../src/screens/Liked/index';
import EventTicket from '../src/screens/EventTicket';
import EventTimer from '../src/screens/EventTimer';
import TicketSold from '../src/screens/TicketSold';
import ShareLink from '../src/screens/ShareLink';
import JoinParty from '../src/screens/JoinParty';
import SendTicket from '../src/screens/SendTicket';
import Match from '../src/screens/Match';
import Chat from '../src/screens/Chat';
import ChatQNA from '../src/screens/ChatQNA/index';
import ChatQNA2 from '../src/screens/ChatQNA2/index';
import ChatQuestion from '../src/screens/ChatQuestion';
import ManageProfile from '../src/screens/ManageProfile/index';
import EditAccount from '../src/screens/EditAccount';
import AccountSettings from '../src/screens/AccountSettings';
import ManageBookings from '../src/screens/ManageBookings';
import ManagePaymentMethods from '../src/screens/ManagePaymentMethods';
import EditCard from '../src/screens/EditCard/index';
import RemoveConfirmation from '../src/screens/RemoveConfirmation';
import ManageSubscriptions from '../src/screens/ManageSubscriptions';
import PremiumSubscription from '../src/screens/PremiumSubscription';
import BlockUsers from '../src/screens/BlockUsers';
import AutoplayVideo from '../src/screens/AutoplayVideo';
import ShareYall from '../src/screens/ShareYall';
import UpdatePhoneNumber from '../src/screens/UpdatePhoneNumber';
import WednesdayEvent from '../src/screens/WednesdayEvent';
import Help from '../src/screens/Help';
import HelpGettingStarted from '../src/screens/HelpGettingStarted';
import HelpSafety from '../src/screens/HelpSafety';
import HelpSupport from '../src/screens/HelpSupport';
import WednesdayLoveNight from '../src/screens/WednesdayLoveNight';
import WriteAnswer from '../src/screens/WriteAnswer';
import PromptOptions from '../src/screens/PromptOptions';
import PaymentMethods from '../src/screens/PaymentMethods';

const Tab = createBottomTabNavigator();

const MainBottomNavigation = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      backBehavior="none"
      tabBarOptions={{
        labelStyle: { fontSize: 0 },
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}>


      <Tab.Screen
        name="ProfileDisplay"
        component={ProfileDisplay}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />



      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ChatQNA"
        component={ChatQNA}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ChatQNA2"
        component={ChatQNA2}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ChatQuestion"
        component={ChatQuestion}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/heart.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="WeekendEvent"
        component={WeekendEvent}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="WeeklyEventLocation"
        component={WeeklyEventLocation}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="WeeklyEventMap"
        component={WeeklyEventMap}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="WednesdayLoveNight"
        component={WednesdayLoveNight}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="EventTicket"
        component={EventTicket}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="EventTimer"
        component={EventTimer}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="TicketSold"
        component={TicketSold}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ShareLink"
        component={ShareLink}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="JoinParty"
        component={JoinParty}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="SendTicket"
        component={SendTicket}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Match"
        component={Match}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/message_icon.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="BookingConfirm"
        component={BookingConfirm}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Edit"
        component={Edit}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ManageProfile"
        component={ManageProfile}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="EditAccount"
        component={EditAccount}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="PromptOptions"
        component={PromptOptions}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="WriteAnswer"
        component={WriteAnswer}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ManageBookings"
        component={ManageBookings}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ManagePaymentMethods"
        component={ManagePaymentMethods}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="EditCard"
        component={EditCard}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="RemoveConfirmation"
        component={RemoveConfirmation}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ManageSubscriptions"
        component={ManageSubscriptions}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="PremiumSubscription"
        component={PremiumSubscription}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="BlockUsers"
        component={BlockUsers}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="UpdatePhoneNumber"
        component={UpdatePhoneNumber}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="WednesdayEvent"
        component={WednesdayEvent}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="HelpGettingStarted"
        component={HelpGettingStarted}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="HelpSafety"
        component={HelpSafety}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="HelpSupport"
        component={HelpSupport}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="AutoplayVideo"
        component={AutoplayVideo}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ShareYall"
        component={ShareYall}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="PaymentMethods"
        component={PaymentMethods}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{width: 20, height: 20}}
            />
          )
        }}
      />

    </Tab.Navigator>
  );
};

export default MainBottomNavigation;
