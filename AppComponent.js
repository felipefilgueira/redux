import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import {addTask, updateTaskText} from './src/redux/actions/todo-actions'
import {connect} from 'react-redux'


class AppComponent extends React.Component {
    state = {
        tasks: [],
        text: '',
    };

    addTask() {
        this.props.addTask(this.props.text);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <Text>{item}</Text>}
                />
                <TextInput
                    width={200}
                    borderColor={'red'}
                    borderWidth={1}
                    onChangeText={text => {
                        this.props.updateTaskText(text)
                    }}
                />
                <Button
                    title={'Add Task'}
                    onPress={() => {
                        this.addTask()
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.todoreducer.tasks,
        text: state.todoreducer.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (task) => dispatch(addTask(task)),
        updateTaskText: (text) => dispatch(updateTaskText(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppComponent)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


//npm install redux react-native