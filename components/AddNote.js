import { PrivateValueStore } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, View, Text, Button } from 'react-native';
import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

/*
- input string titel * 
- input string desc
- input data endTime * ( => for later, needs datapicer and datetime type )

: * mandatory
*/
// value={task} onChangeText={text => setTask(text)}
const AddNote = ( { navigation, route } ) => {
    const [note, addNote] = useState({
        title: '',
        description: '',
        cTime: '',
        cDate: ''
    });

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [mtime, setMTime] = useState({
        time: 'no_time',
        date: 'no_date'
    });

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log(currentDate);

        Moment.locale('eu');
        const choosenTime = Moment(currentDate).format('hh-mm-ss');
        const choosenDate = Moment(currentDate).format('DD/MM/YYYY');
        console.log(choosenTime);
        console.log(choosenDate);
        setMTime({
            time: choosenTime,
            date: choosenDate
        });
        addNote({ ...note, cDate: choosenDate});
        addNote({ ...note, cTime: choosenTime});
        // addNote({ ...note, cDate: choosenDate});
        
        // Moment(currentDate, 'MM-DD-YYYY').format('')


        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const handleAddTask = () => {
        console.log(JSON.stringify(note));
        navigation.navigate({
            name: 'Home',
            params: { note: note },
            merge: true
        });
        /*const { callbacktmp } = route.params;

        console.log('data passed: ');
        callbacktmp('Hi Back!!');
        console.log( callbacktmp );
        console.log('calling handleAddTask');*/
    }
    return (
        <View>
            <View style={styles.centerView}>
                <Text style={styles.headerText}>Add Note</Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View style={styles.centerView}>
                    <TextInput 
                        style={styles.noteInput} 
                        placeholder={'Write a task'}
                        onChangeText={(text) => addNote({ ...note, title: text })}
                        value={note.title} />
                    <TextInput 
                        style={styles.noteInput} 
                        placeholder={'Task Description'} 
                        onChangeText={(text) => addNote({ ...note, description: text })} 
                        value={note.description} />
                </View>
            </KeyboardAvoidingView>
            <View style={styles.pickTimeDateBay}>
                <TouchableOpacity style={styles.saveView, { flex: 1 }} onPress={showDatepicker}>
                    <View style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>{mtime.date}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveView, { flex: 1 }} onPress={showTimepicker}>
                    <View style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>{mtime.time}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.saveView} onPress={() => handleAddTask()}>
                <View style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </View>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    pickTimeDateBay: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-evenly',
        // alignSelf: "flex-start",
        // minWidth: "48%",
    },
    pickTimeDateButton : {
        
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'grey',
        fontSize: 32,
    },
    noteInput: {
        fontSize: 24,
        width: '95%',
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: 'lightgrey',
    }, 
    saveView: {
        // position: 'absolute',
        // bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    saveButton: {
        width: 160,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 2,
    },
    saveButtonText: {
        fontSize: 24,
    },
});

export default AddNote;