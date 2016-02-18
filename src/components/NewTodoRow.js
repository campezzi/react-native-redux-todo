import React, {
  PropTypes,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

class NewTodoRow extends React.Component {

  constructor(props) {
    super(props);

    this._onEndEditing = this._onEndEditing.bind(this);

    this.state = {
      title: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textField}
          placeholder="New Todo"
          value={this.state.title}
          onChangeText={ (text) => this.setState({title: text}) }
          onSubmitEditing={this._onEndEditing}
        />
      </View>
    );
  }

  _onEndEditing() {
    this.props.onEndEditing(this.state.title);
    this.setState({ title: "" });
  }

}

NewTodoRow.propTypes = {
  onEndEditing: PropTypes.func.isRequired,
};

module.exports = NewTodoRow;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#c5e4ee',
  },
  textField: {
    height: 44,
    paddingHorizontal: 8,
  }
});
