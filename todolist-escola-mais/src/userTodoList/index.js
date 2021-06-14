import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchTodosByUser, patchTodo, postTodo } from "../api/api";

////Styled/////
import {
  Container,
  ContainerTwo,
  Text,
  Checkbox,
  Line,
  DivCheckbox,
  Label,
} from "./styled";

function UserTodoList() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const params = useParams();
  const { userId } = params;

  console.log(todoList);

  useEffect(() => {
    fetchTodosByUser(userId).then((todos) => {
      setTodoList(todos);
    });
  }, []);

  const handleChange = (todo) => {
    const body = JSON.stringify({
      completed: !todo.completed,
    });

    patchTodo(todo.id, body).then((response) => {
      setTodoList((prevState) => {
        const newState = prevState.filter((elem) => elem.id !== todo.id);
        newState.push(response);
        newState.sort((a, b) => a.id - b.id);
        return newState;
      });
    });
  };

  const handlePost = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      title: task,
      userId: userId,
    });

    postTodo(body).then((response) => {
      setTodoList((prevState) => {
        const newState = [...prevState];
        newState.push(response);
        return newState;
      });

      setTask();
    });
  };

  const handleTask = (e) => {
    const inputValue = e.target.value;
    setTask(inputValue);
  };

  return (
    <Container>
      <center>
        <div>
          <form>
            <Label htmlFor="tarefa">Tarefa</Label>
            <input
              onChange={handleTask}
              type="text"
              id="inputTarefa"
              name="tarefa"
              value={task}
            />

            <button type="submit" onClick={handlePost}>
              Criar
            </button>
          </form>
        </div>
      </center>
      <ContainerTwo>
        {todoList.map((item) => {
          let style = {
            fontSize: "16px",
          };

          if (item.completed) {
            style = {
              textDecoration: "line-through 3px",
            };
          }
          return (
            <div key={item.id}>
              <Line>
                <Text style={style}>
                  <Checkbox
                    onChange={() => handleChange(item)}
                    type="checkbox"
                  />
                  {item.title}
                </Text>
              </Line>
            </div>
          );
        })}

        <Link id="homeBtn" to="/">
          Home
        </Link>
      </ContainerTwo>
    </Container>
  );
}

export default UserTodoList;
