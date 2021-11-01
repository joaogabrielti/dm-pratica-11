import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6E5494',
    },
    item: {
        width: '80%',
        paddingTop: 6,
        paddingBottom: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#6E5494',
        alignSelf: 'center',
        marginBottom: 8,
    },
    itemTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6E5494',
    },
    itemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
    },
    itemDetailsText: {
        fontWeight: 'bold',
        color: '#6E5494',
    },
})

export default styles