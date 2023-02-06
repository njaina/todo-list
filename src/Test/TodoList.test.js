import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../Components/TodoList';

describe('TodoList component', () => {
  it('renders correctly', () => {
    const handleCheck = jest.fn();
    const InputValues = ['item 1', 'item 2'];
    const tree = renderer
      .create(<TodoList InputValues={InputValues} handleCheck={handleCheck} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
