import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NoteList from './components/NoteList';
import AddNote from './components/AddNote';


const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  const NavStack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <NavStack.Navigator>
          <NavStack.Screen Titel="Notes List" name="Home" component={NoteList} />
          <NavStack.Screen name="AddNote" component={AddNote} />
        </NavStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});

export default App;
