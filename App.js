import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'テキストを入力、またはコピーしてください',
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({text})}
          placeholder={this.state.placeholder}
          value={this.state.text}
          multiline={true}
        />
        <Text>{this.textCount()}</Text>
      </View>
    );
  }

  textCount() {
    return `文字数: ${this.state.text.length}`
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    width: 300,
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
