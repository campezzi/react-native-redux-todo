import React, {
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class TodoRow extends React.Component {

  constructor(props) {
    super(props);
    this._stylesForFlap = this._stylesForFlap.bind(this);
    this._stylesForTitle = this._stylesForTitle.bind(this);
    this._onPress = this._onPress.bind(this);
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPress} underlayColor="#efefef">
        <View style={styles.container}>
          <View style={this._stylesForFlap()}></View>
          <Text style={this._stylesForTitle()}>{this.props.todo.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _stylesForFlap() {
    let { todo } = this.props;
    return [
      styles.flap,
      todo.done && styles.flapDone
    ];
  }

  _stylesForTitle() {
    let { todo } = this.props;
    return [
      styles.title,
      todo.done && styles.titleDone,
    ];
  }

  _onPress() {
    let { onPress, todo } = this.props;
    onPress(todo);
  }

}

TodoRow.propTypes = {
  todo: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

module.exports = TodoRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
  flap: {
    width: 10,
    alignSelf: 'stretch',
    backgroundColor: 'red',
    marginRight: 8,
  },
  flapDone: {
    backgroundColor: 'green',
  },
  title: {
    fontSize: 16,
  },
  titleDone: {
    textDecorationLine: 'line-through',
  },
});
