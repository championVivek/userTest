import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 0,
        elevation: 2,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10
    },
    img: {
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%'
    },
    View2: {
        padding: 10
    },
    bottomView: {
        padding: 10,
        alignItems: 'flex-end'
    },
    text1: {
        color: '#282727',
        fontWeight: '700',
        fontSize: 15
    },
    text2: {
        color: '#282727',
        fontWeight: '400',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    lowerText: {
        color: 'lightgrey',
        fontSize: 11
    },
    textContainer: { flexDirection: 'row', alignItems: 'center' },

})

export default styles