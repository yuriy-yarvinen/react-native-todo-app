import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos(todos.concat([newTodo]));

    // setTodos((prevTodos)=>{
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const removeToDo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View style={styles.container}>
      <Navbar title="Todo App" />
      <View style={styles.AddTodoContainer}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} onRemove={removeToDo} /> }
        />
        {/* <ScrollView>
          {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
          })}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  AddTodoContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
