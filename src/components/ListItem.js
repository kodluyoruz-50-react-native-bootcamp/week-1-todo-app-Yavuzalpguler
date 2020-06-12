import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = props => {

    let styles = props.myData.isDone ? doneStyles : undoneStyles

    return (

        <TouchableOpacity onPress={()=> props.onSelect(props.myData)}>
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.dot} />
                <Text style={styles.text}>{props.myData.todo}</Text>
            </View>

            
            <Text>
                {
                    props.myData.isDone ? "Yapıldı!" : "Yapılmadı!"
                }
            </Text>  
            

        </View>
        
        </TouchableOpacity>
        
    )
}

const doneStyles = StyleSheet.create({
    container: {
        backgroundColor: "#ff8a65",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        textDecorationLine: 'line-through'
    },
    dot: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 10
    }
})

const undoneStyles = StyleSheet.create({
    container: {
        backgroundColor: "#aed581",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
    },
    dot: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 10
    }
})

export {ListItem}