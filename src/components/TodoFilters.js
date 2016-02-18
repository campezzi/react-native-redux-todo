import React, {
  PropTypes,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class TodoFilters extends React.Component {

  constructor(props) {
    super(props);
    this._renderOptions = this._renderOptions.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderOptions()}
      </View>
    );
  }

  _renderOptions() {
    let { options, selected } = this.props;
    return Object.keys(options).map((key) => {
      let containerStyles = [
        styles.optionContainer,
        selected == key && styles.optionContainerSelected,
      ]
      return (
        <TouchableHighlight
          key={key}
          style={containerStyles}
          underlayColor="#cecece"
          onPress={() => this.props.onChange(key)}
        >
          <Text>{options[key]}</Text>
        </TouchableHighlight>
      );
    });
  }

}

TodoFilters.propTypes = {
  options: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

module.exports = TodoFilters;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContainer: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  optionContainerSelected: {
    backgroundColor: '#cecece',
  },
});
