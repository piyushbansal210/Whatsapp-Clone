import React from 'react';
import { View ,Text ,TextInput,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons, Entypo, FontAwesome5,Fontisto,MaterialIcons} from '@expo/vector-icons'
import { useState } from 'react';
import styles from './style';

const InputBox=()=>{

    const [message, setMessage]=useState('')

    const onMicrophone=()=>{
        console.warn( 'Micophone ON')
    }
    const onSendPress=()=>{
        console.warn(`Sending Message ${message}`)

        //Send message to the backend

        setMessage('')
    }

    const onPress=()=>{
        if (!message){
            onMicrophone();
        }
        else{
            onSendPress();
        }
    }

    
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
                {!message && <Fontisto name="camera" size={24} color="grey"/>}
                
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message?
                    <MaterialCommunityIcons  name="microphone" size={29} color='white'/>
                    :<MaterialIcons  name="send" size={29} color='white'/> 
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;