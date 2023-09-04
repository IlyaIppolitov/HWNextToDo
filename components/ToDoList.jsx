import React from "react";
import styles from './ToDoList.module.css'

// Объявление задач по умолчанию
const defaultItems = [
  'выбросить мусор',
  'купить хлеб',
  'помыть машину',  
];

export function ToDoList () {
  const [todos, setTodos] = React.useState(defaultItems)
  const [inputValue, setInputValue] = React.useState('')

  function handleInputLineChange(e){
    setInputValue(e.target.value)
  }

  function handleSubmitButton(e){
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  }

  function handleDeleteButton(index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  
  return (
    <div className={styles.container}>
      <h1>Todo list</h1>
      <div className={styles.newItem}>
        <input type='text' placeholder="Введите новую задачу" value={inputValue} onChange={evt => handleInputLineChange(evt)}/>
        <button onClick={handleSubmitButton}>Добавить</button>
      </div>      
      <div className={styles.totalList}>
        <ol>
          {todos.map((todo, index) => (
            <div className = {styles.todoItem}>
              <li key={index}>
                <input type="checkbox"/>
                {todo}
                <button onClick={() =>handleDeleteButton(index)}>Удалить</button>
              </li>
            </div>
          ))}
        </ol>
      </div>     
    </div>
  )
}

