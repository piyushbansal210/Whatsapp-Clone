import React from 'react';
import { User } from '../../types';   // importing the type of props
import { View, Text ,Image,TouchableOpacity} from 'react-native';
 
import styles from './style'
import moment from 'moment';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export  type ContactListItemProps ={// the type is imported into a function type
    user:User;
}

// in type script the the props are first mentioned in the type and then as props
const ContactListItem=(props: ContactListItemProps)=>{ 
    const {user}=props; //chatRoom is declared as t he values are transfered using it
    const navigation=useNavigation();

    const onClick=()=>{
        //navigate to chatroom with this user
    }

    return(
        <TouchableWithoutFeedback style={styles.container} onPress={onClick}>
            <View style={styles.leftContainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar} />
                <View style={styles.middleContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.message}>{user.status}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;