import {StyleSheet} from "react-native";

const Block = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 90,
        height: 90,
        marginTop:0,
        alignSelf: 'flex-start',
    },

    view: {
        width: '90%',
        height: 120,
        padding:10,
        marginTop:5,
        marginLeft:'5%',
        borderRadius:5,
        backgroundColor:'#ffffff',
        flexDirection:'row',

    },
    text: {
        marginLeft: 15,
        flexShrink: 1
    }
});

export default Block;