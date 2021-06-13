import React from 'react';
import { ChatRoom } from '../../types';   // importing the type of props
import { View, Text } from 'react-native';


export  type ChatListItemProps ={
    chatRoom:ChatRoom;
}

// in type script the the props are first mentioned in the type and then as props
const ChatListItem=(props: ChatListItemProps)=>{
    const {chatRoom}=props;
    return(
        <View>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )
};

export default ChatListItem;