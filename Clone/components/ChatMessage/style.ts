import { StyleSheet } from 'react-native';
import Colors  from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    messageBox:{
        marginRight:50,
        borderRadius:5,
        padding:10,
    },
    message:{
        color:'black',
    },
    time:{
        alignSelf:'flex-end',
        color:'grey'
    },
    name:{
        color:Colors.light.tint,
        fontWeight:'bold',
        marginBottom:4,
        fontSize:15
    },

})

export default styles;