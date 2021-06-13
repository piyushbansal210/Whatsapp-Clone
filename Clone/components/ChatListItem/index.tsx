import React from 'react';
import { ChatRoom } from '../../types';   // importing the type of props
import { View, Text ,Image} from 'react-native';
import styles from './style'
import moment from 'moment';


export  type ChatListItemProps ={// the type is imported into a function type
    chatRoom:ChatRoom;
}

// in type script the the props are first mentioned in the type and then as props
const ChatListItem=(props: ChatListItemProps)=>{ 
    const {chatRoom}=props; //chatRoom is declared as the values are transfered using it
    const user=chatRoom.users[1];
2
    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar} />
                <View style={styles.middleContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.message}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
    )
};

export default ChatListItem;