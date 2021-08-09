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
        // height: 180,
        padding:8,
        marginTop:5,
        marginLeft:'5%',
        borderRadius:5,
        backgroundColor:'#ececec',
        flexDirection:'row',
        borderColor: "#727272",
        borderBottomWidth: 1,
    },
    text: {
        marginLeft: 15,
        flexShrink: 1
    }
});

export default Block;