import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from '../Components/TodoItem';

describe('TodoItem component', () => {
  it('renders correctly', () => {
    const todo = 'This is a sample todo';
    const handleCheck = jest.fn();
    const index = 0;

    const tree = renderer
      .create(<TodoItem todo={todo} handleCheck={handleCheck} index={index} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
