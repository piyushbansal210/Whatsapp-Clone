import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors'

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:6,
    },
    mainContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:50,
        marginRight:5,
        padding:10,
        flex:1,
        alignItems:'center',
    },
    buttonContainer:{
        backgroundColor:Colors.light.tint,
        borderRadius:50,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
        flex:1,
        marginHorizontal:10,
    },
    icon:{
        marginHorizontal:10,
    },
});

export default styles;
