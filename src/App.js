import React, {useState} from 'react';
import {SafeAreaView,View,FlatList } from 'react-native';
import {MyButton, MyInput, ListItem} from './components'

const App=()=> {
 
  const [list, setlist] = useState([])
  const [todos, setTodos] = useState({todo: '', isDone: true },)

  textChanger = (getName) => {
    todos.isDone = true
    todos.todo = getName
    setTodos(todos)
  }

  setName =()=>{
    let newTodo = [...list]
    newTodo.push({todo:todos.todo, isDone:todos.isDone})
    setlist(newTodo)
  }

  selected =(item)=>{
    let newList = [...list]
    item.isDone = item.isDone ? 0 : 1
    setlist(newList)
  }

  return (
    <View style={{backgroundColor:"#c1d5e0", flex:1}}>

    <SafeAreaView>

     <FlatList
     keyExtractor={(item,index)=>index.toString()}
      data={list}
      renderItem={({ item }) => (
        <ListItem
            MyData={item}
            onSelect={selected}/>
      )}/>

        <View>

          <MyInput myPlace='What ToDo ?' textChange={textChanger}/>
          <MyButton myTitle='Add to list' myPress={setName}/>

        </View>

    </SafeAreaView>

    </View>
  );
};



export {App};