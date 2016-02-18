import React, {
  PropTypes,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class FakeNavigationBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.widget, styles.leftButton]}>
          {this.props.leftButton}
        </View>
        <View style={styles.widget}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={[styles.widget, styles.rightButton]}>
          {this.props.rightButton}
        </View>
      </View>
    );
  }

}

FakeNavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  leftButton: PropTypes.element,
  rightButton: PropTypes.element,
};

module.exports = FakeNavigationBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    paddingTop: 20,
    backgroundColor: 'lightblue',
  },
  leftButton: {
    alignItems: 'flex-start',
  },
  rightButton: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  widget: {
    flex: 1,
    alignItems: 'center',
  },
});
