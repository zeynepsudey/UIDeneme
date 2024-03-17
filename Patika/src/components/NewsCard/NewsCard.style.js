import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    description: {
        marginTop: 3,
        color: 'black',
    },
    inner_container: {
        padding: 5,
    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
        fontWeight: 'bold',
    },
});