import React, {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FakeNavigationBar from '../components/FakeNavigationBar';
import NavigationBarButton from '../components/NavigationBarButton';

class NewTodoFormScene extends React.Component {

  constructor(props) {
    super(props);
    this._renderCancelButton = this._renderCancelButton.bind(this);

    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <View>
        <FakeNavigationBar
          title="New Todo"
          leftButton={this._renderCancelButton()}
          rightButton={this._renderDoneButton()}
        />
        <View style={styles.formContainer}>
          <Text>Testing</Text>
          <TextInput
            style={styles.textField}
            value={this.state.text}
            onChangeText={(title) => this.setState({title})}
          />
        </View>
      </View>
    );
  }

  _renderCancelButton() {
    return (
      <NavigationBarButton
        title="Cancel"
        onPress={() => this.props.navigator.pop()}
      />
    );
  }

  _renderDoneButton() {
    return (
      <NavigationBarButton
        title="Done"
        onPress={() => alert('save this')}
      />
    );
  }

}

module.exports = NewTodoFormScene;

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
  },
  textField: {
    borderWidth: 1,
    borderColor: 'lightblue',
    height: 40,
  },
});
