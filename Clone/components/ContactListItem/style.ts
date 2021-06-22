import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10,
        borderBottomWidth:0.004,
        borderColor:'#DCDCDC',
        borderBottomStartRadius:130,
        borderBottomRightRadius:20
    },
    avatar:{
        width:65,  
        height:65,
        borderRadius:50,
        marginRight:10,
    },
    leftContainer:{
        flexDirection:'row',
    },
    middleContainer:{
        justifyContent:'space-around',
        
    },
    name:{
        fontWeight:'bold',
        fontSize:18,
    },
    message:{
        color:'grey',
        fontSize:16
    },
    time:{
        color:'grey', 
        fontSize:14,
    },
});

export default styles;