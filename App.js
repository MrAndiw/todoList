import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Todays Task */}
      <View style={styles.taskWrapper} >
        <Text style={styles.sectionTitle} > Todays Task </Text>

        <View style={styles.items} >
          {/* Task is here */}
          <Task text={'task 1'}></Task>
          <Task text={'task 2'}></Task>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30
  },
});
