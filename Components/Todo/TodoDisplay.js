import React from 'react'
import {StyleSheet, ImageBackground, View, Text, Button} from 'react-native'
import shia from './../../assets/gif_shia.gif'

const TodoDisplay = (props) => {
    return(
        <ImageBackground source={shia} style={styles.image}>
            <View style={styles.todoBox}>
                <Text>{props.todo}</Text>
                <Button title='Done'/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 190,
        width: 190,
        margin: 3
    },
    todoBox: {
        height: 190,
        width: 190,
        margin: 3,
        alignItems: 'center'
    }
})

export default TodoDisplay;