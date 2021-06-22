import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './style'
import { useNavigation } from '@react-navigation/native';

const NewMessageButton=()=>{

    const navigation=useNavigation();
    const onPress=()=>{
            navigation.navigate('Contacts')
    }

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons
            name="message-reply-text"
            color="white"
            size={28}
            />
        </TouchableOpacity>
    )
}

export default NewMessageButton;