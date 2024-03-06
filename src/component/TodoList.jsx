import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          index={index}
          text={task.text}
          completed={task.completed}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
}

export default TodoList;
