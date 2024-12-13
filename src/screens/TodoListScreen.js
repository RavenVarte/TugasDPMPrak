// src/screens/TodoListScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi pengambilan data dari API
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        setTodos(['Belajar React Native', 'Membuat aplikasi', 'Deploy ke store']);
        setLoading(false);
      }, 2000);
    };

    fetchData();

    return () => {
      console.log('Cleanup logic executed');
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Tugas</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default TodoListScreen;