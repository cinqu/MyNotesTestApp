import React, { useState, useEffect } from 'react';
import {
    StyleSheet, 
    View, 
    Text, 
    SafeAreaView,
    ScrollView,
    useColorScheme,
    Keyboard,
    TouchableOpacity, 
    TextInput,
    KeyboardAvoidingView
} from 'react-native';

import OneNote from './OneNote';
import AddNote from './AddNote';

const NoteList = ({ navigation, route }) => {
    const isDarkMode = useColorScheme() === 'dark';

    // const [note, setNote] = useState({});
    const [noteItems, setNoteItems] = useState([]);

    useEffect(()=> {
        if(route.params?.note) {
            // save note here 
            const note = route.params?.note;
            // setNote(note);
            console.log(note);
            setNoteItems([...noteItems, note]);
            // setNote(null);
            // handleAddTask(note);
            // const { title, description } = route.params?.note;
            // console.log('-- route note: ' + title + ' desc: ' + description);
        }
    }, [route.params?.note] );

    const handleAddTask = ( note ) => {
        // Keyboard.dismiss();
        setNoteItems([...noteItems, note]);
        setNote(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...noteItems];
        itemsCopy.splice(index, 1);
        setNoteItems(itemsCopy)
    }

    const callbacktest = ( data ) => {
        console.log('callback working!!');
        console.log( data );
    }

    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle, styles.container}>
            {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
                style={backgroundStyle}>
                {/* Today's Tasks */}
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>My Notes ;P</Text>
                    <View style={styles.items}>
                        {/* This is where the tasks will go! */}
                        
                        { noteItems.map((item, index) => {
                            console.log('item: ');
                            console.log(item);
                            return (
                            <TouchableOpacity key={index} /*onPress={() => completeTask(index)}*/>
                                <OneNote note={ item } />
                            </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity 
                style={styles.writeTaskWrapper} 
                onPress={() => navigation.navigate('AddNote'/*, { callbacktmp: callbacktest }*/ ) /*handleAddTask()*/} >
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        fontSize: 36,
    },
});

export default NoteList;