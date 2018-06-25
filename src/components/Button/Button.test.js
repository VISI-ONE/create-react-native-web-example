import { Platform, TouchableHighlight } from 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Button from './Button';

const onClick = jest.fn();
describe('Button', () => {
  it('renders without errors', () => {
    const tree = renderer.create(<Button onClick={onClick}/>);
    expect(tree.toJSON()).toBeTruthy();
  });

  it('example snapshot test on - ' + Platform.OS, () => {
    const tree = renderer.create(<Button onClick={onClick}/>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('onClick called when onPress fires', () => {
    onClick.mock.calls = [];
    const tree = renderer.create(<Button onClick={onClick}/>);
    tree.root.findByType(TouchableHighlight).props.onPress();
    expect(onClick.mock.calls).toEqual([[]]);
  });
});
