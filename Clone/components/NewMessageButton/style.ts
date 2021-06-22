import { StyleSheet  } from 'react-native';
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container:{ 
        borderRadius:50,
        backgroundColor:Colors.light.tint,
        width:60,
        height:60,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:20,
        right:20,
    },
})


export default styles;