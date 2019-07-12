import React, {Component} from 'react'
import {StyleSheet, ScrollView, ImageBackground, View, Text, TextInput, Button} from 'react-native'
import axios from 'axios'
import TodoDisplay from './TodoDisplay'
import bigshia from './../../assets/yesyoucan.jpg'

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            todoList: [],
            todoInput: ''
        }
    }

    componentDidMount(){
        this.getTodos()
    }

    getTodos = () => {
        axios.get('/api/todo')
        .then(res => {
            this.setState({
                todoList: res.data
            })
        })
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
                <TodoDisplay
                    key={i} 
                    todo={todo} />
            )
        })
        return(
            <ScrollView>
                <ImageBackground source={bigshia} style={styles}>
                <Text style={styles.headerText}>ToDos</Text>
                <View style={styles.container}>
                    {mappedTodos}
                    <View style={styles.inputContainer}>
                    </View>
                </View>
                <TextInput
                    value={this.state.todoInput} 
                    placeholder='Add a Todo'
                    onChangeText={value => this.handleInput(value)}
                    style={styles.todoInput}/>
                <Button title='Add Todo' onPress={this.handleAdd}/>
                </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 600,
        width: 410
    },  
    container: {
        minHeight: 270,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 24
    },
    headerText: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10
    },  
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },  
    todoInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginRight: 5
    }
})

export default Todo;