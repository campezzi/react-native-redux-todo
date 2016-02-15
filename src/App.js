import React, {
  Navigator,
  StyleSheet,
} from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from './reducers';

import Router from './Router';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          configureScene={() => Navigator.SceneConfigs.FloatFromBottom}
          renderScene={this._renderScene}
          initialRoute={Router.home()}
          sceneStyle={styles.sceneStyle}
        />
      </Provider>
    );
  }

  _renderScene(route, navigator) {
    let SceneComponent = route.component;
    return <SceneComponent navigator={navigator} />
  }

}

module.exports = App;

const styles = StyleSheet.create({
  sceneStyle: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
