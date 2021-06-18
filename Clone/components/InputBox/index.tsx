import React from 'react';
import { View ,Text ,TextInput} from 'react-native';
import {MaterialCommunityIcons, Entypo, FontAwesome5,Fontisto} from '@expo/vector-icons'
import { useState } from 'react';
import styles from './style';

const InputBox=()=>{

    const [message, setMessage]=useState('')

    
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={29} color="grey"/>
                <TextInput 
                style={styles.textInput} 
                placeholder="Type Your Message" 
                multiline
                value={message}
                onChangeText={setMessage}/>
                <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>
                <Fontisto name="camera" size={24} color="grey"/>
            </View>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons  name="microphone" size={29} color='white'/>
            </View>
        </View>
    )
}

export default InputBox;