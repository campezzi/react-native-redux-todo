import React, {
  PropTypes,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class NavigationBarButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={this.props.titleStyle || styles.titleStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }

}

NavigationBarButton.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: Text.propTypes.style,
  onPress: PropTypes.func,
}

module.exports = NavigationBarButton;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
