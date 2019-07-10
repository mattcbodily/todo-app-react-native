import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            todoList: ['Walk the dog', 'Code the things', 'Sleep'],
            todoInput: ''
        }
    }

    handleInput = (value) => {
        this.setState({
            todoInput: value
        })    
    }

    handleAdd = () => {
        this.setState({
            todoList: [...this.state.todoList, this.state.todoInput],
            todoInput: ''
        })
    }

    render(){
        const mappedTodos = this.state.todoList.map((todo, i) => {
            return (
                <View key={i} style={styles.todoBox}>
                    <Text>{todo}</Text>
                </View>
            )
        })
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>To Do's</Text>
                {mappedTodos}
                <View style={styles.inputContainer}>
                    <TextInput
                        value={this.state.todoInput} 
                        placeholder='Add a Todo'
                        onChangeText={value => this.handleInput(value)}
                        style={styles.todoInput}/>
                    <Button title='Add Todo' onPress={this.handleAdd}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 24
    },
    headerText: {
        fontSize: 20,
        marginBottom: 10
    },  
    todoBox: {
        height: 30,
        width: 410,
        alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'row'
    },  
    todoInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginRight: 5
    }
})

export default Todo;