import { StyleSheet } from 'react-native'
// have have preset colors/size theme ready later
// import { COLORS } from '../../styles'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    inputContainer: {
        width: '70%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 3,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
})