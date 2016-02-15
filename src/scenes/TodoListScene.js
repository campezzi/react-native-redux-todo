import React, {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as todoActions from '../actions/todoActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Router from '../Router';
import FakeNavigationBar from '../components/FakeNavigationBar';
import NavigationBarButton from '../components/NavigationBarButton';
import NewTodoRow from '../components/NewTodoRow';
import TodoRow from '../components/TodoRow';

class TodoListScene extends React.Component {

  constructor(props) {
    super(props);
    this._renderRightButton = this._renderRightButton.bind(this);
    this._renderTodo = this._renderTodo.bind(this);
    this._addTodo = this._addTodo.bind(this);
    this._toggleTodo = this._toggleTodo.bind(this);
    this._clearTodos = this._clearTodos.bind(this);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };
  }

  componentDidMount() {
    this.props.actions.loadTodos();
  }

  componentWillReceiveProps(nextProps) {
    let { dataSource } = this.state;
    let { todos } = nextProps;
    this.setState({ dataSource: dataSource.cloneWithRows(todos) })
  }

  render() {
    return (
      <View style={styles.container}>
        <FakeNavigationBar title="Todo List" rightButton={this._renderRightButton()} />
        <NewTodoRow onEndEditing={this._addTodo} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderTodo}
        />
      </View>
    );
  }

  _renderTodo(todo) {
    return <TodoRow todo={todo} onPress={this._toggleTodo} />;
  }

  _renderRightButton() {
    return <NavigationBarButton title="Clear" onPress={this._clearTodos} />
  }

  _addTodo(title) {
    if (!title) return;
    let newTodo = {
      title: title,
      done: false,
    };
    this.props.actions.addTodo(newTodo);
    this.props.actions.saveTodos();
  }

  _toggleTodo(todo) {
    this.props.actions.toggleTodo(todo);
    this.props.actions.saveTodos();
  }

  _clearTodos() {
    let { clearTodos, saveTodos } = this.props.actions;
    clearTodos();
    saveTodos();
  }

}

let mapState = (state) => ({ todos: state.todo.items });
let mapActions = (dispatch) => ({ actions: bindActionCreators(todoActions, dispatch) });

module.exports = connect(mapState, mapActions)(TodoListScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addTodoButton: {
    fontSize: 24,
    paddingHorizontal: 18,
    paddingTop: 4,
    paddingBottom: 12,
  }
});
