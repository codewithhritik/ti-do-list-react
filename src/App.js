import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { db } from './firebase/firebase-config';
import { Button } from '@material-ui/core';
import firebase from 'firebase';
import TodoListItem from './components/TodoListItem.component';

function App() {
  // Hooks
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    var subItems = [];

    db.collection("todos").add({
      inProgress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
      subItem: subItems
    });

    setTodoInput("");
  }

  const getTodos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inProgress: doc.data().inProgress
      })));
    });
  };

  return (
    <div className="App">
      <div className="Todo__body">
        <form>
          <h1 style={{textAlign: "center"}} > What's the Plan for Today? </h1>
          <TextField
            className="input__field"
            label="Write a Todo and press enter"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={addTodo}
            style={{display: "none"}}
          >
            Primary
          </Button>
        </form>

        <div className="All__todos">
          {
            todos.map((todo) => (
              <TodoListItem todo={todo.todo} inProgress={todo.inProgress} id={todo.id} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
