import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import TodoList from '../Components/TodoList';

describe('TodoList component', () => {
  it('renders todos correctly', () => {
    const InputValues = ['Learn React', 'Learn Jest'];
    const handleCheck = jest.fn();
    const { getByText } = render(
      <TodoList InputValues={InputValues} handleCheck={handleCheck} />
    );

    InputValues.forEach((todo) => {
      expect(getByText(todo)).toBeInTheDocument();
    });
  });

  it('calls handleCheck function when a todo is clicked', () => {
    const InputValues = ['Learn React', 'Learn Jest'];
    const handleCheck = jest.fn();
    const { getByText } = render(
      <TodoList InputValues={InputValues} handleCheck={handleCheck} />
    );

    const firstTodo = getByText(InputValues[0]);
    fireEvent.click(firstTodo);

    expect(handleCheck).toHaveBeenCalledTimes(0);

  });
});

