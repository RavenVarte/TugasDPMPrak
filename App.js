// src/App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import TodoListScreen from './src/screens/TodoListScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TodoListScreen />
    </SafeAreaView>
  );
};

export default App;