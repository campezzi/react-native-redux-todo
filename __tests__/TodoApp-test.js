'use strict';

const React = require('react-native');
const { Text } = React;

const utils = require('react-addons-test-utils');

jest.dontMock('../src/TodoApp');
var TodoApp = require('../src/TodoApp');

describe('TodoApp', () => {

  function renderScreen(props = {}) {
    const renderer = utils.createRenderer();
    renderer.render(<TodoApp {...props} />);
    return renderer.getRenderOutput();
  }

  it('shows a hello message', () => {
    let output = renderScreen({ name: "Thiago" });
    expect(output.type).toEqual(Text);
    expect(output.props.children).toEqual("Hello, Thiago!");
  });

  it('shows a hello message to any passed name', () => {
    let output = renderScreen({ name: "World" });
    expect(output.type).toEqual(Text);
    expect(output.props.children).toEqual("Hello, World!");
  });

});
