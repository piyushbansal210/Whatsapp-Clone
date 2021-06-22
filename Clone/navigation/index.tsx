/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View  ,StyleSheet , Image,} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';

import { ColorSchemeName } from 'react-native';
import Colors from "../constants/Colors";

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ContactScreen from '../screens/ContactScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  
  
  return (


    <Stack.Navigator screenOptions={{ 
      headerShown: true, // By fault it is false it should be set true
      headerStyle:{   // for shcanging the header style
        backgroundColor: Colors.light.tint,  
        shadowOpacity:0,  //for removing the  shadow from the header
        elevation:0,
      },
      headerTintColor:'white',
      headerTitleAlign:'left',
      headerTitleStyle:{//All the changes in title are changed here
      },
      }}>
      <Stack.Screen name="Root" component={MainTabNavigator} 
      options={{

        title:'Whatsapp', 
        headerRight:()=>{
          return(
            <View style={styles.headerLeftContainer}>
              <Octicons name="search" size={22} color="white" />
              <MaterialCommunityIcons name="dots-vertical" size={23} color="white" />
            </View>
        )} 
      }}/>
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={
        ({ route }) => ({ title: route.params.name,
          headerRight:()=>{
            return(
              <View style={styles.ChatRoomRightContainer}>
                <FontAwesome name="video-camera" size={24} color="white" />
                <FontAwesome name="phone" size={24} color="white" />
                <MaterialCommunityIcons name="dots-vertical" size={23} color="white" />
              </View>
            )
          }
        })} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Contacts" component={ContactScreen} options={{ title: 'Contacts' }} />
    </Stack.Navigator>
  );
}


//designing the right part of the header home
const styles = StyleSheet.create({
  headerLeftContainer:{
    flexDirection:'row',
    marginRight:10,
    justifyContent:'space-between',
    width:60
  },
  imageHeader:{
    width:50,
    height:50,
    borderRadius:50,
    marginLeft:100
  },
  ChatRoomRightContainer:{
    marginRight:10,
    flexDirection:'row',
    width:110,
    justifyContent:'space-between',
  }
})