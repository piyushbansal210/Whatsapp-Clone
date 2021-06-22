import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View  } from '../components/Themed';
import { FlatList } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import user from '../data/User';
import NewMessageButton from '../components/NewMessageButton';

import ContactListItem from '../components/ContactListItem';

export default function ContactScreen() {
    

  return (
    <View> 
      <FlatList 
      style={{width:'100%'}}
      data={user}
      renderItem={({item})=><ContactListItem user={item} />}
      keyExtractor={(item)=>item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  newMessage:{
    width:"100%",
    flexDirection:"column-reverse",
    marginBottom:10,
    alignItems:'flex-end',
    marginRight:20,
  },
});
